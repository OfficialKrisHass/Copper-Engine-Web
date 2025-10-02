import Image from "next/image"

import styles from "./FeatureCard.module.css"

type Props = {
    name: string,
    description: string,
    thumbnail: string,
}

export default function FeatureCard({ name, description, thumbnail } : Props) {

    return (
        <div className={styles.card}>
            <div className={styles.thumbnail}>
                <Image src={thumbnail} alt="Feature thumbnail" fill={true}/>
            </div>
            <div className={styles.info}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )

}
