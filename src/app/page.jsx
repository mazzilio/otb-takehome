'use client';
import React, { useState, useEffect } from 'react';
import HolidayCard from '../components/card/holidayCard';
import styles from './page.module.css';
import { Stack, VStack, Spinner, Text } from '@chakra-ui/react';
import SortingMenu from '../components/menu/sortingMenu';
import { fetchData } from '../utils/fetchData';

export default function Home() {
	const [resortData, setResortData] = useState([]);
	const [sortedData, setSortedData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getResortData = async () => {
			try {
				const data = await fetchData();
				setResortData(data);
				setSortedData(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		getResortData();
	}, []);

	const handleSortChange = ({ type, direction }) => {
		const sorted = [...resortData].sort((a, b) => {
			if (type === 'alphabetical') {
				return direction === 'asc'
					? a.resort.name.localeCompare(b.resort.name)
					: b.resort.name.localeCompare(a.resort.name);
			}
			if (type === 'price') {
				return direction === 'asc'
					? a.bookingDetails.price.amount -
							b.bookingDetails.price.amount
					: b.bookingDetails.price.amount -
							a.bookingDetails.price.amount;
			}
			if (type === 'rating') {
				return direction === 'asc'
					? a.resort.starRating - b.resort.starRating
					: b.resort.starRating - a.resort.starRating;
			}
		});
		setSortedData(sorted);
	};

	if (loading) {
		return (
			<div className={styles.page}>
				<main className={styles.main}>
					<Stack direction='row' gap={20}>
						<Spinner size='lg' />
						<Text>Loading resorts...</Text>
					</Stack>
				</main>
			</div>
		);
	}

	if (error) {
		return (
			<div className={styles.page}>
				<main className={styles.main}>
					<Text color='red.500'>Error loading resorts: {error}</Text>
				</main>
			</div>
		);
	}

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Stack direction='row' gap={20}>
					<SortingMenu onSortChange={handleSortChange} />
					<VStack gap={8} w='67%'>
						{sortedData.map((vacation) => (
							<HolidayCard
								key={vacation.resort.id}
								props={vacation}
							/>
						))}
					</VStack>
				</Stack>
			</main>
			<footer className={styles.footer}>
				Created by Mariam H | 2024
			</footer>
		</div>
	);
}
