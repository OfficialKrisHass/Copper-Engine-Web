import ArticleList from "./components/Articles/ArticleList";
import FeatureList from "./components/Features/FeatureList";

import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <img src={"/screenshots/CopperPromotional.png"} alt="Copper Editor screenshot"/>
        <div className={styles.heroText}>
          <h1>Copper-Engine</h1>
          <h2>The worst choice</h2>
        </div>
      </div>
      <section id="about" className={styles.container}>
        <h2>About</h2>
        <p>Copper-Engine is an open source 3D game engine developed by Kris Hass <small>(HI MOM!!!!)</small> with solid performance, users and gamers as the main
        focus areas.</p>
        <br/>
        <p>In it's current stage, Copper-Engine is capable of creating simple games with it's C# Scripting Engine, simple but powerful 3D Renderer, Entity Component
        System and <Link href="/#features">many more features</Link>. All of this is possible with the help of a professional level editor that comes prepackaged
        with the engine.</p>
        <br/>
        <p>To learn more about our core concepts, values and plans.</p>
        <br/>
        <div className={styles.more}>
            <Link href="/about?view=overview">Learn More</Link>
        </div>
      </section>
      <section className={styles.container}>
        <h2>What's New</h2>
        <div className={styles.newsContainer}>
          <ArticleList/>
          <div className={styles.more}>
            <Link href="/blog">Read more</Link>
          </div>
        </div>
      </section>
      <section id="features" className={styles.container}>
        <h2>Features</h2>
        <FeatureList/>
        {/*<div className={styles.more}>
          <Link href="/features">More features</Link>
        </div>*/}
      </section>
      <section className={styles.container}>
        <h2>Contribute</h2>
        <div className={styles.helpContainer}>
          <div className={styles.help}>
            <h3>Code</h3>
            <p>Fix bugs, add features, optimize, anything to do with editing the source code.</p>
          </div>
          <div className={styles.help}>
            <h3>Report bugs</h3>
            <p>Report any bugs and crashes you find. Without this, most bugs will not be even discovered.</p>
          </div>
          <div className={styles.help}>
            <h3>Use, use, use</h3>
            <p>Simply use the engine. That's the easiest and most effective way of supporting this project.</p>
          </div>
        </div>
      </section>
    </main>
  );

}
