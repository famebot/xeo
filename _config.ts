import lume from "lume/mod.ts";
import blog from "blog/mod.ts";

const site = lume();

site.use(blog());

export default site;
