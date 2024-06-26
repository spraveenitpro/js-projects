import styles from "./page.module.scss";
import Head from "next/head";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    My Posts
                </h1>

                <ul className={styles.posts}>
                    <li>
                        <p className={styles.postsContent}>
                            I’m Working in figma designing a new website that shows all my tweets!.
                        </p>
                        <p className={styles.postsDate}>
                            2021-09-28
                        </p>
                    </li>
                    <li >
                        <p className={styles.postsContent}>
                            I’m Working in figma designing a new website that shows all my tweets!.
                        </p>
                        <p className={styles.postsDate}>
                            2021-09-28
                        </p>
                    </li>
                    <li>
                        <p className={styles.postsContent}>
                            I’m Working in figma designing a new website that shows all my tweets!.
                        </p>
                        <p className={styles.postsDate}>
                            2021-09-28
                        </p>
                    </li>
                </ul>
            </main>
        </div>
    );
}
