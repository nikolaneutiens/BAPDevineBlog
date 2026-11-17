---
title: "UI Sketches: Hearts, Pedals and a Big GO!"
description: The first sketches of the in-game UI. A player card for every Boxling with their lives and pedals, plus the countdown, the ready check and the game over screen.
date: 2026-11-17
author: ximen
cover: ./images/ui-sketches/ui-elements.webp
coverAlt: A pencil sketch sheet with four player cards (P1 to P4) with hearts and arrow buttons, a Game Over banner, GO! and a 3-2-1 countdown, a check mark, a 1/4 player count and three dots
tags: [Design]
ai: The sketches were drawn by hand, without AI.
---

We already knew how the game flows: players join, a countdown starts, they play and the game ends (you can read about it in [the game flow](../game-flow/)). But we had never drawn what the players actually see on screen during all of that. So I made a first sheet with all the UI elements we need.

![The full sketch sheet with the player cards, Game Over, GO!, the 3-2-1 countdown, the check mark, the player count and the waiting dots](./images/ui-sketches/ui-elements.webp)

Below I go through the elements one group at a time.

## The player cards

![Three player cards: P1 with RITS going right and one life lost, P2 with SPRIET going left, and P3 with KRABBEL standing still with all three lives](./images/ui-sketches/player-cards.webp)

Every player gets a small card on the screen. It shows three things:

- **Who you are.** A P1 to P4 label and the head of your Boxling: RITS with his backwards cap, SPRIET with the bucket hat and the sprout, and KRABBEL with his spikes and goggles. A child who forgets which Boxling is theirs only has to look for their hat.
- **How many lives you have left.** Three hearts. A full heart is a life you still have, an empty heart is a life you lost. P1 has already lost one, P3 hasn't lost any yet.
- **What your feet are doing.** Two arrows for the two pedals. The arrow of the pedal you press lights up, so you see the link between your feet and your Boxling right away. P1 presses right and goes right, P2 goes left, and P3 presses both pedals and stands still.

## Out of the game

![The P4 card with a skull instead of a Boxling head, three empty hearts and two dark arrows](./images/ui-sketches/player-out.webp)

The card also shows the two ways a player can be out of the game. When a Boxling loses all three lives, his head turns into a **skull** with crosses for eyes and all hearts are empty. When a player steps off the pedals, both arrows stay dark and the Boxling is **inactive**. That way the other players see straight away who is still in the game.

## Joining: the player count, waiting and ready

![The player count 1/4 in chunky cardboard numbers](./images/ui-sketches/player-count.webp)

On the idle screen, **1/4** shows how many of the four Boxlings are taken. It changes every time a child steps onto a platform, so the next child sees there's still room to join.

![Three chunky dots that mean the game is waiting for other players](./images/ui-sketches/waiting.webp)

**Three dots** mean we're waiting for other players. They can bounce one after the other, like a loading animation, so the screen never looks frozen.

![A big cardboard check mark for a player who is ready](./images/ui-sketches/ready.webp)

**A check mark** appears above a player as soon as they're ready to play. It matches the ready mark in [the idle state](../idle-state/) sketches.

## The countdown

![The countdown 3, 2, 1 and a big GO! with little spikes around each one](./images/ui-sketches/countdown.webp)

Right before the game starts, **3, 2, 1, GO!** pops up in the middle of the screen. The small spikes around the numbers make them pop, like in a cartoon. GO! is tilted and a bit bigger than the numbers, so it feels like the moment everything starts moving.

## Game over

![A Game Over banner with a skull on top and a small crown ribbon underneath](./images/ui-sketches/game-over.webp)

When the game is over, a big **GAME OVER** banner appears with a skull on top, the same skull as on the card of a player who is out. The small ribbon with the crown underneath links it to the crown on the cardboard box and on RITS.

## The style

Everything is drawn as if it was cut out of thick cardboard: chunky letters with a thick edge on the side, hatching for the shadows and slightly crooked lines. That's on purpose. The Boxlings, the logo and the falling objects are all made of cardboard, so the UI should look like it was made from the same boxes.

## Next steps

- Check the sketches with Nikola, so the UI fits the idle state and the game flow.
- Draw the PUK card, so all four Boxlings have one.
- Work the elements out digitally in the cardboard style, and test from a distance whether children can read the hearts and arrows.
- Give the elements to Lomme so he can put them in Unity.
