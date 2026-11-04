---
title: "Making RITS: Boxling 1 of 4"
description: From a blocky base model to a painted cardboard figure with a backpack. The process behind the first of the four Boxlings.
date: 2026-10-31
author: ximen
cover: ./images/rits/cover.webp
coverAlt: RITS, a blocky cardboard figure with a red cap worn backwards, a red crown on his chest and red shoulder straps
gallery:
  - src: ./images/rits/final-front.webp
    alt: RITS from the front, with the shoulder straps and the crown on his chest
  - src: ./images/rits/final-side.webp
    alt: RITS from the side, with the red backpack on his back
  - src: ./images/rits/final-back.webp
    alt: RITS from behind at an angle, showing the brim of the cap and the backpack
  - src: ./images/rits/backpack.webp
    alt: Close-up of the red cardboard backpack with its flap, front pocket and buckles
tags: [Design]
ai: The textures were made with AI, because they were hard to realise otherwise. The render pictures were also made with AI renders, because this is much faster.
---

RITS is the first of the four Boxlings: small figures that look as if they were built from old cardboard boxes. The goal was a character that feels like a handmade toy: straight blocks, tape, a bit of paint, and cardboard that has clearly been through a few things.

## 1. The base model

I started in Blender with simple blocks: a big head, a rectangular body, arms made of separate segments and a cap worn backwards. Everything stayed deliberately angular, to match the idea of folded cardboard.

![The RITS base model in Blender, with a red cap and cardboard-coloured blocks](./images/rits/model-overview.webp)

My first hand had five long fingers made of separate segments with round joints in between. It was too realistic: it didn't fit the blocky, toy-like style of the rest of the figure.

![First version of the hand: five long fingers with round joints, too realistic for the style](./images/rits/model-hand-realistic.webp)

So I redesigned the hand: a block-shaped palm with short, chunky finger blocks. It fits the rest of the body much better.

![The new, simpler hand design with short block fingers](./images/rits/model-hand-blocky.webp)

The cap didn't work on the first try either. The first version was round, but a round cap didn't feel like something you would build from a cardboard box. So I made the cap square, to match the angular shape of the head.

![The first, round version of the cap, which didn't fit the angular style](./images/rits/model-cap-round.webp)

## 2. Looking for the right cardboard

Next I tried out several cardboard materials on the body: corrugated cardboard with clear ribs, damaged cardboard with peeled patches, and smooth kraft paper. None of them gave the feeling of the reference on its own, but each had something useful.

![The body with a corrugated cardboard material with horizontal ribs](./images/rits/material-corrugated.webp)

![The body with a damaged cardboard material with light peeled patches](./images/rits/material-damaged.webp)

![The body with a smooth, darker kraft paper material](./images/rits/material-kraft.webp)

![The node setup of one of the tested cardboard materials](./images/rits/material-nodes.webp)

## 3. The first texture, and why it was too much

For RITS I rebuilt the materials with a Python script in Blender. The script generates mask textures that decide where the red and green paint, the pieces of tape and the crowns go. That way the model itself stays untouched, and I can regenerate the texture whenever I want.

![The untextured model before texturing](./images/rits/step-01-untextured.webp)

![The mask texture: red paint splotches, green splotches and blue squares for the tape](./images/rits/masks.webp)

The first version was far too busy. On the feet and arms the patterns were also much too small, because those objects have a different scale in Blender. After fixing the scale and adjusting the colours it got better, but it was still too much.

![First texture attempt: small specks everywhere, white tape and bright colours](./images/rits/step-02-too-busy.webp)

![Second attempt with better colours, but still a lot of paint, crowns and tape](./images/rits/step-03-colours.webp)

In the third version I toned everything down a lot: less paint, fainter crowns, less tape and partly see-through paint. Only then did the cardboard itself take centre stage.

![Subtle texture: mostly brown cardboard with a few red accents](./images/rits/step-04-subtle.webp)

## 4. Legs and a single crown

The original legs were short stubs. I rebuilt them from stacked blocks: a thigh, a shin and a big block shoe with a toe and a sole. The first version was too long, so I then shortened them by about 20%.

![RITS from the side with the new legs made of stacked blocks and big block shoes](./images/rits/step-05-legs.webp)

I removed the loose crowns spread over the whole body. One hand-drawn crown remains, in the middle of the chest. That works much better as the character's signature.

![Close-up of the red, hand-drawn crown on RITS's chest](./images/rits/step-06-chest-crown.webp)

## 5. Real cardboard relief

The cardboard still looked too flat. So I added real photo textures of cardboard: creases, folds and peeled patches from a damaged cardboard material, and blotchy colour and soft ribs from old cardboard. I only use them for relief and light and dark variation, so RITS keeps his own colours.

![The four real cardboard textures used: colour and height of old and of damaged cardboard](./images/rits/real-textures.webp)

![Close-up of the body with creases, blotches and fine ribs in the cardboard](./images/rits/step-07-relief.webp)

The fingers and the round bolts on the shoulders and elbows got a slightly darker cardboard colour, so they stand out from the arms. I first did a quick material check to see exactly which parts use that material.

![Material check: the fingers and the shoulder bolt light up bright green](./images/rits/material-check.webp)

![Close-up of the arm with the darker fingers and bolts](./images/rits/step-07-arm.webp)

## 6. The backpack

Finally, RITS got a small red backpack in the same style: a cardboard box with a flap, a front pocket, two side pockets and a handle. The shoulder straps run over the shoulders to the front and end in a dark bolt, just like the bolts on his arms. For the backpack I reused the same red cardboard as the cap, so everything belongs together.

## What I'm taking to the next Boxlings

- **Less is more.** The texture only works when the cardboard takes centre stage and the paint and tape stay accents.
- **One strong feature.** One crown on the chest says more than ten small crowns scattered over the body.
- **Real material for relief.** Photo textures of real cardboard add depth, but use them for relief, not for colour.
- **Scripts make it repeatable.** Because the texture comes from a script, I can quickly apply the same style to the other three Boxlings.
