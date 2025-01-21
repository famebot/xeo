import lume from "lume/mod.ts";
import blog from "blog/mod.ts";
import googleFonts from "lume/plugins/google_fonts.ts";
import config from "./_config.json" with { type: "json" };

const site = lume({
  location: new URL(config.location),
});

site.use(blog())
  .use(googleFonts({
    cssFile: "styles.css",
    placeholder: "/* google-fonts */",
    fonts: {
      display: config.gfonts_display,
      text: config.gfonts_text,
    },
  }));

export default site;
