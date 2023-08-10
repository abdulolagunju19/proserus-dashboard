import { Flex, Heading, Box, Text } from '@chakra-ui/react';

import DashboardContainer from '@/components/DashboardContainer';

const DashboardReports = ({ data }) => {
    console.log(data)
    return(
        <DashboardContainer>
            <Heading pb={2}>Financial Report</Heading>
            <div>
                {data.map((datum, index) => (
                <Box key={index} p={5} m={3} borderWidth='1px' borderRadius='lg' overflow='hidden'>
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

//fetch data from financial modeling prep api, if there is no data, return to home page
export async function getServerSideProps(){
    try {
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
    } catch (error) {
        console.error('There is an error connecting the financial model api: ', error)
    }
}

export default DashboardReports;
