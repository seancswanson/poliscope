export const getPartyAccentColorBorderShadow = (party: string) => {
	switch (party) {
		case 'Democratic':
			return 'border-blue-300 shadow-blue-400';
		case 'Republican':
			return 'border-red-300 shadow-red-400';
		case 'Green':
			return 'border-green-300 shadow-green-400';
		case 'Libertarian':
			return 'border-yellow-300 shadow-yellow-400';
		case 'Independent':
			return 'border-gray-300 shadow-gray-300';
		default:
	}
};

export const getPartyAccentColorBorder = (party: string) => {
	switch (party) {
		case 'Democratic':
			return 'border-r-blue-400';
		case 'Republican':
			return 'border-r-red-400';
		case 'Green':
			return 'border-r-green-400';
		case 'Libertarian':
			return 'border-r-yellow-400';
		case 'Independent':
			return 'border-r-gray-400';
		default:
	}
};
