import Content from "../components/Blog/Content";
import { getSortedPostsData} from '../../utils/postTools';

export const metadata = {
	title: `Lee's Blog`,
};

const blog = async () => {
	const posts = await getSortedPostsData();
	return (
		<div>
      <Content posts={posts} />
		</div>
	);
};

export default blog;


