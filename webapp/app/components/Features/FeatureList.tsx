import FeatureCard from "./FeatureCard"

import styles from "./FeatureList.module.css"

export default function FeatureList() {

    return (
        <div className={styles.list}>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
        </div>
    )

}
