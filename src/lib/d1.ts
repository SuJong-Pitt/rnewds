export interface Project {
  id: number;
  title: string;
  description: string | null;
  image_url: string | null;
  created_at: string;
}

/**
 * Cloudflare D1 REST API Client
 * 윈도우 환경의 Child Process 버그(Assertion failed)를 피하기 위해
 * wrangler 명령어 대신 Cloudflare 정식 REST API를 직접 호출합니다.
 */
class D1RestClient {
  private accountId: string;
  private databaseId: string;
  private apiToken: string;
  private apiKey: string;
  private apiEmail: string;

  constructor() {
    this.accountId = process.env.CLOUDFLARE_ACCOUNT_ID || "";
    this.databaseId = process.env.CLOUDFLARE_D1_DATABASE_ID || "";
    this.apiToken = process.env.CLOUDFLARE_API_TOKEN || "";
    this.apiKey = process.env.CLOUDFLARE_API_KEY || "";
    this.apiEmail = process.env.CLOUDFLARE_EMAIL || "";
  }

  prepare(query: string) {
    return {
      bind: (...args: any[]) => ({
        first: () => this.execute(query, args, true),
        run: () => this.execute(query, args),
        all: () => this.execute(query, args),
      }),
      first: () => this.execute(query, [], true),
      all: () => this.execute(query, []),
      run: () => this.execute(query, []),
    };
  }

  private async execute(sql: string, params: any[] = [], firstOnly = false) {
    const url = `https://api.cloudflare.com/client/v4/accounts/${this.accountId}/d1/database/${this.databaseId}/query`;
    
    // 글로벌 API 키 또는 토큰 중 하나를 선택하여 헤더 구성
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (this.apiKey && this.apiEmail) {
      headers["X-Auth-Key"] = this.apiKey;
      headers["X-Auth-Email"] = this.apiEmail;
    } else {
      headers["Authorization"] = `Bearer ${this.apiToken}`;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify({ sql, params }),
      });

      const data = await response.json();
      
      if (!data.success) {
        const error = data.errors?.[0]?.message || "Cloudflare API Error";
        const code = data.errors?.[0]?.code;
        throw new Error(`${error} (Code: ${code})`);
      }

      // API 응답 구조: data.result = [{ results: [...], success: true, meta: {...} }]
      const resultData = data.result[0];
      const results = resultData.results || [];
      const meta = resultData.meta || {};

      if (firstOnly) {
        return results[0];
      }
      
      return { results, meta };
    } catch (error: any) {
      console.error("D1 REST API Error:", error.message);
      throw error;
    }
  }
}

export function getDb() {
  // 배포 환경 (Cloudflare Pages)
  if (process.env.NODE_ENV === "production") {
    // Edge runtime에서만 require
    try {
        const { getRequestContext } = require("@cloudflare/next-on-pages");
        const context = getRequestContext();
        if (context?.env?.DB) return context.env.DB;
    } catch (e) {}
  }

  // 로컬 개발 환경: REST API 클라이언트 사용 (윈도우 호환성 100%)
  return new D1RestClient() as any;
}
