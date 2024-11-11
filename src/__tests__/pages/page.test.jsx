import Home from '../../app/page';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { cleanup, screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from '../test-utils';
import { fetchData } from '../../utils/fetchData';
import mockData from '../../__mocks__/mock-data.json';

beforeEach(() => {
	global.fetch = vi.fn();
	vi.clearAllMocks();
});

afterEach(() => {
	cleanup();
});

describe('Homepage', () => {
	test('it should load the homepage and render necessary components when data is fetched successfully', async () => {
		vi.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({ ok: true, json: () => Promise.resolve(mockData) })
		);

		renderWithTheme(<Home />);

		expect(screen.getByText('Loading resorts...')).toBeDefined();

		await waitFor(() =>
			expect(
				screen.getAllByRole('button', { name: /sort/i })
			).toHaveLength(3)
		);

		expect(screen.getAllByText('Book now')).toHaveLength(3);

		expect(screen.getByText(/Created by Mariam H | 2024/)).toBeDefined();
	});

	test('it should show an error message when data fetching fails', async () => {
		vi.spyOn(global, 'fetch').mockRejectedValueOnce(
			new Error('Failed to fetch data')
		);

		renderWithTheme(<Home />);

		expect(screen.getByText('Loading resorts...')).toBeDefined();

		await waitFor(() =>
			screen.getByText(/Error loading resorts: Failed to fetch data/)
		);

		expect(
			screen.getByText(/Error loading resorts: Failed to fetch data/)
		).toBeDefined();
	});

	test('it should render the loading spinner while data is being fetched', async () => {
		vi.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({ ok: true, json: () => Promise.resolve(mockData) })
		);

		renderWithTheme(<Home />);

		expect(screen.getByText('Loading resorts...')).toBeDefined();

		await waitFor(() =>
			expect(screen.queryByText('Loading resorts...')).toBeNull()
		);
	});
});
