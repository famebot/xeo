import lume from "lume/mod.ts";
import blog from "blog/mod.ts";

import googleFonts from "lume/plugins/google_fonts.ts";

const site = lume({
  location: new URL("https://xeo.land"),
});

site.use(blog())
  .use(googleFonts({
    cssFile: "styles.css",
    placeholder: "/* google-fonts */",
    fonts: {
      display: "https://fonts.google.com/share?selection.family=Bebas+Neue",
      text:
        "https://fonts.google.com/share?selection.family=Lexend:wght@100..900",
      // Bebas Neue (only 400 + no italics, default display)
      // https://fonts.google.com/share?selection.family=Bebas+Neue
      // Lexend (variable, default text)
      // https://fonts.google.com/share?selection.family=Lexend:wght@100..900
      // Poppins (alternative text)
      // https://fonts.google.com/share?selection.family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900
    },
  }));

export default site;
