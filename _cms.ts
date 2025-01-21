import lumeCMS from "lume/cms/mod.ts";
import { Field } from "lume/cms/types.ts";

const cms = lumeCMS();

const url: Field = {
  name: "url",
  type: "text",
  description: "The public URL of the page. Leave empty to use the file path.",
  transform(value) {
    if (!value) {
      return;
    }

    if (!value.endsWith("/")) {
      value += "/";
    }
    if (!value.startsWith("/")) {
      value = "/" + value;
    }

    return value;
  },
};

cms.document({
  name: "Options: Set custom URLs for Google Fonts + site location/domain",
  store: "src:_config.json",
  fields: [
    "location:url",
    "gfonts_display:url",
    "gfonts_text:url",
  ],
});

cms.document(
  "settings: Global settings for the site",
  "src:_data.yml",
  [
    {
      name: "lang",
      type: "text",
      label: "Language",
    },
    {
      name: "home",
      type: "object",
      fields: [
        {
          name: "welcome",
          type: "text",
          label: "Title",
          description: "Homepage welcome message",
        },
        {
          name: "intro",
          type: "text",
          label: "Introduction",
          description: "Subtitle beneath the welcome message",
        },
      ],
    },
    {
      name: "copyright",
      type: "text",
      description: "Footer message",
    },
    {
      name: "menu_links",
      type: "object-list",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
        },
        {
          name: "url",
          type: "text",
          label: "URL",
        },
      ],
    },
    {
      name: "extra_head",
      type: "code",
      description: "Extra content to include in the <head> tag",
    },
    {
      name: "metas",
      type: "object",
      description: "Meta tags configuration.",
      fields: [
        "site: text",
        "description: text",
        "title: text",
        "image: text",
        // "twitter: text",
        "lang: text",
        "generator: checkbox",
      ],
    },
  ],
);

cms.collection(
  "posts: Blog posts",
  "src:posts/*.md",
  [
    "title: text",
    url,
    {
      name: "author",
      type: "text",
      init(field, { data }) {
        field.options = data.site?.search.values("author");
      },
    },
    "date: date",
    {
      name: "draft",
      label: "Draft",
      type: "checkbox",
      description: "If checked, the post will not be published.",
    },
    {
      name: "tags",
      type: "list",
      label: "Tags",
      init(field, { data }) {
        field.options = data.site?.search.values("tags");
      },
    },
    {
      name: "extra_head",
      type: "code",
      description: "Extra content to include in the <head> tag",
    },
    {
      name: "content",
      type: "markdown",
      label: "Content",
    },
  ],
);

cms.collection(
  "pages: Additional pages, like about, contact, etc.",
  "src:pages/*.md",
  [
    {
      name: "layout",
      type: "hidden",
      value: "layouts/page.vto",
    },
    {
      name: "title",
      type: "text",
      label: "Title",
    },
    url,
    {
      name: "menu",
      type: "object",
      label: "Whether to include in the menu",
      fields: [
        {
          name: "visible",
          type: "checkbox",
          label: "Show in menu",
        },
        {
          name: "order",
          type: "number",
          label: "Order",
        },
      ],
    },
    {
      name: "extra_head",
      type: "code",
      description: "Extra content to include in the <head> tag",
    },
    {
      name: "content",
      type: "markdown",
      label: "Content",
    },
  ],
);

cms.upload("uploads: Uploaded files", "src:uploads");

export default cms;
