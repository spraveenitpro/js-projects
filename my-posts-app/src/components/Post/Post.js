import styles from "./Post.module.scss";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";


const Posts = ({ content, date }) => {
    return (
        <>
            <p className={styles.postsContent}>
                {content}
            </p>

            <ul className={styles.postsMeta}>
                <li className={styles.postsMetaData}>
                    <FaHeart />
                    34
                </li>
                <li className={styles.postsMetaData}>
                    <FaShare />
                    Share
                </li>
                <li className={styles.postsMetaData}>
                    {date}
                </li>
            </ul>

        </>
    )
}

export default Posts