import localFont from 'next/font/local';
import './globals.css';
import Provider from './provider.jsx';

export const metadata = {
	title: 'Holidays 2024 / 2025 | On the Beach',
	description: 'OTB take home by MH',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body>
				<Provider> {children}</Provider>
			</body>
		</html>
	);
}
