import { Stack } from '@chakra-ui/react';
import React from 'react';
import Header from './Header';
import Body from './Body';

const Dashboard = () => {
	return (
		<Stack w="100vw" ml={2}>
			<Header />
			<Body />
		</Stack>
	);
};

export default Dashboard;
