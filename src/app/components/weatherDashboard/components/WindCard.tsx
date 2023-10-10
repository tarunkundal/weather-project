import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { BsWind } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

const WindCard = () => {
	return (
		<Stack
			h="200px"
			bg="teritory"
			p={2}
			rounded="lg"
			boxShadow="lg"
			justifyContent="space-around"
		>
			<Text fontWeight="bold">Wind Status</Text>
			<Flex justifyContent="space-around" alignItems="center">
				<Heading mx={2}>
					5.85{' '}
					<Text as="span" fontSize="12px">
						KM/hr
					</Text>{' '}
				</Heading>
				<BsWind size={80} color="blue" />
			</Flex>
			<Flex mx={2} alignItems="center">
				<Box bg="gold" p={2} rounded="full">
					<MdLocationOn color="blue" />{' '}
				</Box>
				<Text ml={2} fontSize="14px">
					Kundal, Reawri
				</Text>
			</Flex>
		</Stack>
	);
};

export default WindCard;
