/* eslint-disable @next/next/no-page-custom-font */
import NavBar from "./components/NavBar";
import "./styles/global.css";
import "./styles/markdown.css";
import { Providers } from "./theme-provider";

import { IBM_Plex_Sans, Caveat } from "next/font/google";

const ibm = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-ibm",
});

const cav = Caveat({
	subsets: ["latin"],
	variable: "--font-cav",
});

export default function RootLayout({ children }) {
	return (
		<html
			className={`${ibm.variable} ${cav.variable}`}
			suppressHydrationWarning={true}
		>
			<body>
				<Providers>
					<NavBar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
