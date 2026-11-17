---
title: "Stopping at the Edge: The Edge Animation in Unity"
description: The Boxlings used to walk straight off the end of the plank. Now they stop at the edge, turn towards it and wave their arms to keep their balance, with the edge animation Ximen made in Blender.
date: 2026-11-17T12:00:00Z
author: lomme
cover: ./images/edge-unity/cover.jpg
coverAlt: PUK leaning over the left end of a cardboard plank in Unity, waving his arms, while the other three Boxlings stand further on the plank
tags: [Development]
ai: I used AI (Claude) to help with the code.
---

In [The Edge Animation: Almost Falling Off](../edge-animation/), Ximen explained why a Boxling should never walk off the side of the plank, and how he animated a Boxling that leans over the edge and waves his arms to stay on. His next step was bringing that animation into Unity. That's what I did in the test project of the [balance plank](../balance-plank/).

## The problem: walking off the plank

Until now, nothing stopped the Boxlings at the end of the plank. If a player kept walking, the Boxling simply walked off. With two Boxlings at one end, the plank also tilted so far that they slid down and fell.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/edge-walk-off-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/edge-walk-off.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

For young children who are still learning to use the foot panels, that would make the game far too hard. So the end of the plank had to become a wall that you can't walk through.

## Step 1: an invisible wall

The plank rider is the script that keeps a Boxling's feet on the plank. I gave it one more job: stopping at the ends.

- **Measuring the plank.** At the start, the script looks at the size of the plank and works out where its two ends are.
- **A stopping point.** Close to each end, there's a point that the middle of the Boxling can't go past. It's chosen so that his feet stand right on the edge.
- **At any tilt.** The script measures along the plank itself, and not along the floor. So the wall stays at the end of the plank, however far it tilts.
- **No jumps.** If a Boxling is already past the point, for example because the plank tilted under him, he's pulled back slowly instead of jumping back in one frame.

All the distances grow and shrink with the size of the Boxling, so it works for every Boxling in every scene.

## Step 2: playing the animation

Ximen exported the edge animation together with the idle and run animation, for all four Boxlings. In Unity, every Boxling got a new animation state, **EdgeBalance**, next to Idle and Run.

The plank rider tells the animation when a Boxling stands at the edge. It uses two different distances for that:

- **Closer than 0.4 m** to the stopping point, the Boxling starts balancing.
- **Further than 0.8 m** away, he stops balancing.

Because there's a gap between those two, a Boxling that stands right on the border doesn't keep switching between balancing and standing still. The animation doesn't flicker.

## Step 3: facing the edge

Ximen's animation only works when the Boxling looks at the edge, so he can lean over it. So while a Boxling is balancing, he turns towards the end of the plank.

When the player steps back towards the middle, the balancing stops right away. The Boxling turns around and starts running, without waiting until he's 0.8 m away. That way the player gets an answer to their foot straight away.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/edge-balance-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/edge-balance.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

Now every Boxling stops at the end of the plank, leans over the edge and waves his arms. The player sees right away that they can't go any further, and steps back.

## What's next

The edge works in its own test project for now. Next, it has to come together with the other parts: the falling objects, the foot panels and the rest of the game. We also still want to test it with children, to see if they understand that waving Boxling means they have to go back.

## What I'm taking with me

- **Show why something stops.** A wall alone feels like a bug. The animation turns it into a moment the player understands.
- **Leave room between on and off.** One border for starting and another one for stopping keeps an animation from flickering.
- **React to the player first.** When the player steps back, the Boxling reacts right away, even if the rules say he's still close to the edge.
- **Design and development go together.** Ximen thought about what the player should feel and made the animation. I only had to make sure it plays at the right moment.
