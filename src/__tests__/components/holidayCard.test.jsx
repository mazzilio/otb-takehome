import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import HolidayCard from '../../components/card/holidayCard';
import { formatDate } from '../../utils/formatDate';
import { getCurrencySymbol } from '../../utils/currencySymbol';
import { renderWithTheme } from '../test-utils';
import mockData from '../../__mocks__/mock-data.json';

const mockProps1 = mockData[0];

describe('HolidayCard', () => {
	afterEach(() => {
		cleanup();
	});

	test('it renders the resort information correctly', () => {
		renderWithTheme(<HolidayCard props={mockProps1} />);
		expect(screen.getByText('Iberostar Grand Salome')).toBeDefined();
		expect(screen.getByText('Costa Adeje, Tenerife')).toBeDefined();
	});

	test('it displays the correct number of adults, children, and infants', () => {
		renderWithTheme(<HolidayCard props={mockProps1} />);
		expect(screen.getByTestId('partySize').textContent).toString(
			'2 Adults, 2 children & 1 infant'
		);
	});

	test('it formats the date, length of stay, and departure airport correctly', () => {
		renderWithTheme(<HolidayCard props={mockProps1} />);
		const formattedDate = formatDate(
			mockProps1.flightDetails.departureDate
		);
		expect(screen.getByTestId('resortStay').textContent).toString(
			`${formattedDate} for 7 days`
		);
		expect(screen.getByTestId('departure').textContent).toString(
			'departing from East Midlands'
		);
	});

	test('it formats and displays the price with currency', () => {
		renderWithTheme(<HolidayCard props={mockProps1} />);
		const formattedPrice = `${getCurrencySymbol(
			mockProps1.bookingDetails.price.currency
		)}1,136.50`;
		expect(screen.getByText(formattedPrice)).toBeDefined();
	});

	test('it toggles the accordion and changes button text on click', () => {
		renderWithTheme(<HolidayCard props={mockProps1} />);
		const accordionButton = screen.getByText('Read more about this hotel');

		expect(screen.queryByText('Overview')).toBeNull();

		fireEvent.click(accordionButton);
		expect(screen.getByText('Overview')).toBeDefined();
		expect(screen.getByText('Read less about this hotel')).toBeDefined();

		fireEvent.click(accordionButton);
		expect(screen.queryByText('Overview')).toBeNull();
		expect(screen.getByText('Read more about this hotel')).toBeDefined();
	});

	test('it shows the correct overview text when expanded', () => {
		renderWithTheme(<HolidayCard props={mockProps1} />);
		const accordionButton = screen.getByText('Read more about this hotel');
		fireEvent.click(accordionButton);

		expect(
			screen.getByText(
				'The Iberostar Grand Salomehas an exceptional location in the south of Tenrife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf Courses, and is an ideal hotel for families couples and groups who are looking for a holiday full of sport, sun and sea.'
			)
		).toBeDefined();
	});
});
