import lume from "lume/mod.ts";
import blog from "blog/mod.ts";

const site = lume();

// site.copy("_includes/css/inter", "inter");

site.use(blog());

export default site;
