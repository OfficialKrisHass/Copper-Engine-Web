import Link from "next/link"

export default function Ethos() {

    // No handholding.
    // Copper-Engine has zero game 

    return (
        <>
            <h2>The Copper Ethos</h2>
            <p>The Copper Ethos is a set of beliefs, ideals and values that characterize the Copper-Engine project. It is what makes it unique, different from other
               engines, and itself, its what gives it personality.</p>
            <br/>

            <h3 id="open-source">Open Source</h3>
            <p>The Copper-Engine project, and all of its associated projects, are, and will remain fully open source until the heat death of the universe.</p>
            <br/>
            <blockquote>"Open source allows anyone to view edit and improve the engine. It allows people who were like me to see how game engines and games work under
               the hood, and learn off of it. And overall are a better alternative to closed source projects."</blockquote>
            <br/>
            <p>The source code for Copper-Engine and all of its associated projects will remain fully free to view, edit and distribute under the MIT license. For
               more information about distributing and revenue made from games made in Copper-Engine, read the <Link href="/about?view=ethos#distribution">Distribution section</Link>.</p>
            <br/>
            <p>Contribution to the Copper-Engine project and any of its associated projects is more than welcome, encouraged even. Same goes for modding, extensions
               forks and any other customization/modification of the original source code, as long as it isn't on the <Link href="/about?view=ethos#nono">nono list</Link>.</p>
            <br/>

            <h3 id="distribution">Distribution</h3>
            <p>Games made with the help of Copper-Engine, whether the original product, or a modified version, will forever be allowed to be freely distributed
               and collect revenue under the MIT license. The only exception to this are crypto games or malicious projects, those are strictly prohibited from
               generating revenue.</p>
            <br/>
            <p>The Copper-Engine project and team has zero rights to take any percentage off of revenue made from Copper-Engine games. And it will remain this way
               for the rest of time as we believe games made with Copper-Engine are your hard work, for which we only provided the tools. Wouldn't it be for us,
               you would have used a different engine and most likely achieved the same result.</p>
            <br/>
            <p>Donations are welcome and encouraged as it is the only source of income this project has. Donations will be possible in the future through services
               like Patreon, Kofi, etc. But are at the moment unavailable due to lack of benefits we can provide.</p>
            <br/>

            <h3 id="nono">Nono list</h3>
            <p>This is a list of projects and/or modifications that are strictly prohibited from being made and published with Copper-Engine.</p>
            <br/>
            <ul>
                <li><p>Crypto</p></li>
                <li><p>Game cheats</p></li>
                <li><p>Viruses</p></li>
            </ul>
        </>
    )

}
