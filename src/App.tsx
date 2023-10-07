import { Flex } from '@chakra-ui/react';
import Sidebar from './app/components/Sidebar';
import Dashboard from './app/components/Dashboard';

const App = () => {
	return (
		<Flex mx="2%" my="3%" borderRadius="lg">
			<Sidebar />
			<Dashboard />
		</Flex>
	);
};
export default App;
