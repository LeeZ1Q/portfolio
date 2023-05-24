import styles from "../../styles/Content.module.css";
import utilStyles from "../../styles/utils.module.css";
import Divider from "../Divider";
import Link from "next/link";

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
				<Divider />
				<article>
					<p>
						I love playing around with code, discovering new technologies, and
						building fun and useful projects. On my projects page, you can find
						my projects along with their Github repositories and online demos.
					</p>
				</article>
				<Divider />
				<article>
					<p>Outside of programming,I enjoy all the beutiful things.</p>
					<p>
						Join me on my journey as I explore the world of technology and
						beyond.
					</p>
				</article>
				<Divider />
				<article>
					<p>
						Find me on {""}
						<Link
							href="https://github.com/LeeZ1Q"
              rel='noreferrer'
              target="_blank"
							className={utilStyles.textLink}
						>
							Github
						</Link>{" "}
						and {""}
						<Link
							href="https://space.bilibili.com/67972196"
              rel='noreferrer'
              target="_blank"
							className={utilStyles.textLink}
						>
							bilibili
						</Link>
					</p>
					<p>Mail me at leez1q@qq.com</p>
				</article>
			</article>
		</div>
	);
};

export default Content;
