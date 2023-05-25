import Wrapper from "../Wrapper";
import Post from "./Post";
import styles from "../../styles/Blog.module.css";

const Content = ({ posts }) => {

	return (
		<Wrapper>
			<p className={styles.year}>2023</p>
			{posts
				.filter((post) => post.date.includes("2023"))
				.map((post) => (
					<Post
						key={post.slug}
						slug={post.slug}
						title={post.title}
						date={post.date}
					/>
				))}
		</Wrapper>
	);
};

export default Content;
