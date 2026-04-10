import { getDb, Project } from "@/lib/d1";

export async function GET() {
    const baseUrl = "https://rnewds.com";
    const db = getDb();

    let projects: Project[] = [];
    try {
        const result = await db.prepare("SELECT * FROM projects ORDER BY created_at DESC LIMIT 10").all();
        projects = result.results || [];
    } catch (e) {
        console.error("RSS Generation Error:", e);
    }

    const items = [
        {
            title: "R:new Design Studio | 하이엔드 상세페이지 기획/디자인",
            link: baseUrl,
            description: "가치를 증명하는 압도적 비주얼의 힘. 데이터의 설계로 완성하는 프리미엄 상세페이지 전문가",
            pubDate: new Date().toUTCString(),
        },
        ...projects.map(project => ({
            title: project.title,
            link: `${baseUrl}/projects/${project.id}`,
            description: project.description || "",
            pubDate: new Date(project.created_at).toUTCString(),
        }))
    ];

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>R:new Design Studio</title>
  <link>${baseUrl}</link>
  <description>하이엔드 상세페이지 기획/디자인 전문가, R:new Design Studio</description>
  <language>ko</language>
  <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
  ${items.map(item => `
  <item>
    <title><![CDATA[${item.title}]]></title>
    <link>${item.link}</link>
    <description><![CDATA[${item.description}]]></description>
    <pubDate>${item.pubDate}</pubDate>
    <guid isPermaLink="true">${item.link}</guid>
  </item>`).join('')}
</channel>
</rss>`;

    return new Response(rss, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "s-maxage=3600, stale-while-revalidate",
        },
    });
}
