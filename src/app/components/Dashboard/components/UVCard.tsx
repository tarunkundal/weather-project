import {
	Center,
	CircularProgress,
	CircularProgressLabel,
	Stack,
	Text,
} from '@chakra-ui/react';
import React from 'react';

const UVCard = () => {
	return (
		<Stack
			boxSize="30%"
			bg="teritory"
			p={2}
			rounded="lg"
			boxShadow="lg"
			h="200px"
			justifyContent="space-around"
		>
			<Text fontWeight="bold">UV index</Text>
			<Center>
				<CircularProgress size="100px" value={40} color="gold" my="auto">
					<CircularProgressLabel>40%</CircularProgressLabel>
				</CircularProgress>
			</Center>
		</Stack>
	);
};

export default UVCard;
