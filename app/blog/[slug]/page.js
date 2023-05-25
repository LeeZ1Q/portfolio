import Wrapper from "../../components/Wrapper";
import { getAllPostSlugs,getPostBySlug } from "../../../utils/postTools";

const metadata = {
	title: `Lee's Blog`,
};

const Post = async () => {
  const slug = "test";
  const content = await getPostBySlug(slug);
	return <Wrapper>{content}</Wrapper>;
};

export default Post;

export async function generateStaticParams() {
  return await getAllPostSlugs();
}


