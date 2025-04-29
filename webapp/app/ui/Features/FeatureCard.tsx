import styles from "./FeatureCard.module.css"

export default function FeatureCard() {

    return (
        <div className={styles.card}>
            <div className={styles.thumbnail}/>
            <div className={styles.info}>
                <h3>Feature name</h3>
                <p>Some info about the feature okay yeah sure great mhm okay sounds good, yeah this feature is so good and great and amazing yep</p>
            </div>
        </div>
    )

}
