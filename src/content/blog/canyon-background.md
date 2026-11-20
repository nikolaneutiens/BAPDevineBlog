---
title: "The Canyon: Building a Cardboard Background Step by Step"
description: A new game background for Samen in Balans. How we built a cardboard canyon in Blender one step at a time, from a grey clay island to terraced cliffs, forests, clouds and light, and how it moves as parallax layers for Unity.
date: 2026-11-20
author: ximen
cover: ./images/canyon/09-final.webp
coverAlt: A cardboard canyon at golden hour, with a big stepped island full of pine trees in the middle and terraced cliffs on both sides
tags: [Design]
ai: The Blender scene was built with the help of AI (Claude), step by step from my references and feedback. I chose the composition, the style and every change.
---

During the game, a Boxling walks towards the camera and the camera moves along. That means the background can't be a flat picture: it has to react when the camera moves. So for this background I didn't make one image, but a full 3D environment in Blender: a **canyon** with a big island in the middle, in the same cardboard style as the rest of our world.

## The idea

The idea was a canyon with a big plateau in the middle, steep cliffs, forests and clouds. I liked the feeling of depth: you look past close cliffs into a deep canyon towards one big island. I sketched it first: the view from the camera on top, and the layout seen from above underneath. The central island has a big forest on top, clouds fill the canyon, and close cliffs on both sides frame the view. From above, the side islands form a path that leads the eye to the central island.

![Sketch of the canyon: on top the view from the camera, with a central island covered in a big forest, clouds in the canyon and foreground cliffs on both sides; underneath the layout from above, with the central island and smaller islands around a path towards it](./images/canyon/sketch.webp)

Building all of that at once would get messy, so I split it into steps and checked the result after every step before going further.

## Step 1: one island in clay

The first step was only the **central island**: a wide plateau with a flat top and tall, almost vertical walls. No trees, no clouds, no cardboard yet, just grey clay, so I could focus on the shape. The walls are built out of blocks that stand next to each other and step back a little, so it already feels like a stack of cardboard pieces.

![The central island in grey clay: a wide plateau with walls made of tall blocks, seen from the camera, from the side and from the top](./images/canyon/01-clay-island.webp)

## Step 2: islands around it

Next came the **side islands**. They sit in a horseshoe around the central island, high on the outside and stepping down towards the canyon, so the eye is guided to the middle.

![The clay canyon from the camera and from the top: the central island in the middle with clusters of blocks around it](./images/canyon/02-side-islands.webp)

## Step 3: cardboard

Then the clay became **cardboard**: orange-brown walls with stains and straight seams between the panels, small squares of tape here and there, and yellow-green grass on everything that faces up.

![The canyon in cardboard: orange walls with tape patches and green grass on top of every block](./images/canyon/03-cardboard.webp)

## Step 4: trees

For the trees I used the **same cardboard trees as in our first scene**, so everything belongs to the same world. They grow in small forests on all the tops and ledges, with open grass in between.

![The canyon with cardboard pine trees and autumn trees in small forests on top of the islands](./images/canyon/04-trees.webp)

## Step 5: a game camera and a stronger foreground

I added a camera that looks the way it will in the game: low, almost straight ahead, through the canyon towards the island. From there the composition felt too far away, so I added big **foreground plateaus** close to the camera, cut off by the edges of the image. Now you look through a window of close cliffs into the canyon.

![The view from the game camera: big cliffs with trees close by on the left and right, framing the central island](./images/canyon/05-foreground.webp)

## Step 6: clouds and fog

The bottom of the canyon was empty. Soft round **clouds** now hang between the islands, and a light **fog** makes everything that is far away fade a little. That gives the canyon depth.

![The canyon with soft round clouds deep down and fog that fades the far cliffs](./images/canyon/06-clouds-fog.webp)

## Step 7: light

For the light I used the same setup as our other cardboard background: a low, golden sun, a soft pink fill light and the same sky. This way I can give Lomme the same light values for Unity, and the background and the game will match.

![The canyon in golden sunset light, with warm orange cliffs and pink-tinted clouds](./images/canyon/07-lighting.webp)

## Changing the style: terraces and a stepped island

When I looked at it in the game camera, the side islands still felt like separate drums. I wanted the sides to look like the cliffs in our older background: lots of small **terraces** going down towards the canyon, with trees on every step.

![The canyon with terraced sides: small cardboard blocks stepping down towards the canyon, with trees on every ledge](./images/canyon/08-terraces.webp)

The central island also looked too flat. I wanted a big stepped plateau: wide layers stacked on top of each other, each a bit smaller, with a row of trees on every layer.

After a few rounds of feedback, the island got three big layers and a full crown of trees, it continues far down into the canyon so it doesn't just stop, and there are small islands under the clouds so the canyon doesn't look empty. I also made the canyon narrower so the sides fill more of the screen, and made the light a bit brighter.

![The final canyon: a stepped island full of trees in the middle, narrow terraced sides and small islands under the clouds](./images/canyon/09-final.webp)

## Moving the camera

For Unity, I rendered the canyon as **separate layers**: the sky, the far cliffs, the middle with the island, the left and right foreground and the front clouds. Each layer is a transparent image, with a little extra room around the edges. In Unity, every layer moves at its own speed depending on how far away it is. This is called parallax, and it makes a flat background feel 3D.

These are the six layers the video below is made of, from back to front:

![Layer 1, the sky: a blue and golden sky with soft white clouds and the sun](./images/canyon/layer-1.webp)

![Layer 2, far away: the back part of the terraced canyon walls on a transparent background](./images/canyon/layer-2.webp)

![Layer 3, the middle: the stepped central island full of trees, the middle terraces and the clouds around the island](./images/canyon/layer-3.webp)

![Layer 4, left foreground: the close terraces on the left side on a transparent background](./images/canyon/layer-4.webp)

![Layer 5, right foreground: the close terraces on the right side on a transparent background](./images/canyon/layer-5.webp)

![Layer 6, front clouds: the clouds and small islands closest to the camera on a transparent background](./images/canyon/layer-6.webp)

Put on top of each other, they make the full image again. In the video, the camera flies straight back: the close layers move and shrink the most, the island less, and the sky stays where it is.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/canyon-parallax-poster.jpg" style="width: 100%; max-width: 720px; display: block; margin-inline: auto; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/canyon-parallax.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

Separate layers only work for small camera moves, though. For a longer move I rendered the real 3D scene: the camera flies straight back, away from the central island, through the narrow canyon.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/canyon-flight-poster.jpg" style="width: 100%; max-width: 720px; display: block; margin-inline: auto; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/canyon-flight.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## What I learned

- **Working in steps helps.** Checking one thing at a time (shape, composition, material, trees, atmosphere, light) made it much easier to give clear feedback and to see what wasn't working.
- **Look through the real camera.** The canyon looked fine from above, but in the game camera the side islands were too far away. The composition only really worked after I added the foreground.
- **Light changes colour.** The same cardboard looked bright orange in grey light and salmon pink in the warm sunset light. I had to adjust the cardboard colours and the exposure together with the light.
- **Fog can hide too much.** At one point the fog made the lowest cliffs disappear into the sky, while the green trees on top stayed visible. It looked like the trees were floating. Lower, softer fog fixed it.

## Next steps

- Render the parallax layers again for the final version of the canyon and put them in Unity with Lomme.
- Set the light in Unity with the same values as in Blender, so the Boxlings fit into the background.
- Test in the game how far the camera moves, and how much extra room the layers need.
