---
title: "On the Plank: Making the Boxlings Balance"
description: Building the plank that tilts under the weight of the Boxlings. From two grey blocks to four Boxlings, with floating feet, a plank that kept bouncing back, a sharper picture and little dust clouds on the way.
date: 2026-11-13
author: lomme
cover: ./images/balance-plank/cover.jpg
coverAlt: The four cardboard Boxlings on a tilted cardboard plank in Unity, three on the low left side and SPRIET high up on the right
tags: [Development]
ai: I used AI (Claude) to help bring the materials into Unity and to fix bugs.
---

In Samen in Balans, the four Boxlings stand on one long plank that the big Boxling [TIPPER](../tipper/) carries on his back. When more Boxlings stand on one side, the plank tilts that way. If it tilts too far, it tips over. The players have to work together to keep it level. So far, the Boxlings only walked on flat ground. This time I built the plank.

I started a new Unity project just for the plank. Our movement and the [falling objects](../falling-objects-unity/) each have their own test project too. That way every part can be built and tested on its own, and we'll put them together later.

## Step 1: a plank and two blocks

The first version had no Boxlings at all: just a white plank and two grey blocks that I could move left and right.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/plank-blocks-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/plank-blocks.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

The plank doesn't use Unity's own physics to tilt. A script calculates the tilt itself, so it always behaves the same and every value can be tuned in the Inspector.

- **Weight and position.** Everything on the plank has a weight. The further from the middle it stands, the more it counts. A Boxling at the very end pushes harder than one close to the middle, just like on a real seesaw.
- **A calm plank.** The plank doesn't snap to its new angle, but moves there smoothly and slows down at the end. That makes it readable for the players.
- **Tipping over.** When the plank reaches 25 degrees, it counts as tipped over. For now that only gives a signal. Later we'll use it to lose a life or restart the game.
- **A debug text.** In the top left corner you can see the tilt, which side is heavier and how many things are on the plank. That made testing much easier.

## Step 2: the Boxlings on the plank

Next I swapped the blocks for the four Boxlings. Their first version came in as grey and white models, without their cardboard colours, hats and patterns. After fixing the materials, every Boxling came into Unity with his own look again.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/plank-boxlings-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/plank-boxlings.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

Every Boxling still has his own keys from the [foot pedals post](../foot-pedals-movement/), so I could walk them one by one to a side and see the plank react.

## Bug 1: floating feet

As soon as the plank started to move, the Boxlings didn't stand on it anymore. They hung a little above the wood, and the faster the plank tilted, the worse it got.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/plank-floating-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/plank-floating.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

There were a few causes at once:

- **Gravity was too slow.** When the plank goes down quickly, it moves away faster than gravity can pull a Boxling after it.
- **Standing straight on a slope.** A Boxling stays upright, so on a tilted plank only one point touches the wood and the other foot hangs in the air.
- **The wrong size.** In this scene the Boxlings are smaller than in our movement project. Some settings were still made for their full size, which lifted two of them off the plank.

The fix was a new script, the **plank rider**. As long as a Boxling stands on the plank, it puts his feet exactly on the wood every physics step, and the Boxling leans along with the plank so both feet stand flat. When he walks off the end, normal gravity takes over again and he falls.

## Bug 2: walking in front of each other

Then I noticed something smaller. When a Boxling walked in front of another one, his feet came off the plank a little. As soon as he was past, he stood on it again.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/plank-in-front-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/plank-in-front.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

This came from the trick that lets the Boxlings walk past each other. The one in front was moved towards the camera along its line of sight. The camera is higher than the plank, so moving towards it also meant moving up a bit. Now the Boxling in front simply steps straight forward over the plank, at the same height, and his feet stay on the wood.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/plank-in-front-fixed-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/plank-in-front-fixed.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## Bug 3: a plank that kept bouncing back

The next bug was in the plank itself. With three Boxlings on the left, the plank tipped to the left, went back to level by itself and then tipped again, over and over, like a seesaw. That's not right: the weight was still on the left, so the plank should stay down.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/plank-seesaw-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/plank-seesaw.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

The plank had a setting that put it back to level after tipping over, and ignored the weight while doing that. Once it was level, the weight counted again and it tipped once more. I removed that: the plank now always follows the weight. Tipping over only sends its signal once, and it has to come back a few degrees before it can count as tipping over again.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/plank-seesaw-fixed-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/plank-seesaw-fixed.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## A sharper picture

Compared to the models in Blender, everything in Unity looked blurry. The Game view was showing the game at half resolution and stretching it, the edges were jagged and the plank's texture became blurry because we look at it from such a low angle. After turning on full resolution, smoother edges and better texture filtering, the Boxlings and the cardboard of the plank are a lot sharper.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/plank-sharp-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/plank-sharp.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## The dust clouds

One thing was still missing. In Blender, Ximen's running animation has little cardboard dust clouds behind the feet. In Unity, the Boxlings ran without them.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/plank-no-dust-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/plank-no-dust.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

In Blender, the clouds are separate little cardboard blocks with their own animation. Unity couldn't link that to the running animation, so the export script used to leave them out. Now every little block gets its own bone in the skeleton, and its movement is baked into the running animation. The clouds play along when a Boxling runs and disappear when he stands still, without any extra code in Unity.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/plank-dust-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/plank-dust.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## What's next

The plank works with the four Boxlings, but it's still in its own test project. The next steps are bringing the falling objects onto the plank, so their weight pushes it out of balance too, and controlling the Boxlings with the foot panels. After that, we can put everything together in one project and test it with children.

## What I'm taking with me

- **Start with blocks.** Two grey blocks were enough to get the tilting right, before the Boxlings made it more complicated.
- **Calculate it yourself when it has to be predictable.** Because the plank's tilt is calculated by a script and not by Unity's physics, it reacts the same way every time.
- **A bug can have more than one cause.** The floating feet came from gravity, the slope and the size at once. Fixing only one of them wasn't enough.
- **Record every bug.** A short video of each bug made it much easier to explain what went wrong, and to check that the fix really worked.
