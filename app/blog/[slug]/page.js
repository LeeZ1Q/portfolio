import Wrapper from "../../components/Wrapper";
import { getAllPostSlugs, getPostBySlug } from "../../../utils/postTools";
import styles from "../../styles/Markdown.module.css";
import Cd from "../../components/Cd";
import Footer from "../../components/Footer";

export async function generateMetadata({ params }) {
	const { slug } = params;
	const post = await getPostBySlug(slug);

	return {
		title: post.title,
	};
}

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
			<Cd />
			<Footer />
		</Wrapper>
	);
};

export default Post;

export async function generateStaticParams() {
	return await getAllPostSlugs();
}
