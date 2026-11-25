---
title: "From the Idle Screen to the Cutscene"
description: When the countdown on the idle screen reaches zero, a test version of the intro cutscene now plays in Unity, to try out the game flow. The first version still showed the idle screen's UI on top of the cutscene, so we hid it.
date: 2026-11-25T16:00:00Z
author: lomme
cover: ./images/cutscene-unity/cover.jpg
coverAlt: The intro cutscene playing in Unity, with a colourful drawing of the Boxlings taped to a clipboard on a brown cardboard table, between pencils and paper leaves
tags: [Development]
ai: No AI was used.
---

On the [idle screen](../ui-2d-unity/), a countdown starts as soon as two players are ready. Until now, nothing happened when it reached zero. In the game, that's the moment the story starts: the intro cutscene that Ximen made, where the drawings of the kingdom, the Boxlings and TIPPER on his rope lie as pictures on a table ([Taking the Intro Cutscene Further](../cutscene/)). This time I linked the two together in Unity.

The cutscene in this post isn't the final one yet. Two scenes already have their real, coloured designs; the others are still pencil sketches. The goal now was to test the game flow: does the story start at the right moment, and does the screen look right while it plays?

## Playing the cutscene

The cutscene is a video, so it plays in Unity with a video player that fills the whole screen. The countdown already sent a signal when it reached zero. Now the cutscene listens to that signal and starts playing.

## First try: the UI stayed on top

The cutscene played, but the UI of the idle screen didn't go away. The logo, the speech bubble "Sta op een platform om mee te doen!" (stand on a platform to join in) and the player count stayed on top of the cutscene the whole time. Behind the video, the Boxlings also went back to sleep, so the count dropped from 2/4 to 0/2 in the middle of the story. When the cutscene ended, a black screen was left, still with the UI on top.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/cutscene-ui-on-top-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/cutscene-ui-on-top.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

A speech bubble that asks children to step on, while the story is already playing, is confusing. And a count that drops to 0/2 makes it look like everyone left.

## The fix: only the cutscene

Now the whole idle screen UI disappears as soon as the countdown reaches zero. After the big 1, the screen goes straight to the cutscene, and nothing else is in the way: no logo, no speech bubble, no count. The children only see the story.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/cutscene-after-idle-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/cutscene-after-idle.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## What's next

- Replace the sketches with the final designs, so the whole cutscene is finished.
- Start the game itself when the cutscene ends, so the Boxlings appear on the plank above the canyon.
- Keep the players who were ready in the game during the cutscene, even if they shift their feet for a moment.
- Test with children whether they watch the cutscene, or whether it should be shorter.

## What I'm taking with me

- **Hide what doesn't belong to the moment.** The UI of the idle screen is useful while children decide to play, but in the middle of the story it only gets in the way.
- **Use the signals you already have.** The countdown already said when it was done, so the cutscene only had to listen.
- **Check the end too.** The first version looked fine at the start of the cutscene, but at the end the empty screen with the UI showed something was still missing.
