import { SearchIcon } from '@chakra-ui/icons';
import {
	Center,
	Flex,
	Grid,
	Heading,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
	Switch,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineAntCloud } from 'react-icons/ai';
import { BsFillCloudRainFill } from 'react-icons/bs';
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
					<Heading fontWeight="semibold">8:30am</Heading>
					<Text
						fontSize={{ base: '14px', md: '18px' }}
						fontWeight="bold"
						color="blue.400"
					>
						Tuesday, 02 September 2023
					</Text>
				</Stack>
				<InputGroup w={{ base: '', md: '50%' }}>
					<InputLeftElement>
						<SearchIcon />
					</InputLeftElement>
					<Input border="2px" type="text" placeholder="Search Places" />
				</InputGroup>

				<Stack>
					<Flex alignItems="center">
						<Switch size="md" />
						°F
					</Flex>
				</Stack>
			</Flex>
			<Flex mx="auto" alignItems="center">
				<Heading>32!C</Heading>
				<Image
					boxSize={200}
					src="https://icons-for-free.com/iconfiles/png/512/sun+sunny+weather+icon-1320196635525068067.png"
					alt="image"
				/>
				<Stack ml={2} fontWeight="semibold">
					<Flex alignItems="center">
						<AiOutlineAntCloud size="25" color="gray" />
						<Text ml={4}>Mostly Cloudly</Text>
					</Flex>
					<Flex alignItems="center">
						<BsFillCloudRainFill color="skyblue" size="25" />
						<Text ml={4}>Rain - 24%</Text>
					</Flex>
				</Stack>
			</Flex>
			<Center>
				<Grid
					templateColumns={{ base: 'repeat(3,1fr)', md: 'repeat(7, 1fr)' }}
					gap={{ base: 2, md: 6 }}
				>
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
				</Grid>
			</Center>
		</Stack>
	);
};

export default Header;
