---
date: "2025-01-01T13:00Z"
author: Ricky de Laveaga
tags:
  - Front Matter
  - Title
---

A post with `date`, `author`, and `tags` in the
[front matter](https://lume.land/docs/getting-started/page-data/), but no title.
The source file named `index.md` is inside a folder named `no-title`. The
[`basename`](https://lume.land/docs/creating-pages/urls/#basename) gets
transformed to “No title” in the built site because the `index.md` file works
like an `index.html` file and assumes the name of its directory.

There is a draft in the example posts that tests the scenario with a date and
title in the filename. In the [2025-12 solstice](/2025-12-solstice/) filename
(`2025-12-solstice.md`) the partial, incomplete date gets parsed as part of the
title because it lacks a day value.
