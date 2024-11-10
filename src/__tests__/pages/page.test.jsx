import Home from '../../app/page';
import { afterEach, describe, expect, test } from 'vitest';
import { cleanup } from '@testing-library/react';
import { render } from '@testing-library/react';

describe('Homepage', () => {
	afterEach(() => {
		cleanup();
	});

	test('it should load the homepage', async () => {
		const result = render(<Home />);
		const hello = result.getByText('Hello!');
		expect(hello).toBeDefined();
	});
});
