import { Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import UVCard from './components/UVCard';
import WindCard from './components/WindCard';
import SunInfoCard from './components/SunInfoCard';

const Body = () => {
	return (
		<Stack my={4}>
			<Heading>Today Highlight</Heading>;
			<Flex justifyContent="space-around">
				<UVCard />
				<WindCard />
				<SunInfoCard />
			</Flex>
		</Stack>
	);
};

export default Body;
