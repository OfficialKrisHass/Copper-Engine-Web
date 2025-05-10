import ArticleList from "./ui/Articles/ArticleList";
import FeatureList from "./ui/Features/FeatureList";

import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <img src={"/screenshots/CopperPromotional.png"} alt="Copper Editor screenshot"/>
        <div className={styles.heroText}>
          <h1>Copper Engine</h1>
          <h2>The worst choice</h2>
        </div>
      </div>
      <section id="about" className={styles.container}>
        <h2>About</h2>
        <p>Copper Engine is an open source 3D game engine developed by Kris Hass <small>(HI MOM!!!!)</small> with the current goal of creating a functional engine.
        It is not meant to be a competitor to Unreal, Unity or Godot, instead it's an attempt at creating something, that could one day become one.</p>
        <br/>
        <p>In it's current stage, Copper Engine is capable of creating games with it's C# Scripting Engine, simple but powerful 3D Renderer, and <Link href="/#features">many more</Link>, using
        a professional level editor that comes prepackaged with the engine. Although the feature of building and distributing your games is not implemented, but planned
        to be in the upcoming Beta 0.4 version.</p>
      </section>
      <section className={styles.container}>
        <h2>What's New</h2>
        <div className={styles.newsContainer}>
          <Link href="/article/latest">
            <article className={styles.latest}>
              <div className={styles.thumbnail}>
              </div>
              <div className={styles.info}>
                <h3>Latest article title</h3>
                <p>Here I will have to put the text of the newest article, but somehow clip it so that it won't show
                in it's entirety but cut off at some point, okay I don't know what to say anymore</p>
              </div>
            </article>
          </Link>
          <ArticleList/>
          <div className={styles.more}>
            <Link href="/blog">Read more</Link>
          </div>
        </div>
      </section>
      <section id="features" className={styles.container}>
        <h2>Features</h2>
        <FeatureList/>
        <div className={styles.more}>
          <Link href="/features">More features</Link>
        </div>
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
