---
title: "Objects on the Plank: Bringing the Falling Objects and the Balance Together"
description: The falling objects and the balancing plank were two separate Unity projects. First I made the objects look and fall better, then I put them together. On the way, objects glitched, flew through the Boxlings and tilted the plank before they even landed.
date: 2026-11-24T15:00:00Z
author: lomme
cover: ./images/falling-objects-plank/cover.jpg
coverAlt: PUK and KRABBEL on the tilted plank in the canyon, with the yellow duck, red barrels and a cone lying on the plank between them
tags: [Development]
ai: I used AI (Claude) to bake the materials of the falling objects out of Blender, and to help fix bugs.
---

Until now, the [falling objects](../falling-objects-unity/) and the [balancing plank](../balance-plank/) were two separate Unity projects. In the game, they belong together: objects fall onto the plank, their weight pushes it out of balance, and the players have to walk around them or push them off. This time I brought them together. Before that, I first made the falling objects themselves better.

## Step 1: colour on the objects

The four objects, the duck, the box, the cone and the barrel, were made in Blender by Ximen ([Falling Objects: a Duck, a Box, a Cone and a Barrel](../falling-objects/)). In Unity, they were plain light grey. Their cardboard look in Blender is built out of hundreds of nodes, and Unity can't read those.

So the materials were **baked** in Blender: for every part of every object, the colour, the little dents in the cardboard and how shiny or matt it is were turned into normal images. Unity can use those images in its own materials. Now the objects have their cardboard texture, their colours, the crown prints, the stripes and the eyes, just like in Blender.

## Step 2: a duck that hung in the air

With the colours in place, the next problems showed up. The duck fell much slower than the rest and stayed in the air for a long time. The other objects fell against her, and sometimes even straight through her.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/fo-duck-problem-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/fo-duck-problem.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

There were a few causes:

- **The wrong colliders.** A collider is the invisible shape Unity uses for collisions. The duck's collider was a small ball of 1 metre under her feet, while the duck herself is about 5 metres tall. So other objects fell right through her. The other objects had colliders that didn't fit either.
- **Too much air resistance.** The duck had so much drag that she only fell about 1 metre per second, three times slower than the rest.
- **Too big and too often.** The duck was much bigger than the other objects, and came just as often.

Every object got a collider that fits around the whole model, the duck got less drag and became a bit smaller, and she now comes about three times less often than the other objects. She's still the biggest and hardest one, so she should be a rare surprise.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/fo-improved-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/fo-improved.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## Step 3: putting them together

Then I made a new Unity project and brought both parts into it: the plank with PUK and KRABBEL and the [canyon background](../canyon-unity/), and the falling objects with their spawner. The first time I pressed Play, objects fell on the plank and the plank reacted to their weight. But they bounced in strange ways and rolled off in every direction, also towards and away from the camera.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/fo-first-merge-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/fo-first-merge.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

Our game is seen from the front, so the objects now only move left, right, up and down, and only rotate in that same flat plane, just like the Boxlings. After that, they stayed on the plank. But then they stayed there forever, so a Boxling had to be able to push them away.

## Step 4: a lot of glitches

Pushing objects away caused a whole series of glitches. Cones kept jumping up and down next to the Boxlings, and an object could even end up on top of PUK's head.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/fo-glitchy-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/fo-glitchy.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

The cause was a fight between two systems. The plank rider puts a Boxling exactly on the plank every physics step, with a force nothing can stop. When an object lay against or on a Boxling, the two kept pushing each other away. So I turned off the physical collision between Boxlings and objects, and let the objects check themselves when a Boxling touches them.

That fixed the jumping, but created three new bugs, one after the other:

**The Boxlings walked through the objects.** The push was slower than the Boxling: a Boxling walks up to 4 metres per second, but the object was only pushed away at 2.5. Now an object always slides away a bit faster than the Boxling that pushes it.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/fo-walk-through-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/fo-walk-through.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

**A box stuck between two Boxlings.** PUK pushed a box to the left, right up against KRABBEL. Now two Boxlings were pushing the same box from opposite sides, the pushes cancelled out, and PUK walked straight through it. Now an object that gets stuck, between two Boxlings or against another object, is knocked off the plank towards the camera.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/fo-stuck-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/fo-stuck.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

**Objects fell through the Boxlings.** Because the collision was turned off, an object falling from the sky went straight through a Boxling and landed inside him. Now an object that hits a Boxling in the air bounces off him to the side, and lands next to him on the plank.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/fo-fall-through-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/fo-fall-through.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## Step 5: the plank tilted too early

Then I noticed something else: the plank already started to tilt while an object was still falling. In the video, the barrel is still in the air while the plank already leans towards it.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/fo-early-tilt-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/fo-early-tilt.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

The plank counts everything inside a zone above it as weight, and that zone is 4 metres high. So a falling object was already counted before it landed. Now a falling object weighs nothing until it touches the plank, or lies on another object that's on the plank. Objects also don't disappear by themselves after 30 seconds anymore, a rule left over from the old test project. They only disappear once they've fallen off the plank.

## Step 6: falling for real

The objects still fell slowly, at an almost constant speed, as if they were sinking through syrup. And when they landed, they lay down perfectly flat and still. That didn't look real at all.

- **Real air resistance.** Objects now start still, speed up because of gravity and slow down to their own top speed. A compact barrel falls faster than a light cone.
- **A bump on the plank.** A heavy object that lands hard on the end of the plank gives it a real jolt.
- **Bouncing.** Cardboard bounces a little, and objects keep spinning a bit when they land.
- **Colliders in the real shape.** A barrel had a capsule as its collider, with round ends, so it stood on a little ball and tilted over. Now every object gets colliders in the real shape of its model when it spawns: a barrel stands flat on its bottom or lies flat on its side, a cone stands on its square foot, and the duck has separate shapes for her body, head, beak and crown.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/fo-real-shapes-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/fo-real-shapes.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

After that, the barrels were sometimes still a bit glitchy: the bottom of a barrel sank into the plank. It turned out the barrel only had a collider on its metal bands, and not on its wooden body, so it rested on the bands and the rest sank into the plank. With that fixed, and a few smaller glitches after a test run, the objects finally lie, roll and slide the way they should.

## Playing with everything together

This is the result: objects fall on the plank, bounce and roll, the plank tilts under their weight, and the Boxlings walk between them and push them off.

<video autoplay loop muted playsinline preload="metadata" poster="../../videos/fo-final-poster.jpg" style="width: 100%; border-radius: 14px; margin-block: 1.5rem;">
  <source src="../../videos/fo-final.mp4" type="video/mp4" />
  Your browser can't play this video.
</video>

## What's next

- Add the other two Boxlings, once all eight pedals are connected.
- Tune how often objects fall and how heavy they are, so the game is hard but not impossible for children.
- Connect it to the idle screen and the UI, so a real game starts after the countdown.

## What I'm taking with me

- **Make each part work on its own first.** The falling objects were improved in their own project before they came near the plank.
- **One fix can cause the next bug.** Turning off the collision fixed the jumping, but made objects walk and fall through the Boxlings. Testing after every change showed it straight away.
- **Record every bug.** A short video of each problem made it much easier to find the cause.
- **Real shapes matter.** Simple colliders are quick, but a barrel standing on a ball or a duck that's a tiny sphere looks wrong straight away.
