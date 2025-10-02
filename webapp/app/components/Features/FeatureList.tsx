import FeatureCard from "./FeatureCard"

import styles from "./FeatureList.module.css"

export default function FeatureList() {

    return (
        <div className={styles.list}>
            <FeatureCard
                name="Level Editor"
                description="Copper-Engine comes with a powerful and easy-to-use level editor, aptly named Copper-Editor. Paired with the Copper-Launcher, they
                             form the main toolkit for creating games built on the Copper-Engine."
                thumbnail="/screenshots/CopperPromotional.png"/>
            <FeatureCard
                name="C# Scripting"
                description="By using C# you can add functionality through code to your game projects utilizing the pre-packaged scripting API. This is done by
                             writing C# scripts and creating custom Components to define your game's functionality."
                thumbnail="/screenshots/CopperPromotional.png"/>
            <FeatureCard
                name="ECS"
                description="One of the most crucial parts of the Copper-Engine is our own, custom Entity Component System (ECS) which represents the game worlds
                             efficiently while remaining highly customizable and easy-to-use."
                thumbnail="/screenshots/CopperPromotional.png"/>
            <FeatureCard
                name="Asset system"
                description="Copper stores all built-in or custom game assets in custom, fast, contiguous memory structures for blazing-fast access with no overhead."
                thumbnail="/screenshots/CopperPromotional.png"/>
            <FeatureCard
                name="Input system"
                description="Input is handled by a fast, state-based input system offering overhead-free key state queries and event-based notifications for input
                             changes."
                thumbnail="/screenshots/CopperPromotional.png"/>
            <FeatureCard
                name="Event system"
                description="A simple and customizable event system is a core part of Copper-Engine, making it easy to hook into the engine's flow or define your
                             own custom events."
                thumbnail="/screenshots/CopperPromotional.png"/>
            <FeatureCard
                name="Renderer"
                description="A very minimal but fast 3D batch renderer with basic phong lighting lets you display complex and colourful game worlds."
                thumbnail="/screenshots/CopperPromotional.png"/>
            <FeatureCard
                name="Physics"
                description="Copper-Engine uses PhysX for a fast and optimized Rigid Body simulation. A lightweight wrapper makes PhysX easy to use within your
                             projects."
                thumbnail="/screenshots/CopperPromotional.png"/>

        </div>
    )

}
