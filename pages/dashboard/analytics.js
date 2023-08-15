import useSWR from 'swr';

import { Heading, Text, Box } from '@chakra-ui/react';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import DashboardContainer from "@/components/DashboardContainer";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

// Function to fetch and display customer analytics using useSWR hook
function GetAnalytics() {

  const { data, error } = useSWR('/api/customers', fetcher);

  const analytics = data;

  // Handle errors during data fetch
  if (error){
    return <Text p={5}>Failed to load</Text>
  } 

  // Show loading message while waiting for data
  if (!analytics){
    return <Text p={5}>Loading Customer Records...</Text>
  } 

  // Display customer analytics data
  return (
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
  )
}

export default function Analytics() {

  const router = useRouter();

  // If user is not signed in, redirect back to home page
  const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
          router.push('/')
        }
  });

  // Do not show data unless session is not falsy
  return (
    <>
      {session &&
        <DashboardContainer>
          <Heading pb={2}>Customer Accounts</Heading>
            <GetAnalytics />
        </DashboardContainer>
      }
    </>
  );
}
