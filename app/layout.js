/* eslint-disable @next/next/no-page-custom-font */

import NavBar from "./components/NavBar";
import "./styles/global.css";
import "./styles/markdown.css";
import { Providers } from "./theme-provider";

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Caveat&family:wght@500&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<Providers>
					<NavBar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
