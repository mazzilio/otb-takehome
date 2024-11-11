'use client';

import React, { useState } from 'react';
import styles from './holidayCard.module.css';
import { Button, Card, Image, Stack, Text } from '@chakra-ui/react';
import { Rating } from '../ui/rating';
import { formatDate } from '../../utils/formatDate';
import { getCurrencySymbol } from '../../utils/currencySymbol';

const HolidayCard = ({ props }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const resort = props?.resort;
	const bookings = props?.bookingDetails;
	const flight = props?.flightDetails;
	const date = formatDate(flight?.departureDate);
	const price = `${getCurrencySymbol(bookings?.price?.currency)}${Number(
		bookings?.price?.amount
	)
		.toFixed(2)
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

	const toggleAccordion = () => setIsExpanded(!isExpanded);

	return (
		<Card.Root className={styles.container}>
			<Card.Body className={styles.cardBody}>
				<div className={styles.imageContainer}>
					<Image src={resort?.image?.url} alt={resort?.name} />
					<div
						className={styles.accordionButton}
						onClick={toggleAccordion}
					>
						<Text textStyle='xs'>
							{isExpanded ? 'Read less' : 'Read more'} about this
							hotel
						</Text>
						<span className={styles.accordionIcon}>
							{isExpanded ? '▲' : '▼'}
						</span>
					</div>
				</div>

				<div className={styles.details}>
					<div className={styles.title}>
						<Card.Title>{resort.name}</Card.Title>
						<Card.Description>
							{resort?.regionName}, {resort?.countryName}
						</Card.Description>
					</div>

					<Rating
						defaultValue={resort?.starRating}
						size='sm'
						readOnly
						colorPalette='yellow'
					/>

					<Stack gap={1}>
						<Text textStyle='xs' data-testid='partySize'>
							{bookings?.party?.adults && (
								<>
									<strong>
										{bookings.party.adults}&nbsp;
									</strong>
									{bookings.party.adults > 1
										? 'Adults'
										: 'Adult'}
								</>
							)}

							{bookings?.party?.children && (
								<>
									{bookings.party.adults ? ', ' : ''}
									<strong>
										{bookings.party.children}&nbsp;
									</strong>
									{bookings.party.children > 1
										? 'children'
										: 'child'}
								</>
							)}

							{bookings?.party?.infants && (
								<>
									{bookings.party.adults ||
									bookings.party.children
										? ' & '
										: ''}
									<strong>
										{bookings.party.infants}&nbsp;
									</strong>
									{bookings.party.infants > 1
										? 'infants'
										: 'infant'}
								</>
							)}
						</Text>

						<Text textStyle='xs' data-testid='resortStay'>
							<strong>{date}</strong> for{' '}
							<strong>{bookings?.lengthOfStay}</strong> days
						</Text>

						<Text textStyle='xs' data-testid='departure'>
							departing from{' '}
							<strong>{flight.departureAirport}</strong>
						</Text>
					</Stack>

					<Button>
						<Text textStyle='xs'>Book now</Text>
						<Text textStyle='2xl' className={styles.buttonText}>
							{price}
						</Text>
					</Button>
				</div>
			</Card.Body>

			{isExpanded && (
				<Card.Footer className={styles.accordionContent}>
					<Card.Footer className={styles.footer}>
						<Stack gap={3}>
							<Card.Title className={styles.footerTitle}>
								Overview
							</Card.Title>
							<Text textStyle='sm'>{resort.overview}</Text>
						</Stack>
					</Card.Footer>
				</Card.Footer>
			)}
		</Card.Root>
	);
};

export default HolidayCard;
