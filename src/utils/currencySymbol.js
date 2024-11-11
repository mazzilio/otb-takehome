export function getCurrencySymbol(currencyCode) {
	switch (currencyCode.toUpperCase()) {
		case 'GBP':
			return '£';
		case 'EUR':
			return '€';
		case 'USD':
			return '$';
		default:
			return ' '; // Default message for unsupported currencies
	}
}
