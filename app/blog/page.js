import Content from "../components/Blog/Content";
import { getSortedPostsData, getAllPostSlugs } from '../../utils/postTools';

export const metadata = {
	title: `Lee's Blog`,
};

const blog = async () => {
	const posts = await getSortedPostsData();
	const slugs = await getAllPostSlugs();
	console.log(slugs);
	return (
		<div>
      <Content posts={posts} />
		</div>
	);
};

export default blog;


