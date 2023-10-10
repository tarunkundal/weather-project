import { Stack, Text, Flex, Heading, Progress } from '@chakra-ui/react';

const Humidity = () => {
	return (
		<Stack
			bg="teritory"
			p={2}
			rounded="lg"
			boxShadow="lg"
			h="200px"
			justifyContent="space-around"
		>
			<Text fontWeight="bold">Humidity</Text>
			<Flex justifyContent="space-around" alignItems="center">
				<Heading>12 </Heading>
				<Progress colorScheme="linkedin" value={42} rounded="2xl" width="50%" />
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

export default Humidity;
