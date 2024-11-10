import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>Hello!</main>
			<footer className={styles.footer}>
				Created by Mariam H | 2024
			</footer>
		</div>
	);
}
