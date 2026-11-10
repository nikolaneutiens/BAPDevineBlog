# Astro blog template

A minimal static blog with client-side filtering by tag.

## Commands

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Build the production site to `dist/` |
| `npm run preview` | Preview the production build         |

## Deploying

Every push to `main` builds the site and publishes it to GitHub Pages through `.github/workflows/deploy.yml`.

One-time setup: in the repository on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

Internal links must go through `withBase()` from `src/lib/paths.ts`, because the site is served from `/<repo-name>/`.

## Where things are

- `src/content/blog/`: posts, one Markdown file each
- `src/content.config.ts`: frontmatter schema
- `src/lib/tags.ts`: the available tags, which are also the filter buttons
- `src/components/`: UI pieces, each with its own scoped styles
  - `PostFilters.astro`: filter buttons and script
  - `PostCard.astro`: a post's box in the list
  - `PostCover.astro`: a post's square picture
  - `PostGallery.astro`: the extra pictures on a post page
  - `PostNav.astro`: previous and next post buttons
  - `Preloader.astro`: loading screen on the main page
  - `PostDate.astro`: formatted post date
  - `TagList.astro`, `TagPill.astro`: tags and their coloured pills
- `src/layouts/Base.astro`: page shell and site name
- `src/styles/global.css`: shared colours, tag colours and base element styles

## Post frontmatter

```yaml
title: Post title
description: Short summary shown in the list
date: 2026-11-01
cover: ./images/my-post/cover.jpg # required, shown as a 1:1 square in the post list
coverAlt: What the picture shows # required
gallery: # optional, shown as a grid at the end of the post
  - src: ./images/my-post/photo.jpg
    alt: What the picture shows
tags: [Development, Design] # optional: Development, Research or Design
draft: true # optional, hides the post from production builds
```

Store pictures in `src/content/blog/images/<post-name>/`. To place a picture between the text, add this to the Markdown:

```md
![What the picture shows](./images/my-post/photo.jpg)
```

A tag that isn't in `src/lib/tags.ts` fails the build. Selected filters are stored in the URL, for example `/?tag=Development&tag=Design`.

## Calendar (live tasks and timer)

The Calendar page reads its tasks from a Supabase database (project `bap-blog`), so changes show up for everyone right away.

- Everyone can see the tasks. To add, delete, tick off or assign tasks, or to use the work timer, click **Log in** at the top of any page and enter the team password once. The password is remembered in that browser until you click **Log out**.
- The **Work timer** is on your own page (Team → your name): type what you are working on, press **Start**, **Pause** for a break (**Resume** goes on in the same session) and **Stop** when you are done.
- Forgot the timer? On your own page, under **Logged sessions**, add hours afterwards with a day and a from–to time. A wrong session can be deleted there too.
- Every timed stretch is added to that person's hours on the Team pages automatically (rounded to the minute, by day in Belgian time). The Team pages update live in the browser as soon as hours are timed, added or deleted.
- Meetings and other fixed moments are in `src/lib/calendar.ts`.

Setting or changing the team password: open the project in the Supabase dashboard, go to **SQL Editor** and run:

```sql
update private.team_secret set password_hash = extensions.crypt('the new password', extensions.gen_salt('bf'));
```
