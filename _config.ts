import lume from "lume/mod.ts";
import blog from "./mod.ts";

const site = lume();

/*
1. Use Simple Blog theme as parent theme.
2. Create preprocessor to ensure all pages have a title, so we do not need to generate
   it in the templates.
*/
site
  .use(blog());

export default site;
