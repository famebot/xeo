import lume from "lume/mod.ts";
import blog from "./mod.ts";
import favicon from "lume/plugins/favicon.ts";

const site = lume();

site
  .use(blog())
  .use(favicon())

export default site;
