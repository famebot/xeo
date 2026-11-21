# Changelog

All notable changes to this project will be documented in this file.

From v10 onward, the format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Guiding Principles

- The latest version comes first.
- There should be an entry for every single version.
- Versions and sections should be linkable.
- The release date of each version is displayed.
- The same types of changes should be grouped.

## Types of changes

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

---

## Unreleased

Upcoming changes:

- Upstream image and photo features from https://rdela.com
- Upstream video + gallery features from https://artact.io

---

## [10.0.0](https://github.com/famebot/xeo/releases/tag/v10.0.0) - 2026-11-15

### Changed

This version, v10, has been ported to Node and is compatible with Lume 4.

v10 is a fork of Simple Blog v2.0.2 (2026-11-13), like preceding versions of Xeo
were a fork of an earlier version of Simple Blog from when Lume ran on Deno (v3
and earlier). Xeo was orginally a child theme of Simple Blog until v7.

> Starting with version 7, Xeo no longer depends on Simple Blog as its parent
> theme.

The preceding entries below apply only to the Deno versions of Xeo, v9.0.4 and
earlier.

**Full Changelog**: https://github.com/famebot/xeo/compare/v9.0.4...v10.0.0

---

## [9.0.4](https://github.com/famebot/xeo/releases/tag/v9.0.4) - 2026-11-14

- c279328 new img + vid slogan, evergreen link to date parser
- 1606a0d dedupe homepage title when it matches site title

**Full Changelog**: https://github.com/famebot/xeo/compare/v9.0.3...v9.0.4

---

## [9.0.3](https://github.com/famebot/xeo/releases/tag/v9.0.3) - 2026-08-23

- reorganize readme, updating it and instructional posts by @rdela in
  https://github.com/famebot/xeo/pull/50
- fix: Bebas Neue font-weight for --font-title and --font-display by @rdela in
  https://github.com/famebot/xeo/pull/51

  > Bebas Neue on Google Fonts only has 400 (Regular) weight.
  >
  > <https://fonts.google.com/specimen/Bebas+Neue>
  >
  > `--font-title` and `--font-display` vars from Lume DS use
  >
  > `--font-bold` (600), so we have overridden them using a new
  >
  > `--font-regular` (400) var here
  >
  > Title and display text much crisper now.
  >
  > Readjusted letter-spacing after.

**Full Changelog**: https://github.com/famebot/xeo/compare/v9.0.2...v9.0.3

---

## [9.0.2](https://github.com/famebot/xeo/releases/tag/v9.0.2) - 2026-08-22

- Update readme and posts, deno fmt by @rdela in
  https://github.com/famebot/xeo/pull/49

**Full Changelog**: https://github.com/famebot/xeo/compare/v9.0.1...v9.0.2

---

## [9.0.1](https://github.com/famebot/xeo/releases/tag/v9.0.1) - 2026-08-22

- index/home page: use site title instead of “Home” by @rdela in
  https://github.com/famebot/xeo/pull/48

**Full Changelog**: https://github.com/famebot/xeo/compare/v9.0.0...v9.0.1

---

## [9.0.0](https://github.com/famebot/xeo/releases/tag/v9.0.0) - 2026-08-18

- update deps, slogan, add changelog template by @rdela in
  https://github.com/famebot/xeo/pull/47

**Full Changelog**: https://github.com/famebot/xeo/compare/v8.1.0...v9.0.0

Because **updating to 8.1.1 may require you to update your your `deno.json` and
is therefore a breaking change**, I have tagged this essentially unchanged
release v9. Thanks to a tagging mishap,
[v8.1.1](https://github.com/famebot/xeo/releases/tag/v8.1.1) was tagged on
e7dac5d instead of caa6398, so figured I might as well burn an integer in the
major column to make things more clear until
[version 10](https://github.com/famebot/xeo/milestone/1) lands soon with many
[new features](https://github.com/orgs/famebot/projects/1) coming.

I was hoping 8.1.1 would not require modifications downstream, but in updating
[Xogo](https://xogo.xeo.land/) (07946a8,
[line 7](https://github.com/famebot/xeo/commit/07946a8c6d836defeb6d12cd71413bc4dbc0d295#diff-54337bcff4b919f6b8b4e0b0e51d06fd9124562fde88899be726c24b7e354b7cR7))
I realized it does. If you see this error:

> Loading config file `file:///lume/xeo/_config.ts`
>
> **error**: Uncaught (in worker "") (in promise) TypeError: Module not found
> "`https://cdn.jsdelivr.net/npm/@mdit/plugin-alert@2.0.0/lib/index.js`". at
> `https://cdn.jsdelivr.net/gh/famebot/xeo@8.1.1/plugins.ts:27:23`

```js
const mod = await import(_config.toString());
            ^
```

> at async _createSite_
> (`https://cdn.jsdelivr.net/gh/lumeland/lume@3.3.1/cli/utils.ts:11:15`) at
> async _build_
> (`https://cdn.jsdelivr.net/gh/lumeland/lume@3.3.1/cli/build_worker.ts:50:16`)
> **error**: Uncaught (in promise) Error: Unhandled error in child worker. at
> `Worker.#pollControl` (`ext:runtime/11_workers.js:1:3400`)

**Then change this in `deno.json`**

```diff
-    "mdit/plugin-alert": "https://cdn.jsdelivr.net/npm/@mdit/plugin-alert@0.22.3/lib/index.js",
+    "mdit/plugin-alert": "https://cdn.jsdelivr.net/npm/@mdit/plugin-alert@2.0.0/dist/index.js",
```

That is, change **`/lib/`** to **`/dist/`** at the end of the line:
`/lib/index.js",` to `/dist/index.js",`

This happens when upgrading from versions (less than or equal to) 8.1.0 to 8.1.1
or higher.

```diff
-    "xeo/": "https://cdn.jsdelivr.net/gh/famebot/xeo@8.1.0/"
+    "xeo/": "https://cdn.jsdelivr.net/gh/famebot/xeo@8.1.1/"
```

---

## [v8.1.1](https://github.com/famebot/xeo/releases/tag/v8.1.1) - 2026-08-12

update deps, slogan, add changelog template #47

- e7dac5d add changelog template and ignore for build
- 3757f83 update slogan to highlight descent of Xeo from Simple Blog
- 4d20ff7 update deps, switch plugin-alert from /lib to /dist for v2

**WARNING**

Due to upstream
[breaking changes in @mdit/plugin-alert](https://github.com/mdit-plugins/mdit-plugins/blob/main/packages/plugin-alert/CHANGELOG.md),
this last change above (4d20ff7, merged at caa6398) **updating to 8.1.1 may
require you to update your your `deno.json` so is possibly a breaking change
after all.** I was hoping it would not require modifications downstream, but in
updating [Xogo](https://xogo.xeo.land/) (07946a8,
[line 7](https://github.com/famebot/xeo/commit/07946a8c6d836defeb6d12cd71413bc4dbc0d295#diff-54337bcff4b919f6b8b4e0b0e51d06fd9124562fde88899be726c24b7e354b7cR7)),
it did.

If you see this error:

> Loading config file `file:///lume/xeo/_config.ts`
>
> **error**: Uncaught (in worker "") (in promise) TypeError: Module not found
> "`https://cdn.jsdelivr.net/npm/@mdit/plugin-alert@2.0.0/lib/index.js`". at
> `https://cdn.jsdelivr.net/gh/famebot/xeo@8.1.1/plugins.ts:27:23`

```js
const mod = await import(_config.toString());
            ^
```

> at async _createSite_
> (`https://cdn.jsdelivr.net/gh/lumeland/lume@3.3.1/cli/utils.ts:11:15`) at
> async _build_
> (`https://cdn.jsdelivr.net/gh/lumeland/lume@3.3.1/cli/build_worker.ts:50:16`)
> **error**: Uncaught (in promise) Error: Unhandled error in child worker. at
> `Worker.#pollControl` (`ext:runtime/11_workers.js:1:3400`)

**Then change this in `deno.json`**

```diff
-    "mdit/plugin-alert": "https://cdn.jsdelivr.net/npm/@mdit/plugin-alert@0.22.3/lib/index.js",
+    "mdit/plugin-alert": "https://cdn.jsdelivr.net/npm/@mdit/plugin-alert@2.0.0/dist/index.js",
```

That is, change **`/lib/`** to **`/dist/`** at the end of the line:
`/lib/index.js",` to `/dist/index.js",`

This happens when upgrading from versions (less than or equal to) 8.1.0 to 8.1.1
or higher.

```diff
-    "xeo/": "https://cdn.jsdelivr.net/gh/famebot/xeo@8.1.0/"
+    "xeo/": "https://cdn.jsdelivr.net/gh/famebot/xeo@8.1.1/"
```

Fortunately, [version 9](https://github.com/famebot/xeo/milestone/1) will land
soon with many [features](https://github.com/orgs/famebot/projects/1) that will
be worth the effort to upgrade for.

---

## [v8.1.0](https://github.com/famebot/xeo/releases/tag/v8.1.0) - 2026-06-10

- eleventeen.blog => eleventeen.netlify.app by @rdela in
  https://github.com/famebot/xeo/pull/44
- allow providing an arbitrary file to favicon plugin input option by @rdela in
  https://github.com/famebot/xeo/pull/46
  - allow providing an arbitrary file to favicon plugin input option
    - Xeo uses Lume’s favicon plugin (https://lume.land/plugins/favicon/), and
      starting with Xeo version 8.1, Xeo allows you to control the favicon
      plugin’s `input` option to provide an alternate file other than the
      default, `./favicon.svg`, which had been hardcoded up through version
      8.0.1. Thanks to @pamubay on GitHub for raising this issue (#45) in Lume
      GitHub discussions (lumeland/lume#814). fixes #45
  - update docs for pull #46
  - remote theme docs updates: jsdelivr + nudd
    - add jsdelivr badge
    - import URLs: use jsdelivr instead of deno.land/x
    - mention Nudd for updating remote modules
  - move jsdelivr badge below copyright
  - update remote theme install docs to abide by `no-external-import`
    - `no-external-import`: Disallows the use of external imports.

      https://docs.deno.com/lint/rules/no-external-import/

      > To avoid it you could use import maps, where you import all external
      > modules and then re-export them or assign aliases to them.

      follows the Import Maps Standard:
      https://html.spec.whatwg.org/multipage/webappapis.html#import-maps

      Background:
      https://docs.deno.com/runtime/fundamentals/modules/#managing-third-party-modules-and-libraries
  - make setting favicon + logo independently more obvious
    - add logo.svg and use for `logo.svg` option in /_data.yml
    - add logo.svg to `files` const in /mod.ts and
    - `site.add` logo.svg in /plugins.ts
    - update Lume version to 3.2.6 in remote theme examples

**Full Changelog**: https://github.com/famebot/xeo/compare/v8.0.1...v8.1.0

---

## [v8.0.1](https://github.com/famebot/xeo/releases/tag/v8.0.1) - 2026-01-21

- v8 housekeeping by @rdela in https://github.com/famebot/xeo/pull/42
  https://github.com/famebot/xeo/commit/4504f3c525ef3bd2ceb3b2e424a2bdb4aea7a99e

  - shorten v7 notice
  - deno.json serve shorthands
  - rearrange css imports + ds overrides, unreleased @lumeland/ds 0.6 see
    https://github.com/lumeland/ds/issues/6
  - edit v7 notice more, update welcome + intro, add sites built w/
  - add migration steps, update desc + post # defaults
  - add domains to sites built

Stay tuned for initial image support for posts and pages #43

> get images landed like on https://rdela.com pick up where
> https://github.com/famebot/xeo/pull/42 leaves off

**Full Changelog**: https://github.com/famebot/xeo/compare/v8.0.0...v8.0.1

---

## [v8.0.0](https://github.com/famebot/xeo/releases/tag/v8.0.0) - 2026-01-06

## Migration steps

Version 8 introduces more customization options that need to be set when you
upgrade.

1. Set these
   [new options](https://github.com/famebot/xeo/blob/v8.0.0/_data.yml#L5-L11) in
   `_data.yml` to configure them:

   - `home.posts` (default: `3`) - The number of recent posts shown on the home
     page.

   - `archives.posts` (default: `12`) - The number of posts shown on archive
     pages.

   - `archives.tag` (default: `10`) - The number of posts shown on tag pages.

   - `archives.author` (default: `10`) - The number of posts shown on author
     pages.

   - `archives.basename` (default: `archive`) - The path/slug of the post
     archive. (The “Archive” title is set by `i18n.nav.archive_title` in
     [`_data/i18n.yml`](https://github.com/famebot/xeo/blob/trunk/_data/i18n.yml),
     which you can create a copy of in your Xeo site to add, customize, or
     override values. The search box label, `i18n.nav.archive_search`, is also
     set there.)

2. Rename
   [logo options](https://github.com/famebot/xeo/blob/v8.0.0/_data.yml#L17-L19)
   in `_data.yml`

   - `logo` is now `logo.svg` (default is still: `/favicon.svg`)

   - `logo_height` is now `logo.height` (default is still: `48`)

- Merge pull request #41 from famebot/options

  Create archive title + # of posts on archive/collection pages options by
  @rdela in https://github.com/famebot/xeo/pull/41

  - closes #25

    > Make Archive title + number of posts on archive/collection pages
    > configurable

  - Respect the flow of the Lume shared `_data` variable current

  https://lume.land/docs/creating-pages/shared-data/#the-_data-directories

  - Clarify `logo` (file) `svg` and `height`

  - implement `archives.basename` and make existing templates use it

**Full Changelog**: https://github.com/famebot/xeo/compare/v7.0.4...v8.0.0

---

## [v7.0.4](https://github.com/famebot/xeo/releases/tag/v7.0.4) - 2026-01-06

- Switch Nudd to jsDelivr, bump deps, lume 3.1.4 by @rdela in
  https://github.com/famebot/xeo/pull/40

**Full Changelog**: https://github.com/famebot/xeo/compare/v7.0.3...v7.0.4

---

## [v7.0.3](https://github.com/famebot/xeo/releases/tag/v7.0.3) - 2026-01-06

- reprefix markdown-plugins and add prefix for mdit/plugin-alert by @rdela in
  https://github.com/famebot/xeo/pull/39

**Full Changelog**: https://github.com/famebot/xeo/compare/v7.0.2...v7.0.3

---

## [v7.0.2](https://github.com/famebot/xeo/releases/tag/v7.0.2) - 2026-01-06

- fix: rm `lume/` from `markdown-plugins` prefix by @rdela in
  https://github.com/famebot/xeo/pull/38

**Full Changelog**: https://github.com/famebot/xeo/compare/v7.0.1...v7.0.2

---

## [v7.0.1](https://github.com/famebot/xeo/releases/tag/v7.0.1) - 2025-12-31

- prune deps, add tags + sort tag archive pages newest first #37

  a3fad6d Merge pull request #37 from famebot/prunedeps

  - prune deps
    - rm vestigial `blog` import
    - appease
      [`no-import-prefix`](https://docs.deno.com/lint/rules/no-import-prefix/)
      - declared `lume/markdown-plugins` dependencies in `deno.json`
  - add tags to new extract date example posts + differences
  - sort tag archive pages newest first (date=desc)

**Full Changelog**: https://github.com/famebot/xeo/compare/v7.0.0...v7.0.1

---

## [v7.0.0](https://github.com/famebot/xeo/releases/tag/v7.0.0) - 2025-12-31

- v7 stand-alone complex - child no more by @rdela in
  https://github.com/famebot/xeo/pull/36

  77b5a9e Merge pull request https://github.com/famebot/xeo/pull/36 from
  famebot/split

  - Xeo has diverged substantially enough from Simple Blog that Óscar and Ricky
    agree it is time for Xeo to become a fully stand-alone Lume theme.

  - As of Xeo version 7.0, the successor to v6.3.8, Xeo no longer depends on
    Simple Blog as its parent theme. Because Xeo is no longer a child theme,
    using Xeo as a parent theme to make your own child theme just got easier.
    Another bonus of the split is that Simple Blog can now freely implement
    features that landed in Xeo first (like custom fonts and colors) without
    having to worry about compatibility issues with Xeo or downstream themes and
    sites that depend on Xeo.

  - Update deps, tasks, dates, posts & readme

  https://lume.land/theme/xeo/

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.3.8...v7.0.0

---

## [v6.3.8](https://github.com/famebot/xeo/releases/tag/v6.3.8) - 2025-12-27

- Move title preprocessor to plugins.ts so theme users get it by @rdela in
  https://github.com/famebot/xeo/pull/35

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.3.7...v6.3.8

---

## [v6.3.7](https://github.com/famebot/xeo/releases/tag/v6.3.7) - 2025-12-27

- Include post-list.vto in mod.ts by @rdela in
  https://github.com/famebot/xeo/pull/34

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.3.6...v6.3.7

---

## [v6.3.6](https://github.com/famebot/xeo/releases/tag/v6.3.6) - 2025-12-27

- Filesystem titles: sentence case, use Extract date + basename by @rdela in
  https://github.com/famebot/xeo/pull/33

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.3.5...v6.3.6

---

## [v6.3.5](https://github.com/famebot/xeo/releases/tag/v6.3.5) - 2025-12-24

- handle titleless posts by @rdela in https://github.com/famebot/xeo/pull/32

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.3.4...v6.3.5

---

## [v6.3.4](https://github.com/famebot/xeo/releases/tag/v6.3.4) - 2025-12-02

- Feelin searchy by @rdela in https://github.com/famebot/xeo/pull/31
  2e33d18726e1c3818142a9b6b96726603a1c16a9

  - [add search to `post.vto`, `deno fmt` all files](https://github.com/famebot/xeo/commit/c06e7f3274a0333183b2aea9bbc4159d9e4a1ea0)
    c06e7f3274a0333183b2aea9bbc4159d9e4a1ea0

  - [add archive label to post search](https://github.com/famebot/xeo/commit/fa9c0b1f4d6b96d8901dee5c436d911e5bcb6121)
    fa9c0b1f4d6b96d8901dee5c436d911e5bcb6121

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.3.3...v6.3.4

---

## [v6.3.3](https://github.com/famebot/xeo/releases/tag/v6.3.3) - 2025-11-22

- archive bodyClass, bare specifier, jsdelivr by @rdela in
  https://github.com/famebot/xeo/pull/30

> `.body-archive` styling hook

> bare specifier in lume task and use jsdelivr
>
> Deno can run now bare specifiers and it's automatically resolved using the
> import map (previously this wasn't possible, hence the echo thing).
> https://lume.land/blog/posts/lume-3-1-0/#lume-task-uses-bare-specifier
>
> This makes possible the use of permissions (in order to make the build more
> secure) and other features related with stdin in future Lume versions.
>
> jsdelivr is the recommended way. Lume was moved to JsDelivr
> https://lume.land/blog/posts/lume-3-1-0/#lume-is-moving-to-jsdelivr
>
> and this will make easier the creation of themes because you can use glob
> patterns instead of configuring all files manually
> https://lume.land/blog/posts/lume-3-1-0/#create-themes-is-now-easier

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.3.2...v6.3.3

---

## [v6.3.2](https://github.com/famebot/xeo/releases/tag/v6.3.2) - 2025-11-22

- simplify by @rdela in https://github.com/famebot/xeo/pull/29 simplify title on
  readme

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.3.1...v6.3.2

---

## [v6.3.1](https://github.com/famebot/xeo/releases/tag/v6.3.1) - 2025-11-22

- update deps + tasks by @rdela in https://github.com/famebot/xeo/pull/28

> - Lume version 3.1.2\
>   Updated: https://deno.land/x/lume@v3.0.6/ v3.0.6 -> v3.1.2
>   https://cdn.jsdelivr.net/gh/lumeland/cms@0.12.5/ 0.12.5 -> 0.14.2
> - Simple Blog 1.16.2\
>   https://deno.land/x/lume_theme_simple_blog@v0.16.0/ v0.16.0 -> v1.16.2
> - rm `cms` task, runs automatically now
>   https://lume.land/cms/#run-in-localhost
> - describe `up` + `lup` tasks

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.3.0...v6.3.1

---

## [v6.3.0](https://github.com/famebot/xeo/releases/tag/v6.3.0) - 2025-08-11

- author search fix; add archive search, filters, rename tags by @rdela in
  https://github.com/famebot/xeo/pull/27

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.2.5...v6.3.0

---

## [v6.2.5](https://github.com/famebot/xeo/releases/tag/v6.2.5) - 2025-06-24

- update xogo config link ln nums by @rdela in
  https://github.com/famebot/xeo/pull/26

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.2.4...v6.2.5

---

## [v6.2.4](https://github.com/famebot/xeo/releases/tag/v6.2.4) - 2025-06-16

- revise gfont + colors instructions by @rdela in
  https://github.com/famebot/xeo/pull/23

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.2.3...v6.2.4

---

## [v6.2.3](https://github.com/famebot/xeo/releases/tag/v6.2.3) - 2025-06-15

- update dependencies: bump lume + cms + nudd f82fa4f

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.2.2...v6.2.3

---

## [v6.2.2](https://github.com/famebot/xeo/releases/tag/v6.2.2) - 2025-06-15

- add unstable.fmt-component to deno.json by @rdela in
  https://github.com/famebot/xeo/pull/22

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.2.1...v6.2.2

---

## [v6.2.1](https://github.com/famebot/xeo/releases/tag/v6.2.1) - 2025-06-10

- i18n + search.authors + nav.archive + test multi-author features by @rdela in
  https://github.com/famebot/xeo/pull/21

  - nav.archive to html from md

  - add missing search.authors and adjust nav.archive

  - add aria label to logo/site title nav (.navbar-home)

  - add Dan Forsyth as author of Elegance to test multi-author features

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.2.0...v6.2.1

---

## [v6.2.0](https://github.com/famebot/xeo/releases/tag/v6.2.0) - 2025-06-03

- move favicon plugin from _config.ts to plugins.ts by @rdela in
  https://github.com/famebot/xeo/pull/20

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.1.0...v6.2.0

---

## [v6.1.0](https://github.com/famebot/xeo/releases/tag/v6.1.0) - 2025-06-03

- add svg favicon and improve logo ergonomics by @rdela in
  https://github.com/famebot/xeo/pull/18

**Full Changelog**: https://github.com/famebot/xeo/compare/v6.0.0...v6.1.0

---

## [v6.0.0](https://github.com/famebot/xeo/releases/tag/v6.0.0) - 2025-05-23

- Lume v3 updates by @rdela and @oscarotero in
  https://github.com/famebot/xeo/pull/17

**Full Changelog**: https://github.com/famebot/xeo/compare/v5.4.3...v6.0.0

---

## [v5.4.3](https://github.com/famebot/xeo/releases/tag/v5.4.3) - 2025-04-29

v5.4.3

---

## [v5.4.2](https://github.com/famebot/xeo/releases/tag/v5.4.2) - 2025-04-29

v5.4.2

---

## [v5.4.1](https://github.com/famebot/xeo/releases/tag/v5.4.1) - 2025-04-23

v5.4.1

---

## [v5.4.0](https://github.com/famebot/xeo/releases/tag/v5.4.0) - 2025-04-23

v5.4.0

---

## [v5.3.1](https://github.com/famebot/xeo/releases/tag/v5.3.1) - 2025-04-18

v5.3.1

---

## [v5.3.0](https://github.com/famebot/xeo/releases/tag/v5.3.0) - 2025-04-18

v5.3.0

---

## [v5.2.1](https://github.com/famebot/xeo/releases/tag/v5.2.1) - 2025-04-01

v5.2.1

---

## [v5.2.0](https://github.com/famebot/xeo/releases/tag/v5.2.0) - 2025-04-01

v5.2.0

---

## [v5.1.0](https://github.com/famebot/xeo/releases/tag/v5.1.0) - 2025-04-01

v5.1.0

---

## [v5.0.3](https://github.com/famebot/xeo/releases/tag/v5.0.3) - 2025-02-08

v5.0.3

---

## [v5.0.2](https://github.com/famebot/xeo/releases/tag/v5.0.2) - 2025-02-08

v5.0.2

---

## [v5.0.1](https://github.com/famebot/xeo/releases/tag/v5.0.1) - 2025-01-30

v5.0.1

---

## [v5.0.0](https://github.com/famebot/xeo/releases/tag/v5.0.0) - 2025-01-23

v5.0.0

---

## [v4.0.0](https://github.com/famebot/xeo/releases/tag/v4.0.0) - 2025-01-21

v4.0.0

---

## [v3.0.0](https://github.com/famebot/xeo/releases/tag/v3.0.0) - 2025-01-21

v3.0.0

---

## [v2.0.0](https://github.com/famebot/xeo/releases/tag/v2.0.0) - 2025-01-21

v2.0.0

**Full Changelog**: https://github.com/famebot/xeo/compare/v1.0.1...v2.0.0

---

## [v1.0.1](https://github.com/famebot/xeo/releases/tag/v1.0.1) - 2025-01-21

- c273bbb add deno.land/x instructions

**Full Changelog**: https://github.com/famebot/xeo/compare/v1.0.0...v1.0.1

---

## [v1.0.0](https://github.com/famebot/xeo/releases/tag/v1.0.0) - 2025-01-21

- b9396e1 add basic view transitions
- 955b8dd emoji links
- c614f65 relocate copyright and intro to _data.yml for cms, update instructions
- ee67187 spruce up 404, fmt
- 7add046 center 404 msg
- c6c9ab8 make location and gfonts configurable in lume cms
- acd32ec add Differences between Xeo and Simple Blog post
- 39ba90c add location, add Bebas Neue and Lexend from Google Fonts, expand docs
- 056fec0 remove Inter files
- 58e3347 remove Inter
- 049185c upd readme links
- a670435 update deps and docs; add license; link repo
- 2a7c736 spacing finesse
- bfefe30 netlifun
- 8d0c93a color and asset adjustments
- 0525024 init xeo
