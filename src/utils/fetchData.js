export const fetchData = async () => {
	try {
		const response = await fetch(
			'https://static.onthebeach.co.uk/fe-code-test/data.json'
		);
		if (!response.ok) {
			throw new Error('Failed to fetch resorts data');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};
