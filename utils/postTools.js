import fsPromise from "fs/promises";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "date-fns";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";

export const getSortedPostsData = async () => {
	const postsDirectory = path.join(process.cwd(), "public", "posts");
	const filenames = await fsPromise.readdir(postsDirectory);
	const posts = filenames.map((filename) => {
		// Remove ".md" from file name to get id
		const slug = filename.replace(/\.md$/, "");
		// Read markdown file as string
		const fullPath = path.join(postsDirectory, filename);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		// Use gray-matter to parse the post metadata section
		const { data, content } = matter(fileContents);
		// Combine the data with the id
		return {
			slug,
			...data,
			date: format(data.date, "MMMM dd, yyyy"),
			content,
		};
	});

	// Sort posts by date
	return posts.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
};

export const getAllPostSlugs = async () => {
	const postsDirectory = path.join(process.cwd(), "public", "posts");
	const filenames = await fsPromise.readdir(postsDirectory);

	return filenames.map((filename) => {
		return {
			slug: filename.replace(/\.md$/, ""),
		};
	});
};

export const getPostBySlug = async (slug) => {
	const postDirectory = path.join(
		process.cwd(),
		"public",
		"posts",
		`${slug}.md`
	);
	const fileContents = fs.readFileSync(postDirectory, "utf8");
	const { data, content } = matter(fileContents);
	const result = await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkRehype)
		.use(rehypeHighlight)
		.use(rehypeDocument)
		.use(rehypeFormat)
		.use(rehypeStringify)
		.process(content);
	const htmlContent = result.value;
	return {
		slug,
		date: format(data.date, "MMMM dd, yyyy"),
		title: data.title,
		htmlContent,
	};
};
