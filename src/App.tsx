import { Flex } from '@chakra-ui/react';
import Dashboard from './app/components/weatherDashboard';

const App = () => {
	return (
		<Flex mx="2%" my="3%" borderRadius="lg">
			<Dashboard />
		</Flex>
	);
};
export default App;
