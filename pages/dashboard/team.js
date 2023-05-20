import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';
import Container from '@/components/Container';

const DashboardTeam = () => {
    return(
        <Container>
            <Flex 
                flexDir="column"
                overflow="auto"
            >
                <Heading> The Team </Heading>
                <Flex flexDir={["column","row"]} justifyContent="space-between" p={5}>
                    <Flex flexDir="column" alignItems="center" p={1}>
                        <Avatar size='2xl' src='https://bit.ly/kent-c-dodds'my={2}/>
                        <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                    </Flex>
                    <Flex flexDir="column" alignItems="center" p={1}>
                        <Avatar size='2xl' src='https://bit.ly/kent-c-dodds'my={2}/>
                        <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                    </Flex>
                    <Flex flexDir="column" alignItems="center" p={1}>
                        <Avatar size='2xl' src='https://bit.ly/kent-c-dodds'my={2}/>
                        <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                    </Flex>
                </Flex>
                <Flex flexDir={["column","row"]} justifyContent="space-between" p={5}>
                    <Flex flexDir="column" alignItems="center" p={1}>
                        <Avatar size='2xl' src='https://bit.ly/kent-c-dodds'my={2}/>
                        <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                    </Flex>
                    <Flex flexDir="column" alignItems="center" p={1}>
                        <Avatar size='2xl' src='https://bit.ly/kent-c-dodds'my={2}/>
                        <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                    </Flex>
                    <Flex flexDir="column" alignItems="center" p={1}>
                        <Avatar size='2xl' src='https://bit.ly/kent-c-dodds'my={2}/>
                        <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    )
}

export default DashboardTeam;
