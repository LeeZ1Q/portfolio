import Post from "./Post";
import styles from "../../styles/Blog.module.css";

const FIRST_YEAR = 2023;
function getYears() {
	const date = new Date();
	let currentYear = date.getFullYear();
	const allYears = [];
	while (currentYear >= FIRST_YEAR) {
		allYears.push(currentYear);
		currentYear--;
	}
	return allYears;
}

const Content = ({ posts }) => {
	return (
		<>
			{getYears().map((year) => (
				<>
					<p
						className={styles.year}
						key={year}
					>
						{year}
					</p>{" "}
					{posts
						.filter((post) => post.date.includes(year))
						.map((post) => (
							<Post
								key={post.slug}
								slug={post.slug}
								title={post.title}
								date={post.date}
							/>
						))}
				</>
			))}
		</>
	);
};

export default Content;
