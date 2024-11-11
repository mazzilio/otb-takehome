import { afterEach, describe, expect, test, vi } from 'vitest';
import { cleanup, screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../test-utils';
import SortingMenu from '../../components/menu/sortingMenu';

describe('SortingMenu', () => {
	afterEach(() => {
		cleanup();
	});

	test('renders all sorting options', () => {
		renderWithTheme(<SortingMenu onSortChange={vi.fn()} />);

		expect(screen.getByTestId('sortAz').textContent).toString(
			'sort alphabetically'
		);
		expect(screen.getByTestId('sortPrice').textContent).toString(
			'sort by price'
		);
		expect(screen.getByTestId('sortRatings').textContent).toString(
			'sort by star rating'
		);
	});

	test('changes the sorting direction when a button is clicked', () => {
		const onSortChange = vi.fn();
		renderWithTheme(<SortingMenu onSortChange={onSortChange} />);

		const alphabeticalButton = screen.getByTestId('sortAz');
		fireEvent.click(alphabeticalButton);

		expect(onSortChange).toHaveBeenCalledWith({
			type: 'alphabetical',
			direction: 'desc',
		});
	});

	test('toggles the sorting direction on multiple clicks', () => {
		const onSortChange = vi.fn();
		renderWithTheme(<SortingMenu onSortChange={onSortChange} />);

		const alphabeticalButton = screen.getByTestId('sortAz');

		fireEvent.click(alphabeticalButton);
		expect(onSortChange).toHaveBeenCalledWith({
			type: 'alphabetical',
			direction: 'desc',
		});

		fireEvent.click(alphabeticalButton);
		expect(onSortChange).toHaveBeenCalledWith({
			type: 'alphabetical',
			direction: 'asc',
		});
	});

	test('displays the correct icons based on sorting direction', () => {
		renderWithTheme(<SortingMenu onSortChange={vi.fn()} />);

		const alphabeticalButton = screen.getByTestId('sortAz');

		expect(screen.getByTestId('FaSortAlphaDown')).toBeDefined();

		fireEvent.click(alphabeticalButton);

		expect(screen.getByTestId('FaSortAlphaUp')).toBeDefined();
	});

	test('calls onSortChange with correct parameters when clicking on price button', () => {
		const onSortChange = vi.fn();
		renderWithTheme(<SortingMenu onSortChange={onSortChange} />);

		const priceButton = screen.getByTestId('sortPrice');

		fireEvent.click(priceButton);
		expect(onSortChange).toHaveBeenCalledWith({
			type: 'price',
			direction: 'desc',
		});

		fireEvent.click(priceButton);
		expect(onSortChange).toHaveBeenCalledWith({
			type: 'price',
			direction: 'asc',
		});
	});

	test('properly toggles between sort directions when clicking multiple buttons', () => {
		const onSortChange = vi.fn();
		renderWithTheme(<SortingMenu onSortChange={onSortChange} />);

		const priceButton = screen.getByTestId('sortPrice');
		const ratingButton = screen.getByTestId('sortRatings');

		fireEvent.click(priceButton);
		expect(onSortChange).toHaveBeenCalledWith({
			type: 'price',
			direction: 'desc',
		});

		fireEvent.click(ratingButton);
		expect(onSortChange).toHaveBeenCalledWith({
			type: 'rating',
			direction: 'desc',
		});

		fireEvent.click(priceButton);
		expect(onSortChange).toHaveBeenCalledWith({
			type: 'price',
			direction: 'asc',
		});
	});
});
