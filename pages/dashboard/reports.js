import { Flex, Heading, Box, Text } from '@chakra-ui/react';

import DashboardContainer from '@/components/DashboardContainer';
import Simple from '@/components/Navbar';
import NextLink from 'next/link'

const DashboardReports = ( { data } ) => {
    console.log(data)
    return(
        <DashboardContainer>
            <Heading pb={2}>Financial Report</Heading>
            <div>
                {data.map((datum) => (
                <Box p={5} m={3} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Heading pb={2}>{datum.symbol}</Heading>
                    <Heading size="h3">Calendar Year: {datum.calendarYear}</Heading>
                    <Text>Revenue: ${datum.revenue}</Text>
                    <Text>Operating Expenses: ${datum.operatingExpenses}</Text>
                </Box>
                ))}
            </div>
        </DashboardContainer>
    )
}

export async function getServerSideProps(){
    const res = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=${process.env.FINANCIAL_MODELING_PREP_KEY}`);
    const data = await res.json();

    if (!data) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
    }

    return{
        props:{
            data
        }
    }
}

export default DashboardReports;
