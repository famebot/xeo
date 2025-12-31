// lume/core
import { merge } from "lume/core/utils/object.ts";
// lume/plugins
import basePath from "lume/plugins/base_path.ts";
import date, { Options as DateOptions } from "lume/plugins/date.ts";
import extractDate from "lume/plugins/extract_date.ts";
import favicon from "lume/plugins/favicon.ts";
import feed, { Options as FeedOptions } from "lume/plugins/feed.ts";
import googleFonts from "lume/plugins/google_fonts.ts";
import metas from "lume/plugins/metas.ts";
import pagefind, { Options as PagefindOptions } from "lume/plugins/pagefind.ts";
import postcss from "lume/plugins/postcss.ts";
import prism, { Options as PrismOptions } from "lume/plugins/prism.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import sitemap from "lume/plugins/sitemap.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
/* Simple Blog uses Terser for comments JS we skip here, but may want for
   rainbow mode JS when that lands, .use() commented out below as well */
// import terser from "lume/plugins/terser.ts";
// lumeland/markdown-plugins
import footnotes from "https://cdn.jsdelivr.net/gh/lumeland/markdown-plugins@0.10.0/footnotes.ts";
import image from "https://cdn.jsdelivr.net/gh/lumeland/markdown-plugins@0.10.0/image.ts";
import toc from "https://cdn.jsdelivr.net/gh/lumeland/markdown-plugins@0.10.0/toc.ts";
// https://github.com/mdit-plugins/mdit-plugins
// docs https://mdit-plugins.github.io/alert.html
import { alert } from "https://cdn.jsdelivr.net/npm/@mdit/plugin-alert@0.22.3/lib/index.js";

import "lume/types.ts";

export interface Options {
  colors?: {
    hue?: number;
    complement?: number;
    analogous?: number;
    sathi?: number;
    satmid?: number;
    satlo?: number;
    xlight?: number;
    lighter?: number;
    lightness?: number;
    midrange?: number;
    lowmid?: number;
    darkness?: number;
    darker?: number;
  };

  date?: Partial<DateOptions>;
  feed?: Partial<FeedOptions>;

  fonts?: {
    display?: string;
    text?: string;
  };

  pagefind?: Partial<PagefindOptions>;
  prism?: Partial<PrismOptions>;
}

export const defaults: Options = {
  colors: {
    /*
      HSL hues
      In CSS, an `<angle>` is periodic, `<hue>` is normalized to the range
      [0deg, 360deg). It implicitly wraps around such that 480deg is the same
      as 120deg, -120deg is the same as 240deg, -1turn is the same as 1turn,
      and so on. Yet here we pass a number
      https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
      1-359 for each of the 3 hue values, to get simple type inference
      https://www.typescriptlang.org/docs/handbook/type-inference.html
    */
    hue: 172,
    complement: 351,
    analogous: 38,

    // color mixing values
    sathi: 94, // 80-100
    satmid: 54, // 50-70
    satlo: 20, // 10-30
    xlight: 92, // 84-92
    lighter: 83, // 76-84
    lightness: 65, // 64-72
    midrange: 54, // 48-64
    lowmid: 36, // 28-36
    darkness: 20, // 16-24
    darker: 9, // 0-12
  },

  feed: {
    output: ["/feed.xml", "/feed.json"],
    query: "type=post",
    info: {
      title: "=metas.site",
      description: "=metas.description",
    },
    items: {
      title: "=title",
    },
  },

  fonts: {
    display: "https://fonts.google.com/share?selection.family=Bebas+Neue",
    text:
      "https://fonts.google.com/share?selection.family=Lexend:wght@100..900",
  },
};

/** Configure the site */
export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site.data("colorscheme", options.colors);

    // .use(terser())
    site.use(googleFonts({
      cssFile: "styles.css",
      placeholder: "/* google-fonts */",
      fonts: options.fonts,
    }))
      .use(postcss())
      .use(basePath())
      .use(toc())
      .use(prism(options.prism))
      .use(readingInfo())
      .use(date(options.date))
      .use(slugifyUrls())
      .use(metas())
      .use(image())
      .use(footnotes())
      .use(resolveUrls())
      .use(pagefind(options.pagefind))
      .use(sitemap())
      .use(feed(options.feed))
      .use(extractDate())
      .use(favicon())
      .ignore("README.md")
      .ignore("LICENSE.md")
      .add("fonts")
      .add([".css"])
      .add("js")
      .add("favicon.png")
      .add("uploads")
      .mergeKey("extra_head", "stringArray")
      .preprocess([".md"], (pages) => {
        for (const page of pages) {
          if (!page.data.title) {
            page.data.title = page.data.basename
              .replaceAll(/-(?!\d)/g, ` `) // remove hyphens unless followed by 0-9
              .replace(/\b\w/, (char) => char.toUpperCase()); // sentence case
          } // for title case use /\b\w/g

          page.data.excerpt ??= (page.data.content as string).split(
            /<!--\s*more\s*-->/i,
          )[0];
        }
      });

    // Alert plugin
    site.hooks.addMarkdownItPlugin(alert);
  };
}
