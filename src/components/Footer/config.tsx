import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.defiswap.app/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/@defiswap_exchange",
      },
      {
        label: "Community",
        href: "https://docs.defiswap.app/contact-us/communities",
      },
      {
        label: "DeFiSwap Token",
        href: "https://docs.defiswap.app/tokenomics/defi-token",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://shop.defiswap.app/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "https://docs.defiswap.app/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "hhttps://docs.defiswap.app/click-here-for-help/troubleshooting-errors",
      },
      {
        label: "Guides",
        href: "https://docs.defiswap.app/",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/",
      },
      {
        label: "Documentation",
        href: "https://docs.defiswap.app/",
      },
      {
        label: "Bug Bounty",
        href: "https://docs.defiswap.app/developers/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.defiswap.app/",
      },
      {
        label: "Careers",
        href: "https://docs.defiswap.app/careers/hiring",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/defiswap_app",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/DeFiSwap_exchange",
      },
      //{
        //  label: "Bahasa Indonesia",
        //  href: "https://t.me/PancakeSwapIndonesia",
      //  },
      //  {
        //  label: "中文",
        //  href: "https://t.me/PancakeSwap_CN",
      //  },
      //  {
      //    label: "Tiếng Việt",
        //  href: "https://t.me/PancakeSwapVN",
      //  },
      //  {
        //  label: "Italiano",
        //  href: "https://t.me/pancakeswap_ita",
      //  },
      //  {
      //    label: "русский",
      //    href: "https://t.me/pancakeswap_ru",
      //  },
      //  {
        //  label: "Türkiye",
      //    href: "https://t.me/pancakeswapturkiye",
      //  },
      //  {
        //  label: "Português",
        //  href: "https://t.me/PancakeSwapPortuguese",
      //  },
      //  {
        //  label: "Español",
        //  href: "https://t.me/PancakeswapEs",
      //  },
      //  {
        //  label: "日本語",
        //  href: "https://t.me/pancakeswapjp",
      //  },
      //  {
      //    label: "Français",
      //    href: "https://t.me/pancakeswapfr",
      //  },
      //  {
      //    label: "Announcements",
      //    href: "https://t.me/PancakeSwapAnn",
      //  },
      //  {
        //  label: "Whale Alert",
      //    href: "https://t.me/PancakeSwapWhales",
      //  },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://www.reddit.com/r/defiswap_exchange/",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://www.instagram.com/defiswap_exhange/",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/defiswap_app/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/mM4rNGkd",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
