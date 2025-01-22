import plugins, { Options } from "./plugins.ts";

import "lume/types.ts";

export type { Options } from "./plugins.ts";

export default function (options: Partial<Options> = {}) {
  return (site: Lume.Site) => {
    // Configure the site
    site.use(plugins(options));

    // Add remote files
    const files: string[] = [
      "_includes/css/ds.css",
      "_includes/css/page.css",
      "_includes/css/post-list.css",
      "_includes/css/post.css",
      "_includes/layouts/archive_result.vto",
      "_includes/layouts/archive.vto",
      "_includes/layouts/base.vto",
      "_includes/layouts/page.vto",
      "_includes/layouts/post.vto",
      "_includes/templates/post-details.vto",
      "posts/_data.yml",
      "_data.yml",
      "_data/i18n.yml",
      "404.md",
      "archive.page.js",
      "index.vto",
      "styles.css",
    ];

    for (const file of files) {
      site.remoteFile(file, import.meta.resolve(`./${file}`));
    }
  };
}
