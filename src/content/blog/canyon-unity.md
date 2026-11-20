---
title: "The Canyon in Unity: A Background That Moves, a Plank That Stays"
description: Bringing Ximen's canyon background into our Unity demo. The layers move slowly towards the camera, while the plank and the Boxlings stay in the same place on the screen.
date: 2026-11-20T15:00:00Z
author: lomme
cover: ./images/canyon-unity/cover.jpg
coverAlt: PUK and KRABBEL standing on the cardboard plank in Unity, in front of the canyon with the big stepped island full of trees
tags: [Development]
ai: I used AI (Claude) to help import the background into Unity.
---

In [The Canyon: Building a Cardboard Background Step by Step](../canyon-background/), Ximen built a new background in Blender: a cardboard canyon with a big island in the middle. He rendered it as separate layers, so it can move in depth. His next step was putting those layers in Unity. That's what I did, in our Unity demo with the plank and the Boxlings.

## Layers at their own depth

Every layer from Ximen, from the sky at the back to the cliffs and clouds at the front, became a flat surface in Unity, placed at its own distance from the camera. When the camera moves, the close layers move a lot and the island in the middle moves less. The sky moves along with the camera, so it always looks infinitely far away. That's what makes a flat picture feel 3D.

The background doesn't need any light from Unity: Ximen's render already has its own sunset. So the layers show exactly the colours of the render, and they don't get any shadows.

To set it all up, there's one button in the Unity menu. It sets the right import settings for every image, makes the materials, places the layers at their depth and adds the camera ride.

## First try: the plank flew away

In Ximen's video, the camera slowly flies back from the island. In my first version, I put that camera ride on the game camera. The background moved the way it should, but the plank moved along with it. It shot past the screen, grew and shrank, and sometimes disappeared out of view.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/canyon-unity-moving-plank-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/canyon-unity-moving-plank.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

That doesn't work for our game: the players have to see the plank in the same place all the time, because they're keeping it in balance. Only the background should move.

## Two cameras on top of each other

The fix was to use two cameras:

- **A background camera.** It only sees the canyon layers, and it's the one that flies back from the island.
- **The game camera.** It stays in the same place and only sees the plank and the Boxlings. Unity draws its picture on top of the background camera's picture.

Now the plank and the Boxlings stayed in the same spot on the screen. But the canyon moved far too fast behind them.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/canyon-unity-fast-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/canyon-unity-fast.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## Much, much slower

The camera ride took only 8 seconds, and it sped up in the middle. Behind a game that's about calm balancing, that was far too busy. Now the ride takes 90 seconds at a constant speed. Then it waits for a moment and starts again. The canyon slowly comes closer, and you hardly notice it while you play, but the world feels alive.

The speed is a setting on the background camera, so we can still make it faster or slower when we test it with children.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/canyon-unity-editor-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/canyon-unity-editor.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## Playing in the canyon

This is the demo with the new background. The plank tilts under the Boxlings, and behind them the canyon slowly moves.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/canyon-unity-play-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/canyon-unity-play.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

Two things you might notice:

- **There are only two Boxlings,** PUK and KRABBEL. That's because only two pairs of pedals are connected right now. In the final game, all four Boxlings will stand on the plank.
- **The plank seems to float in the air.** That's because [TIPPER](../tipper/) isn't there yet. In the game, he carries the plank on his back and walks on a rope across the canyon. That's still to come.

## What's next

- Add TIPPER, so he holds the plank and walks on a rope across the canyon.
- Connect all eight pedals, so the four Boxlings can play together.
- Set the light on the Boxlings and the plank with the same values as Ximen's render, so they fit into the canyon.

## What I'm taking with me

- **Keep the game still and let the world move.** What the players need to see stays in place. Only the background moves.
- **One camera doesn't have to do everything.** Splitting the background and the game over two cameras made it simple.
- **Slow is calm.** The same camera ride felt hectic in 8 seconds and peaceful in 90.
