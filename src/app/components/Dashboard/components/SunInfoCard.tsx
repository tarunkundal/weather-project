import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const SunInfoCard = () => {
	return (
		<Stack
			bgColor="teritory"
			p={2}
			rounded="lg"
			h="200px"
			justifyContent="space-around"
			fontSize="14px"
			boxShadow="lg"
		>
			<Text fontSize="1rem" fontWeight="black">
				Sunrise and Sunset
			</Text>
			<Flex>
				<Box bg="gold" mx={2} rounded="full" alignItems="center" p={2}>
					<ArrowUpIcon />
				</Box>
				<Stack spacing={0}>
					<Text>5:58am</Text>
					<Text>-2m 38s</Text>
				</Stack>
			</Flex>
			<Flex>
				<Box bg="gold" mx={2} rounded="full" alignItems="center" p={2}>
					<ArrowDownIcon />
				</Box>
				<Stack spacing={0}>
					<Text>5:58am</Text>
					<Text>-2m 38s</Text>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default SunInfoCard;
