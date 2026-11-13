---
title: "One Arduino, Eight Pedals — Development Expert"
date: 2026-11-13
category: experts
description: "In an expert consult on development, we asked how to set up the Arduino and which pedals to use. The expert advised one Arduino for all four players, comparing both pedal types, documenting why we choose things and testing the full setup overnight."
tags: [Hardware, Arduino, Documentation]
intro: "In an expert consult on development, we asked two concrete hardware questions: should every player station get its own Arduino, and should we use USB pedals or pedals that connect straight to an Arduino? He also gave feedback on how we document our game flow and how we should test the hardware."
takeaways:
  - "Use one Arduino for all four player stations and all eight pedals."
  - "Compare USB pedals with Arduino-compatible pedals before buying all eight."
  - "Document not only what we use, but also why we chose it."
  - "Test all eight pedals together, and leave the setup running overnight."
sections:
  - topic: Arduino Setup — One or Multiple Arduinos?
    feedback: "We asked whether we should use a separate Arduino for each player station (four in total), or one Arduino for all four players."
    details:
      - "The answer was clear: one Arduino for all four player stations."
      - "This Arduino handles the inputs of all eight pedals, two per player."
    decision: "We use one Arduino as the central input controller for all eight pedals."
    next: "Make sure the chosen Arduino supports eight pedal inputs, and test whether all eight can be detected at the same time."
  - topic: Pedal Selection — USB vs. Arduino-Compatible Pedals
    feedback: "We already have a few USB pedals for testing, but eight of them would need eight USB connections. We also found pedals that connect directly to an Arduino, and asked which option is better for our installation."
    details:
      - "Both options are possible, and neither is better in every situation."
      - "If we buy new pedals, Arduino-compatible pedals are probably the more practical choice."
      - "If USB pedals turn out to suit us better, we can still connect them, depending on their electronics inside."
      - "For example by rewiring them with terminal blocks (suikertjes) or soldered connections."
    next: "Test the USB pedals we have, find out how each option connects to one Arduino, and choose the most practical and reliable one before buying all eight."
  - topic: Game Flow and Technical Documentation
    feedback: "We should clearly define and document the whole game flow. We already started on this, which is a good direction. Every important design and technical decision should come with a clear explanation: not only what we use, but why."
    details:
      - "Why do we use Unity as our game engine?"
      - "Why did we choose pedals instead of buttons or joysticks?"
      - "Why one Arduino instead of four?"
      - "How does our hardware setup support the user experience?"
    next: "Keep documenting the game flow, and keep track of our decisions, the alternatives and the reasons behind them."
  - topic: Hardware Testing — Reliability and Long-Term Stability
    feedback: "We should test the complete setup with all eight pedals connected, and check that it handles input from several players at the same time. We should also leave the whole setup running overnight and check the next morning whether everything still responds correctly."
    next: "Build a full eight-pedal test setup, run an overnight test, write down any missed inputs, connection problems or crashes, and repeat the tests after big hardware or software changes."
actions:
  - text: "Use one Arduino as the central input controller for all four players."
    status: decided
  - text: "Check that the chosen Arduino supports all eight pedal inputs."
  - text: "Test whether all eight inputs can be detected at the same time."
  - text: "Test the USB pedals we already have."
  - text: "Compare USB pedals with Arduino-compatible pedals and how each connects to one Arduino."
  - text: "Choose the final pedal type before buying all eight pedals."
  - text: "Keep documenting the complete game flow."
  - text: "Explain and justify our technical and design choices, including the alternatives."
  - text: "Connect all eight pedals to the Arduino and test input from several players at once."
  - text: "Leave the complete setup running overnight and check it the next morning."
  - text: "Write down connection issues, missed inputs, crashes and other unexpected behaviour."
  - text: "Repeat the tests after big hardware or software changes."
---

## Related

- Our first test with an Arduino: [Boxlings on Buttons: A First Arduino Test](../../blog/arduino-buttons/)
- Moving the Boxlings with the pedals: [Boxlings on Pedals: Moving With Your Feet](../../blog/foot-pedals-movement/)
- Why we chose foot panels in the first place: [Balancing With Your Feet: Why We Chose Foot Panels](../../blog/foot-panels/)
