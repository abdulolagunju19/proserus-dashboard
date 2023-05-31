import { Flex, Heading, Link, Box, VStack } from '@chakra-ui/react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { PDFObject } from 'react-pdfobject'

import DashboardContainer from '@/components/DashboardContainer';

const DashboardDocuments = () => {
    return(
        <DashboardContainer>
            <Heading pb={2}>Documents</Heading>
            <VStack>
                <Box>
                <embed src="/FINAL-2021-VT_SmBusiness_v7.pdf" width="700" height="800"></embed> 
                </Box>
            </VStack>
            <Flex pt={3} justifyContent="center">
                <Link href="https://storyset.com/data">Data Illustrations by Storyset</Link>
            </Flex>
        </DashboardContainer>
    )
}

export default DashboardDocuments;
