import { Feed } from "feed";
import { blog } from "@/lib/source";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000";

export function getRSS() {
  const feed = new Feed({
    title: "tsukaryu's blog",
    id: `${baseUrl}/blog`,
    link: `${baseUrl}/blog`,
    language: "ja",
    description: "tsukaryu's personal blog",
    image: `${baseUrl}/banner.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: "All rights reserved 2025, tsukaryu",
  });

  for (const page of blog.getPages()) {
    feed.addItem({
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      link: `${baseUrl}${page.url}`,
      date: new Date(page.data.date),
      author: [
        {
          name: "tsukaryu",
        },
      ],
    });
  }

  return feed.rss2();
}
