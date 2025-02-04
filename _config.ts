import lume from "lume/mod.ts";
import xeo from "xeo/mod.ts";

const site = lume();

site.use(xeo({
  fonts: {
    display:
      "https://fonts.google.com/share?selection.family=Playpen+Sans:wght@100..800",
    text:
      "https://fonts.google.com/share?selection.family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900",
  },
}));

export default site;
