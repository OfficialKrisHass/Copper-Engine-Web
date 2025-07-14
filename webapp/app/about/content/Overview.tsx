import Link from "next/link";

export default function Overview() {

    return (
        <>
            <h2>Overview</h2>
            <p>Copper-Engine is an open source 3D game engine written in C++. It's main focus lies on creating solid performance, satisfying gamers and providing
               an easy to use, powerful and most of all, trustworthy tool to it's users.</p>
            <br/>

            <h3 id="origins">Origins</h3>
            <p>The project officialy started on the 1st of August 2022, however attempts were made as early as <Link href="https://github.com/OfficialKrisHass/Copper-Engine-Old">May 2nd 2022</Link>.
               Originally it started as a hobby project for Kris to gain more experience and knowledge in game development and how games work, with the plan to
               later become a base for a proprietary game engine for Copper Games, a game studio led by Kris.</p>
            <br/>
            <p>After 2 rewrites and restarts, the repository for
               the current Copper-Engine was created, development started and over time, the project became what it is today. During the early stages of development
               the beginnings of what would later become the <Link href="/about?view=ethos">Copper Ethos</Link> started to take form.</p>
            <br/>

            <h3 id="beliefs">Our beliefs</h3>
            <p>We believe that games are an art-form, and like any other art-form, throwing millions of dollars into it, and bringing on massive teams, do not
               guarantee a good game. Interpret that as a stab at someone (or something) if you must but as with any art-form comes the aspect of good, life changing
               results taking time and dedication. Or in other words, great things are hard to make</p>
            <br/>
            <p>What we mean by that is that just because the engine used to make a game has astounding graphics, or the studio behind it is a AAA multi billion
               dollar company, doesn't automatically mean the game will be perfect. What makes a game perfect are the hard working developers dedicating their time
               and money to a project they love, whether that time is spent doing hard, gut-wrenching tasks or not.</p>
            <br/>

            <h3 id="who-for">Who is Copper-Engine for ?</h3>
            <p>Copper-Engine is meant for absolutely anyone, experienced or not, young or old, AAA or indie, black or white, male or female, absolutely, anyone.</p>
            <br/>
            <p>However at the moment, due to the new, uncharted nature of the engine, the best demographic are experimentative developers, who don't mind working with
               minimal tutorials and documentation, possibly helping create said tutorials or documentation. Developers who have an interest in game engine architecture
               or are looking to get into the topic are going to have an easier time using the engine, compared to new, inexperienced developers.</p>
        </>
    );

}
