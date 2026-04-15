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
            title: "알뉴디자인 | 사장님을 위한 상세페이지 파트너",
            link: baseUrl,
            description: "디자인이 막막한 초보 사장님을 위한 든든한 파트너. 기획부터 디자인까지 친절하게 도와드리는 알뉴디자인스튜디오",
            pubDate: new Date().toUTCString(),
        },
        ...projects.map(project => ({
            title: project.title,
            link: `${baseUrl}/portfolio/${project.id}`,
            description: project.description || "",
            pubDate: new Date(project.created_at).toUTCString(),
        }))
    ];

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>알뉴디자인 (R:new Design Studio)</title>
  <link>${baseUrl}</link>
  <description>사장님을 위한 친절한 상세페이지 파트너, 알뉴디자인</description>
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
