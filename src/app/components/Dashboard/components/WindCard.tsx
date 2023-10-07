import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md';

const WindCard = () => {
	return (
		<Box boxSize="30%" h="200px" bg="secondary" p={2} rounded="lg" border="2px">
			<Text>Wind Status</Text>
			<Heading>
				5.85{' '}
				<Text as="span" fontSize="12px">
					KM/hr
				</Text>{' '}
			</Heading>
			<Flex alignItems="center">
				<Box bg="teritory" p={2} rounded="full">
					<MdLocationOn color="blue" />{' '}
				</Box>
				<Text ml={4}>Kundal, Reawri</Text>
			</Flex>
		</Box>
	);
};

export default WindCard;
