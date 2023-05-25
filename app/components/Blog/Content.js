import Wrapper from "../Wrapper";
import Post from "./Post";

const Content = ({ posts }) => {
	console.log(posts);

	return (
		<Wrapper>
			{posts.map((post) => (
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
