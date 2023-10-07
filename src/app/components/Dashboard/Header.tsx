import { Flex, Stack, Switch, Text } from '@chakra-ui/react';
import React from 'react';
import { TbCloudRain } from 'react-icons/tb';

const Header = () => {
	return (
		<Stack>
			<Flex justifyContent="space-between" alignItems="center">
				<Stack>
					<Text>
						Today{' '}
						<Text as={'span'} color="blue.400" fontWeight="semibold">
							Week
						</Text>
					</Text>
				</Stack>
				<Stack>
					<Flex alignItems="center">
						<Switch size="md" />
						°F
					</Flex>
				</Stack>
			</Flex>
			<Stack
				fontWeight="semibold"
				fontSize="sm"
				mt={8}
				h="120px"
				w="110px"
				alignItems="center"
				bg="teritory"
				rounded="md"
			>
				<Text fontSize="md">Monday</Text>
				<TbCloudRain size={22} color="red" />
				<Text>Max 32</Text>
				<Text color="gray.400">Min 22</Text>
			</Stack>
		</Stack>
	);
};

export default Header;
