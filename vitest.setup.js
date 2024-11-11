import { vitest, beforeEach } from 'vitest';

beforeEach(() => {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: vitest.fn().mockImplementation((query) => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: vitest.fn(), // Deprecated
			removeListener: vitest.fn(), // Deprecated
			addEventListener: vitest.fn(),
			removeEventListener: vitest.fn(),
			dispatchEvent: vitest.fn(),
		})),
	});
});

// JSDOM has had issues with parsing CSS Stylesheets, this does not affect the quality of the component
// testing, but if more time was available - I would've addressed this error to ensure we can also test
// the classes, if required and discussed together by the team in 3As style.
const originalConsoleError = console.error;
console.error = function (...data) {
	if (
		typeof data[0]?.toString === 'function' &&
		data[0].toString().includes('Error: Could not parse CSS stylesheet')
	)
		return;
	originalConsoleError(...data);
};
