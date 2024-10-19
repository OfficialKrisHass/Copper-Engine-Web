import Navbar from "./components/navigation/navbar";

import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1>Copper Engine</h1>
        <h3>The worst choice</h3>
      </div>
      <p className={styles.lorem}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend orci sit amet arcu aliquam, ullamcorper pellentesque lectus ullamcorper. Quisque iaculis sem felis, in blandit tellus iaculis vitae. Pellentesque fringilla lacus eu ligula interdum, et gravida purus porta. Suspendisse ornare rutrum lorem id pharetra. In vel mattis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare, orci ut ullamcorper suscipit, ante dui consequat velit, in pretium velit eros et nunc. Nullam vel posuere arcu, a pretium felis. Etiam sit amet facilisis lacus. Nullam convallis eros eu massa tincidunt tempor.
        Nunc metus ex, auctor in faucibus vel, tempus non tortor. Cras aliquet arcu non lacus venenatis vehicula. Donec ultricies malesuada erat, vitae maximus sem aliquam id. Aliquam pellentesque leo ac nibh feugiat, suscipit luctus neque consectetur. Maecenas placerat diam at metus accumsan, tristique rhoncus nulla consectetur. Sed dapibus felis ac est vulputate dignissim. Maecenas efficitur vestibulum neque sed pharetra. Maecenas nec felis id nunc lacinia tristique gravida vel ipsum. Duis iaculis nisi id aliquam faucibus. Praesent purus ipsum, auctor non dui vitae, pellentesque porta diam. Duis pellentesque libero ut erat varius convallis. Morbi consectetur vestibulum lectus, eu fringilla nunc imperdiet in.
        In cursus eget purus at faucibus. Sed massa ipsum, sollicitudin vitae suscipit a, imperdiet id nibh. Curabitur eget arcu sit amet arcu dictum sodales id at erat. Donec ac libero enim. Maecenas iaculis massa sit amet tristique volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec mollis, eros vitae rhoncus ornare, dui libero porttitor diam, at sodales mauris nulla at purus.
        Quisque et convallis diam. Donec vestibulum pretium pellentesque. Cras at ipsum sed metus vestibulum mollis. Suspendisse diam urna, congue ut semper a, ultrices vulputate sapien. Etiam fringilla, dui id viverra porttitor, dolor tellus consequat mi, non sodales quam orci non mauris. Cras posuere eros accumsan molestie laoreet. Aenean tincidunt vel est commodo dapibus. Proin ut urna nibh. Donec ornare ultricies purus, id bibendum lectus accumsan in.
        Mauris consequat sem diam, dictum eleifend ipsum feugiat tempor. Fusce efficitur, magna nec mattis accumsan, risus massa fermentum urna, eu iaculis nisl quam sit amet diam. Phasellus maximus luctus lorem, ut consequat ex finibus sed. Sed tincidunt tristique quam, at fermentum ante venenatis at. Aenean dapibus eu tortor a vehicula. Maecenas ac convallis quam, sed vestibulum ante. Fusce in nunc urna.
      </p>
    </div>
  );

}
