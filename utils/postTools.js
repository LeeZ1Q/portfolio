import fsPromise from "fs/promises";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { format } from "date-fns";

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
}

export const getPostBySlug = async (slug) => {
  return slug;
};






