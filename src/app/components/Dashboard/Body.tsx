import { Grid, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import UVCard from './components/UVCard';
import WindCard from './components/WindCard';
import SunInfoCard from './components/SunInfoCard';
import Humidity from './components/HumidityCard';
import Visibility from './components/VisibilityCard';
import AirQualCard from './components/AirQualCard';

const Body = () => {
	return (
		<Stack my={4}>
			<Heading>Today Highlight</Heading>;
			<Grid
				templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
				gap={{ base: 2, md: 6 }}
			>
				<UVCard />
				<WindCard />
				<SunInfoCard />
				<Humidity />
				<Visibility />
				<AirQualCard />
			</Grid>
		</Stack>
	);
};

export default Body;
