import { Stack, Flex, Heading, Progress, Text } from '@chakra-ui/react';
import React from 'react';

const AirQualCard = () => {
	return (
		<Stack
			bg="teritory"
			p={2}
			rounded="lg"
			boxShadow="lg"
			h="200px"
			justifyContent="space-around"
		>
			<Text fontWeight="bold">Air Quality</Text>
			<Flex justifyContent="space-around" alignItems="center">
				<Heading>128 </Heading>
				<Progress
					colorScheme="linkedin"
					value={128}
					rounded="2xl"
					width="50%"
				/>
			</Flex>
			<Text fontWeight="bold">
				Status :{' '}
				<Text as="span" color="blue">
					Good
				</Text>{' '}
			</Text>
		</Stack>
	);
};

export default AirQualCard;
