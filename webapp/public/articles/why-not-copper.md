---
title: Why you should (not) use Copper-Engine
summary: We've received lots of questions about why you should use Copper, what it brings to the table, and what it will do different. Find out why you should (not) use Copper-Engine and how you can help us shape our project.
thumbnail: /screenshots/CopperPromotional.png
---
Hello, World!

About a week ago we made a post on the [r/programming subreddit](https://www.reddit.com/r/programming/comments/1o291e9/copperengine_a_new_3d_game_engine_made_to_empower/) announcing our game engine, and it ended up getting much more attention than we've anticipated.

Under this post, we've received a lot of amazing comments, praising our work and dedication, asking insightful questions about the engine and it has been a pleasure responding to as many comments as we could. But the question we received the most.

## Why should *I* use Copper-Engine
You should *not*.

Copper-Engine is so early in its development that it simply can't be used for general purpose game development, yet.

###

While we have a solid foundation, a Renderer, Scripting Engine, Physics Engine, Asset system, Input system and an event system, with all of these features being packaged into a professional level editor. There are still a few important features missing, and the present ones are not fully finished.

You can definitely make a game in our engine, a very simple, crude one, but an existing one nonetheless, minus exporting and distributing.

### What makes it unique ?
Before we dive deeper, another common question we received is "What makes Copper-Engine *unique*". We discuss this a bit lower in the article in the "What makes Copper-Engine *unique*" section.

### Who should then ?
Even if Copper-Engine isn't ready for the everyday game developer, that doesn't mean **no one** should use it.

Let us present to you, the Innovation Adoption curve.

![Rogers adoption curve](/articles/media/why-not/AdoptionCurve.png)

The adoption curve, also known as the Diffusion of Innovations theory, models how new ideas and technologies spread in five stages. In other words, it models how new technologies get adopted and how each group innovates on the technology by observing its preceding group.

In the context of Copper, we believe that the *Innovators* and *Early adopters* are the best demographic for our engine.

###

By this we mean people who will help us shape Copper-Engine into its future, establish a community with tutorials and guides, making the engine easier to learn for future users.

Copper-Engine is still so early in its development that many of the features and philosophies that will one day define it, haven't appeared yet. This project had no real goal, no planned future until about a few months ago and is still developed by a single person to this day. Now this does not mean there are no defining features as of yet, but when mentioning the present ones in the responses on our reddit post, we received responses such as "Godot does that too, that is not unique, that is not enough".

What we mean is that Copper-Engine, in its current state, should be used by people who are not afraid to step into uncharted territories. Developers who can request features or report bugs, developers who can suggest ideas and new philosphies that will shape Copper into what it is meant to be. We are not asking you to figure out the defining features of Copper for us. That is still our job and we already have some of those in mind.

### 

Even projects like *Godot* were in a similar stage in their early years. Where there were some philosophies and defining features, that were either ignored or simply seen as not unique enough back then. And a good chunk of what makes Godot unique and itself now, came from Innovators and Early adopters who helped shape the project into what it is now.

### What can *you* do
If you are interested in joining our journey and help make Copper-Engine better for everyone, the best thing you can do is simply use the engine.

Download the source code, make games in it and [report bugs](https://github.com/OfficialKrisHass/Copper-Engine/issues). You can start creating guides and tutorials, or contributing to the source code on our [github repository](https://github.com/OfficialKrisHass/Copper-Engine). If you have any suggestions, or ideas please feel free to reach out to us anywhere on [our socials](https://linktr.ee/copperengine).

## What makes Copper-Engine *unique* ?
The question of *Why* you should use Copper, and *What* makes it unique are two different questions that some people got mixed up. They are arguably equally important, but two very different questions.

### Engine as a Library
Copper-Engine, at its core, is a library, a library that provides the core systems and features of the engine, connecting them together and handling all of the boilerplate code. The provided editor, Copper-Editor, is nothing more than an application that uses this library and calls the right functions.

This makes Copper-Engine more of a framework. You can write your own Level Editor, or even not use one at all and make your game with just code. Copper-Engine is structured in a way where you only need to define a custom Entry point (not `int main()`) and the library takes care of the rest for you, no initialization or updating required.

### Modularity
If you are not using the Scripting Engine, or the Physics system, that part of code will not even be compiled at all, not wasting a single byte or CPU cycle. This also allows you to extend or even write your own replacement systems. Don't like the Renderer ? Write your own.

And the best part is, you don't have to manage it at all. You don't need to download or tick any boxes to disable/enable a system. If you never, anywhere in your project, use a certain system like the Scripting Engine, Physics Engine, etc. They will automatically not be compiled into the final build of your project.

### Low and High Level
One of our biggest inspirations is the Godot project, mainly how "low level" it is. You are given our integrated tools that offer as much control, while still being easy to use.

We know how confusing can tools with such control be for beginners, which is why our tools will be a mixture of both. New users will be welcomed with simple, more high-level looking tools that they can explore and learn how to utilize more and more as they get accustomed to them.

### Full Customization
Customization is a bonus of modularism, however often skipped in the integrated tools. Our integrated tools such as the Copper-Editor will be fully customizable to the deepest level from the color theme to the layout and function of each individual panel, or even custom panels.

Customization should not be blocked behind having to write your own level editor.

### The Copper Ecosystem
A fully connected ecosystem, from designing to developing to publishing and even managing your games will be possible in the future. This is arguably one of the most, if not the most, ambitious plan and for obvious reason is not present at the moment.

In the future you can expect a Copper modeling software, image editor, and even our own game store.

#
As it stands now, most of these features or philosophies are either partially implemented, not yet implemented, or currently impossible to implement at this stage.

Copper-Engine is still in its beta, and up until now we were primarily focused on just getting it to exist in the first place. As stated previously, the engine had no proper planned future so things like customization or an ecosystem were not our main concern.

We are going to be focusing on these defining features from now on and hopefully deliver a good end result you will be pleased with.

## The silence
Lastly this section will be more personal as it comes directly from me, Kris.

I wanted to quickly explain the period of silence. I was a bit overwhelmed by just how big the reddit post got, which caught me pretty off guard. It took me a while to write this article as I was scared it's not going to be good enough or explain the topic properly.

Alongside that, I had to undergo a surgery about a week after making the reddit post, which caused me to be unable to do any form of work for a few days. I am okay now though, it was just a bit of a holdup.

I hope you can understand and that this article answered your lingering questions.

###
Have a great day.

Ciao~
