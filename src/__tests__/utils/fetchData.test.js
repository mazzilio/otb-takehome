import { fetchData } from '../../utils/fetchData';
import { beforeEach, afterEach, describe, expect, test, vi } from 'vitest';
import mockData from '../../__mocks__/mock-data.json';

beforeEach(() => {
	global.fetch = vi.fn();
});

afterEach(() => {
	vi.restoreAllMocks();
});

describe('fetchResortData', () => {
	test('should return data when the fetch is successful', async () => {
		global.fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockData,
		});

		const data = await fetchData();

		expect(data).toEqual(mockData);
		expect(global.fetch).toHaveBeenCalledOnce();
	});

	test('should throw an error if the fetch response is not ok', async () => {
		global.fetch.mockResolvedValueOnce({
			ok: false,
			statusText: 'Not Found',
		});

		await expect(fetchData()).rejects.toThrowError(
			'Failed to fetch resorts data'
		);
		expect(global.fetch).toHaveBeenCalledOnce();
	});

	test('should throw an error if there is a network error', async () => {
		global.fetch.mockRejectedValueOnce(new Error('Network error'));

		await expect(fetchData()).rejects.toThrowError('Network error');
		expect(global.fetch).toHaveBeenCalledOnce();
	});
});
