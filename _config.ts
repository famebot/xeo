import lume from "lume/mod.ts";
import blog from "./mod.ts";

const site = lume();

/*
1. Use Simple Blog theme as parent theme.
2. Create preprocessor to ensure all pages have a title, so we do not need to generate
   it in the templates.
*/
site
  .use(blog())
  .preprocess([".md"], (pages) => {
    for (const page of pages) {
      if (!page.data.title) {
        page.data.title = page.data.basename
          .replaceAll(/-(?!\d)/g, ` `) // remove hyphens unless followed by 0-9
          .replace(/\b\w/, (char) => char.toUpperCase()); // sentence case
      } // for title case use /\b\w/g
    }
  });

export default site;
