import baseBlog from "https://deno.land/x/lume_theme_simple_blog@v0.15.10/mod.ts";
import googleFonts from "lume/plugins/google_fonts.ts";
import { merge } from "lume/core/utils/object.ts";

import type { Options as BaseBlogOptions } from "https://deno.land/x/lume_theme_simple_blog@v0.15.10/mod.ts";

import "lume/types.ts";

export interface Options extends BaseBlogOptions {
  fonts?: {
    display?: string;
    text?: string;
  };
  colors?: {
    hue?: number;
    complement?: number;
    analogous?: number;
  };
}

export const defaults: Options = {
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
  // 0-360 integers 
  // As an `<angle>` is periodic, `<hue>` is normalized to the range [0deg, 360deg). It implicitly wraps around such that 480deg is the same as 120deg, -120deg is the same as 240deg, -1turn is the same as 1turn, and so on.
  colors: {
    hue: "172",
    complement: "351",
    analogous: "38",
  },
};

/** Configure the site */
export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site.use(baseBlog(options))
      .use(googleFonts({
        cssFile: "styles.css",
        placeholder: "/* google-fonts */",
        fonts: options.fonts,
      }));
  };
}
