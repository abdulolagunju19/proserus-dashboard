import clientPromise from "@/util/mongodb";
import { Heading, Text, Box } from '@chakra-ui/react';

import DashboardContainer from "@/components/DashboardContainer";

export default function Analytics({ analytics }) {
  // console.log(analytics)
    return (
      <DashboardContainer>
        <Heading pb={2}>Customer Accounts</Heading>
        <div>
          {analytics.map((analytic, index) => (
            <Box key={index} p={5} m={3} borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Heading pb={2}>{analytic.name}</Heading>
              <Heading size="h3">Username: {analytic.username}</Heading>
              <Heading pb={2} size="h3">Email: {analytic.email}</Heading>
              <Text>Address: {analytic.address}</Text>
            </Box>
          ))}
        </div>
      </DashboardContainer>
    );
  }
  export async function getServerSideProps(req, res) {
    const client = await clientPromise;
    const database = client.db('sample_analytics');
    const analytics = await database
      .collection("customers")
      .find({})
      .sort({ birthdate: -1 })
      .limit(20)
      .toArray();
    return {
      props: {
        analytics: JSON.parse(JSON.stringify(analytics))
      }
    };
  }