import { Flex, Heading, Link } from '@chakra-ui/react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import DashboardContainer from '@/components/DashboardContainer';

const DashboardDocuments = () => {
    return(
        <DashboardContainer>
            <Heading>Documents</Heading>
            <br/>
            <div>
                <iframe src="https://app.powerbi.com/view?r=eyJrIjoiYjIzZThhZDgtOTMyMy00Mzc5LTk3ZTItZjU1ZjFmYmE3MDk3IiwidCI6IjYwMWNmNGMxLWJiNWYtNDBjNi04ODE2LWFlZjQyNDJmZTJhMCJ9" width="600" height="380" ></iframe>
            </div>
            <Flex>
                <Link href="https://storyset.com/data">Data Illustrations by Storyset</Link>
            </Flex>
        </DashboardContainer>
    )
}

export default DashboardDocuments;
