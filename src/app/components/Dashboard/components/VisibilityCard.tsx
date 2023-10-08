import { Stack, Flex, Heading, Progress, Text } from '@chakra-ui/react';
import React from 'react';

const Visibility = () => {
	return (
		<Stack
			bg="teritory"
			p={2}
			rounded="lg"
			boxShadow="lg"
			h="200px"
			justifyContent="space-around"
		>
			<Text fontWeight="bold">Visibility</Text>
			<Flex justifyContent="space-around" alignItems="center">
				<Heading>
					8.6{' '}
					<Text as="span" color="gray.400" fontSize="12px">
						km/h
					</Text>{' '}
				</Heading>
				<Progress colorScheme="yellow" value={42} rounded="2xl" width="50%" />
			</Flex>
			<Text fontWeight="bold">
				Status :{' '}
				<Text as="span" color="gold">
					Good
				</Text>{' '}
			</Text>
		</Stack>
	);
};

export default Visibility;
