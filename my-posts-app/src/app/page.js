import styles from "./page.module.scss";
import Head from "next/head";
import Posts from "../components/Post";
import Bio from "../components/Bio/Bio";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>
            <main className={styles.main}>
                <Bio
                    headshot="https://pbs.twimg.com/profile_images/1485632175932383235/8t0DGo6V_400x400.jpg"
                    name="John Doe"
                    tagline="Helping people with their finances"
                    role="Financial Advisor"



                />

                <ul className={styles.posts}>
                    <li>
                        <Posts content=" I’m Working in figma designing a new website that shows all my tweets!." date="2021-09-28" />
                    </li>
                    <li>
                        <Posts content=" I’m Working in figma designing a new website that shows all my tweets!." date="2021-09-28" />
                    </li>
                    <li>
                        <Posts content=" I’m Working in figma designing a new website that shows all my tweets!." date="2021-09-28" />
                    </li>
                </ul>


            </main>
        </div>
    );
}
