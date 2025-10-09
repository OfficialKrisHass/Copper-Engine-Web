---
title: First Copper Article - Version 0.3, State and Future of the Engine.
summary: Read about Copper-Engine version 0.3, codename Themélio, the first public release of the Copper-Engine project. Find out about the State ofthe engine our future plans and how to help us build the Copper-Engine community.
thumbnail: /articles/media/FirstArticleThumbnail.png
---
Hello, World!

The official Copper-Engine website, the one you're reading this on, just went live. This marks an important moment for our project, the first public step in sharing our vision with the world.

This article serves as the first *devlog*, a place where we will discuss the first public version, Version 0.3, the state of the engine, our progress and the future of Copper-Engine.

## Copper-Engine Version 0.3
Version 0.3, codename *Themélio*, is the **first publicly released** version of Copper-Engine. It represents 400 github commits, ~20 months of stabilization, refactoring, polishing, and adding new features to make the engine ready for its entry into the game engine market.

While a lot of features are still missing, namely a *build proccess*, *better renderer* and an *audio system*, 0.3 introduces a solid and stable foundation to extend on. *Themélio* contains the essence and soul of the engine, and serves as an introduction to the world showing you, potential Copper-Engine users, what's to come.

## State of the Engine
As of writing this, 0.3 is about **98% complete**, with the last major piece being the **Copper Guide** and **API Reference** which is currently being worked on. Once that's finished, *Themélio* will be released and downloadable from the official [Copper-Engine website](https://coppr.dev).

Here are the new additions to 0.3:
* **Copper-Launcher**: After years of sitting in the Copper-Engine github repository, the *Copper-Launcher* was finally worked on, refactoring the UI and allowing for easy project creation from built-in or custom *Project Templates*.

* **Textures and Materials**: Copper-Engine finally has textures and materials. Add materials to meshes with custom textures, colours and tiling to bring life to your scenes.

* **Lighting system**: You can now add multiple lights to a scene with different colours and types. A new Directional light type was added, alongside an ambient directional light that is always present.

* **Asset System**: A blazing fast, zero-overhead asset system. This system stores all game assets in their own contiguous data structure and provides the user safe pointers that let them access and use the asset anywhere.

* **Raycasts**: Copper-Engine now provides a simple and easy-to-use raycast API allowing the user to fire raycasts *once*, *repeatedly* or whenever they please.

* **Reworked Input system**: The old input system was replaced by a new state-based, low-overhead Input system allowing for simple and repeated key state queries or receiving *Key* and *Mouse* events.

* **Reworked Scripting engine**: The C# scripting engine was fully reworked from scratch with the goal of optimization and security. This rewrite introduced features like *Managed references*, *Unmanaged pointers* and *Class reference storage*.

* **Debugging & Profiling API**: A new Debugging and Profiling API was introduced. Adding profiling frames to see how long each part of the update loop takes, or printing out the call stack upon a crash.

The version's main goal was to stabilize the engine and reach a point where games could be developed in Copper-Engine, and we're happy to say that goal has been reached.

## The future of Copper-Engine
After the release of 0.3, development on 0.4 will start immediately. Alongside patches for 0.3, which will be released as bugs and errors are found and reported.

The full list of planned features for 0.4 is not finished, but the major focuses will be:
* **A build system** - Allowing for packaging projects into playable, standalone games.

* **Renderer improvements** - Normal and height maps, shadows and much more.

* **Audio system** - Self-explanatory.

* **Major system reworks** - Systems like the ECS and Scene Serialization will be reworked and expanded.

Our goal with 0.4 is to deliver **the first truly usable** version of Copper-Engine, the point where you can start making actual, playable games with the engine.

## Community and Socials
With the steps we're taking in making the project public we want to start building a community of users and developers interested in our vision.

While we're not opening a Discord server just yet, we would love to do so once there is a tiny, itsy bitsy community interested in joining. To let us know you'd be interested in joining a Discord server for Copper-Engine, follow our socials such as our [Twitter account](https://x.com/CopperEngine) and our [Bluesky account](https://bsky.app/profile/copperengine.bsky.social), or reach us through our email address <contact@coppr.dev>

Your feedback, support and interest mean the world to us.

---

Thank you for reading this article, and for being a part of Copper-Engines's story.
More updates, devlogs and documentation are coming soon.

Ciao~

The Copper-Engine Team.