const CONFIG = {
  // profile setting (required)
  profile: {
    name: "soonsoonyy",
    image: "https://notion-avatar.vercel.app/api/svg/eyJmYWNlIjo1LCJub3NlIjo2LCJtb3V0aCI6MiwiZXllcyI6NCwiZXllYnJvd3MiOjgsImdsYXNzZXMiOjAsImhhaXIiOjE4LCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MywiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer, 백엔드 개발자",
    bio: "A developer who spills the beans through code, no secrets here!",
    email: "soonsoonyy.dev@gmail.com",
    linkedin: "soonsoonyy",
    github: "soonsoonyy",
    instagram: "",
  },
  projects: [
    {
      name: `스프링 코어 분석하기`,
      href: "https://github.com/GGOGGOMU/spring-core/tree/eunbi",
    },
    {
      name: `Geek의 Knitting Story`,
      href: "https://github.com/soonSoonyy/geeknitter",
    },
  ],
  // blog setting (required)
  blog: {
    title: "soonsoonyy-blog",
    description: "🤖",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://soonsoonyy-notion-blog-git-main-soonsoonyys-projects.vercel.ap/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://soonsoonyy-notion-blog-git-main-soonsoonyys-projects.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
