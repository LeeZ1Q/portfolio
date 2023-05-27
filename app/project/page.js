import Wrapper from "../components/Wrapper";
import styles from "../styles/Project.module.css";
import Item from "../components/Project/Item";

export const metadata = {
	title: "Project - Lee",
};

const Project = () => {
	return (
		<Wrapper>
			<div className={styles.container}>
				<p className={styles.title}>Projects</p>
				<div className={styles.list}>
					<Item
						name="mini-react"
						description="A mini React that implements React core concepts."
						icon="&#xe64b;"
						repo="https://github.com/LeeZ1Q/mini-react"
					/>
					<Item
						name="mini-redux"
						description="Use the most simple Javascript to implement Redux core functions."
						icon="&#xe66c;"
						repo="https://github.com/LeeZ1Q/mini-redux"
					/>
					<Item
						name="react-dnd-playground"
						description="React drag and drop examples playground."
						icon="&#xe704;"
						repo="https://github.com/LeeZ1Q/react-dnd-playground"
					/>
					<Item
						name="Book Finder"
						description="A Book Searching Website using Google Book API."
						icon="&#xe61f;"
						repo="https://github.com/LeeZ1Q/bookfinder"
					/>
					<Item
						name="ToDo"
						description="A ToDo Web App Built with React."
						icon="&#xe9cb;"
						repo="https://github.com/LeeZ1Q/ToDo"
					/>
				</div>
				<p className={styles.title}>Demo</p>
				<div className={styles.list}>
					<Item
						name="dark-mode-toggle"
						description="A dark mode demo."
						icon="&#xe65a;"
						repo="https://github.com/LeeZ1Q/dark-mode"
					/>
					<Item
						name="NCMDownloader"
						description="A tampermonkey script to download NCM music."
						icon="&#xe6b6;"
						repo="https://github.com/LeeZ1Q/NCMDownloader"
					/>
				</div>
			</div>
		</Wrapper>
	);
};

export default Project;
