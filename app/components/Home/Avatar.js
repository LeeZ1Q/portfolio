
import styles from "../../styles/Avatar.module.css";
import Image from "next/image";
import React from "react";

const Avatar = () => {
  
	return (
		<div className={styles.container}>
			<Image
				src="/avatar.jpg"
				alt="Avatar"
				className={styles.avatar}
				priority
        width={115} 
        height={115}
			/>
			<div className={styles.description}>
				<h1
					className={styles.name}
				>
					Lee
				</h1>
				<p className={styles.tag}>Front-End Developer / Postgraduate / Dalian</p>
			</div>
		</div>
	);
};

export default Avatar;