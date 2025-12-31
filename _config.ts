import lume from "lume/mod.ts";
import plugins from "./plugins.ts";

const site = lume();

site.use(plugins());

export default site;
