import { dbConnect } from '@/utils/mongodb';
import { Heading, Text, Box } from '@chakra-ui/react';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import DashboardContainer from "@/components/DashboardContainer";

export default function Analytics({ analytics }) {

  const router = useRouter();

  const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
          router.push('/')
        }
  });

  return (
    <>
      {session &&
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
      }
    </>
  );
}

//fetch data from mongodb database
export async function getServerSideProps(req, res) {
  try {
    const client = await dbConnect();
    const database = client.db('sample_analytics');
    const analytics = await database
      .collection("customers")
      .find({})
      .sort({ birthdate: -1 })
      .limit(20)
      .toArray();

    client.close();

    return {
      props: {
        analytics: JSON.parse(JSON.stringify(analytics))
      }
    };
  } catch (error) {
    console.error('There was an error fetching the customer data', error);
  }
}