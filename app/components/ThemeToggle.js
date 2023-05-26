"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "../styles/Nav.module.css";

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<span
			className={`iconfont ${styles.icon}`}
			onClick={toggleTheme}
		>
			&#xe635;
		</span>
	);
};

export default ThemeToggle;
