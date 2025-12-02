import { GetGuideListCached } from "./GetGuideList"

import Link from "next/link";

import styles from "./SideNav.module.css"

export default async function SideNav() {

    const guideList = await GetGuideListCached();

    return (
        <aside className={styles.sideNav}>
            <h3>Copper-Engine Guide</h3>
            <hr/>
            <ul>
                {guideList.map(guide => (
                    <li key={guide.id}><Link href={"/guide/" + guide.id}>{guide.id} - {guide.title}</Link></li>               
                ))}
            </ul>
        </aside>
    )

}
