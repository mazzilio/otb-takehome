import React, { useState } from 'react';
import { Button, VStack, HStack, Text } from '@chakra-ui/react';
import styles from './sortingMenu.module.css';
import {
	FaSortAlphaDown,
	FaSortAlphaUp,
	FaSortAmountDown,
	FaSortAmountUp,
	FaStar,
	FaStarHalfAlt,
} from 'react-icons/fa';

const SortingMenu = ({ onSortChange }) => {
	// Before, it was only implemented as: useState({ type: 'alphabetical', direction: 'asc' });
	// however, I wanted to maintain state across all 3 types to keep consistency in the UI for the end user
	// but also separate the logic out. This took a bit of time to think on what the best structure was to
	// use this logic.
	const [sortDirections, setSortDirections] = useState({
		alphabetical: 'asc',
		price: 'asc',
		rating: 'asc',
	});

	// Leveraging state to ensure styling shows which one is 'active'.
	const [selectedOption, setSelectedOption] = useState(null);

	const handleSortChange = (type) => {
		const newDirection = sortDirections[type] === 'asc' ? 'desc' : 'asc';

		setSortDirections((prevState) => ({
			...prevState,
			[type]: newDirection,
		}));

		setSelectedOption(type);

		onSortChange({ type, direction: newDirection });
	};

	// From a UI/UX Perspective, I would like instant feedback on knowing whether something is ASC/DSC and which one
	// this may make the component a tiny bit bulkier (kudos of react-icons too), but balancing performance with a good
	// user experience is worth it!
	const getSortIcon = (type) => {
		if (type === 'alphabetical')
			return sortDirections[type] === 'asc' ? (
				// In the interest of time I added data test ids for unit tests, with more time I would've focused
				// on reading docs to pull out the exact properties I can use of the element to test icon switches
				<FaSortAlphaDown data-testid='FaSortAlphaDown' />
			) : (
				<FaSortAlphaUp data-testid='FaSortAlphaUp' />
			);
		if (type === 'price')
			return sortDirections[type] === 'asc' ? (
				<FaSortAmountDown data-testid='FaSortAmountDown' />
			) : (
				<FaSortAmountUp data-testid='FaSortAmountUp' />
			);
		if (type === 'rating')
			return sortDirections[type] === 'asc' ? (
				<FaStarHalfAlt data-testid='FaStarHalfAlt' />
			) : (
				<FaStar data-testid='FaStar' />
			);
	};

	return (
		// I like a mix of leveraging a component library (3rd party or self-built) and classic elements to ensure
		// the components stay a concise and reasonable length and reducing the need for styling across every element.
		<VStack className={styles.menu} gap={0.5}>
			{/* AZ */}
			<Button
				onClick={() => handleSortChange('alphabetical')}
				className={`${styles.option} ${
					selectedOption === 'alphabetical' ? styles.selected : ''
				}`}
				data-testid='sortAz'
			>
				<HStack>
					<Text>
						sort <strong>alphabetically</strong>
					</Text>
					{getSortIcon('alphabetical')}
				</HStack>
			</Button>

			{/* Price */}
			<Button
				onClick={() => handleSortChange('price')}
				className={`${styles.option} ${
					selectedOption === 'price' ? styles.selected : ''
				}`}
				data-testid='sortPrice'
			>
				<HStack>
					<Text>
						sort by <strong>price</strong>
					</Text>
					{getSortIcon('price')}
				</HStack>
			</Button>

			{/* Stars */}
			<Button
				onClick={() => handleSortChange('rating')}
				className={`${styles.option} ${
					selectedOption === 'rating' ? styles.selected : ''
				}`}
				data-testid='sortRatings'
			>
				<HStack>
					<Text>
						sort by <strong>star rating</strong>
					</Text>
					{getSortIcon('rating')}
				</HStack>
			</Button>
		</VStack>
	);
};

export default SortingMenu;
