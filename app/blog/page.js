import Content from "../components/Blog/Content";
import { getSortedPostsData } from "../../utils/postTools";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

export const metadata = {
	title: `Lee's Blog`,
};

const blog = async () => {
	const posts = await getSortedPostsData();
	return (
		<div>
			<Wrapper>
				<Content posts={posts} />
				<Footer />
			</Wrapper>
		</div>
	);
};

export default blog;
