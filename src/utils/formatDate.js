export function formatDate(dateString) {
	const date = new Date(dateString);

	const day = date.getUTCDate();

	const getOrdinalSuffix = (day) => {
		if (day > 3 && day < 21) return 'th';
		switch (day % 10) {
			case 1:
				return 'st';
			case 2:
				return 'nd';
			case 3:
				return 'rd';
			default:
				return 'th';
		}
	};

	const year = date.getUTCFullYear();
	const month = date.toLocaleString('en-GB', { month: 'long' });

	return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
}
