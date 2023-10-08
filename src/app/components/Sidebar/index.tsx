import { SearchIcon } from '@chakra-ui/icons';
import {
	Center,
	Flex,
	Heading,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
	Text,
} from '@chakra-ui/react';
import { AiOutlineAntCloud } from 'react-icons/ai';
import { BsFillCloudRainFill } from 'react-icons/bs';

const Sidebar = () => {
	return (
		<Stack
			borderRadius="lg"
			bg="teritory"
			py={5}
			px={4}
			w={{ base: '200px', md: '300px' }}
		>
			<Center>
				<Stack spacing={3}>
					<form>
						<InputGroup>
							<InputLeftElement>
								<SearchIcon />
							</InputLeftElement>
							<Input
								type="text"
								border="2px"
								// bg="secondary"
								placeholder="Search Places"
							/>
						</InputGroup>
					</form>
					<Image
						src="https://icons-for-free.com/iconfiles/png/512/sun+sunny+weather+icon-1320196635525068067.png"
						alt="image"
					/>
					<Stack ml={4}>
						<Heading>32 °C</Heading>
						<Text>
							Monday{' '}
							<Text as="span" color="gray.400">
								{' '}
								16:00
							</Text>
						</Text>
					</Stack>
					<hr />
					<Stack>
						<Flex alignItems="center">
							<AiOutlineAntCloud />
							<Text fontSize="sm" ml={4}>
								Mostly Cloudly
							</Text>
						</Flex>
						<Flex alignItems="center">
							<BsFillCloudRainFill />
							<Text fontSize="sm" ml={4}>
								Rain - 24%
							</Text>
						</Flex>
					</Stack>
					<Image
						rounded="2xl"
						src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
						alt="place img"
					></Image>
				</Stack>
			</Center>
		</Stack>
	);
};

export default Sidebar;
