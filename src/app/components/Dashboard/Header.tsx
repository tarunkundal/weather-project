import { Center, Flex, Grid, Stack, Switch, Text } from '@chakra-ui/react';
import React from 'react';
import { TbCloudRain } from 'react-icons/tb';

const data = [
	{ day: 'Monday', max: '32', min: '28' },
	{ day: 'Tuesday', max: '32', min: '28' },
	{ day: 'Wednesday', max: '32', min: '28' },
	{ day: 'Thrusday', max: '32', min: '28' },
	{ day: 'Friday', max: '32', min: '28' },
	{ day: 'Saturday', max: '32', min: '28' },
	{ day: 'Sunday', max: '32', min: '28' },
];

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
			<Center>
				<Grid
					templateColumns={{ base: 'repeat(3,1fr)', md: 'repeat(7, 1fr)' }}
					gap={{ base: 2, md: 6 }}
				>
					{/* <GridItem w="100%"> */}
					{data.map((data) => {
						return (
							<Stack
								fontWeight="semibold"
								fontSize="sm"
								m={2}
								display="inline-grid"
								h="120px"
								w="110px"
								alignItems="center"
								bg="teritory"
								key={data.day}
								rounded="md"
								p={2}
							>
								<Text fontSize="md">{data.day}</Text>
								<TbCloudRain size={22} color="red" />
								<Text>Max {data.max}</Text>
								<Text color="gray.400">Min {data.min}</Text>
							</Stack>
						);
					})}
					{/* </GridItem> */}
				</Grid>
			</Center>
		</Stack>
	);
};

export default Header;
