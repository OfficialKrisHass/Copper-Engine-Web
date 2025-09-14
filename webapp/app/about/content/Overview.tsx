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
            <p>We believe that games are an art-form, and like any other art-form, it takes talent and dedication. Throwing millions of dollars into it, and bringing
               on massive teams, do not guarantee a good game. Interpret that as a stab at someone (or something) if you must. And like any other art, games are
               capable of delivering incredible, life changing experiences that can shape someones life.</p>
            <br/>
            <p>We also believe that game development should be accessible to anyone, anywhere. As we stated previously, games are art, and game development is
               a way of expressing yourself, and anyone should be able to do that. You shouldn't need thousands, hundreds, not even tens of dollars just to
               produce and share something with the world. For that reason, we believe game development tools and guides should be free and easilly accessible,
               not being locked behind a paywall, or gatekept.</p>
            <br/>
            <p>For more of our beliefs and views, check out the <Link href="/about?view=ethos">Copper Ethos</Link></p>
            <br/>

            <h3 id="who-for">Who is Copper-Engine for ?</h3>
            <p>Copper-Engine is meant for absolutely anyone of any levels of exprience, status, race or gender. In other words, absolutely, anyone.</p>
            <br/>
            <p>However at the moment, due to the new, uncharted nature of the engine, the best demographic are experimentative developers, interested in game engine
               architecture or lookng to get into the topic. Developers who don't mind working with
               minimal tutorials and documentation, possibly even helping create said tutorials or documentation.</p>
            <br/>
        </>
    );

}
