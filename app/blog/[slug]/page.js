import Wrapper from "../../components/Wrapper";
import { getAllPostSlugs, getPostBySlug } from "../../../utils/postTools";
import styles from "../../styles/Markdown.module.css";

//todo: add metadata to post
export const metadata = {
	title: `Lee's Blog`,
};

const Post = async ({ params }) => {
	const { slug } = params;
	const post = await getPostBySlug(slug);

	return (
		<Wrapper>
			<p className={styles.title}>{post.title}</p>
			<p className={styles.date}>{post.date}</p>
			<article className="md">
				<div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
			</article>
		</Wrapper>
	);
};

export default Post;

export async function generateStaticParams() {
	return await getAllPostSlugs();
}
