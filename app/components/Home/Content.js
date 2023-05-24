import styles from "../../styles/Content.module.css";
import utilStyles from "../../styles/utils.module.css";

const Content = () => {
	return (
		<div className={`${styles.content} ${utilStyles.plain}`}>
			<article>
				<p>
					Hi, I&apos;m Lee, a postgraduate at{" "}
					<span className={utilStyles.stress}>
						Dalian University of Technology
					</span>
					, majoring in{" "}
					<span className={utilStyles.stress}>Electronic Information</span>.{" "}
				</p>
				<p>
					The current focus is on the{" "}
					<span className={utilStyles.stress}>front-end</span>, based on{" "}
					<span className={utilStyles.stress}>React</span> ecosystem.
				</p>
				<p>
					I&apos;m kinda lazy but wanna be{" "}
					<span className={utilStyles.stress}>elegant</span>.
				</p>
			</article>
		</div>
	);
};

export default Content;
