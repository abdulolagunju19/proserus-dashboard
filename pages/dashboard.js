import { Flex, Heading, Button } from '@chakra-ui/react';

import DashboardContainer from '@/components/DashboardContainer';
import Simple from '@/components/Navbar';
import NextLink from 'next/link'

const DashboardIndex = () => {
    return(
        <DashboardContainer>
            <Flex
                flexDir="column"
                overflow="auto"
                maxH="100vh"
                maxW="150vh"
            >
                <Heading>Financial Report</Heading>
            </Flex>
        </DashboardContainer>
    )
}

export default DashboardIndex;
