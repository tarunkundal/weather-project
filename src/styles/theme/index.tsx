import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: '#FFF2D8',
			},
		},
	},
	colors: {
		primary: '#F0C38E',
		secondary: '#EAD7BB',
		teritory: '#ECF8F9',
	},
	fonts: {
		heading: 'Axiforma, sans-serif',
		body: 'Inter UI, SF Pro Display,sans-serif',
	},
});

export default theme;
