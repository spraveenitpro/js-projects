'use client';
import styles from "./page.module.scss";
import Head from "next/head";
import Posts from "../components/Post";
import Bio from "../components/Bio/Bio";
import PostForm from "../components/PostForm";
import React from "react";


export default function Home({ posts }) {
    const [myPosts, setMyPosts] = React.useState([]);

    React.useEffect(() => {
        async function fetchPosts() {

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts`);
            const posts = await response.json();

            console.log(posts);
            setMyPosts(posts)
        }
        fetchPosts();
    }, []);
    //console.log(myPosts)
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

                    {
                        myPosts.map((post) => {
                            const { Content, date, id } = post;
                            return (
                                <li key={id}>
                                    <Posts content={Content} date={new Intl.DateTimeFormat('en-US', {
                                        dateStyle: 'short',
                                        timeStyle: 'short'
                                    }).format(new Date(date))} />
                                </li>
                            )
                        })
                    }

                </ul>

                <PostForm />
            </main>
        </div>
    );
}

