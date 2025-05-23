import React from 'react'
import styles from './BlogSection.module.css'


const BlogSection = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainText}></h1>
            <div className={styles.cardsBox}>
                <div className={styles.card}>
                    <img className={styles.cardImg} src="" alt="" />
                    <span className={styles.shrift}></span>
                    <span className={styles.shrift2}></span>
                </div>
                <div className={styles.card}>
                    <img className={styles.cardImg} src="" alt="" />
                    <span className={styles.shrift}></span>
                    <span className={styles.shrift2}></span>
                </div>
                <div className={styles.card}>
                    <img className={styles.cardImg} src="" alt="" />
                    <span className={styles.shrift}></span>
                    <span className={styles.shrift2}></span>
                </div>
                <div className={styles.card}>
                    <img className={styles.cardImg} src="" alt="" />
                    <span className={styles.shrift}></span>
                    <span className={styles.shrift2}></span>
                    <div className={styles.stars}>
                        <FaStar size={10} />
                        <FaStar size={10} />
                        <FaStar size={10} />
                        <FaStar size={10} />
                        <FaStar size={10} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection