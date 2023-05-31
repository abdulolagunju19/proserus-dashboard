import React from 'react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Flex, Box, Heading } from '@chakra-ui/react';

import DashboardContainer from '@/components/DashboardContainer';

const DashboardProjects = () => {
    const events1 = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    return(
        <DashboardContainer>
            <Heading mb={3}>Projects</Heading>
            <Flex flexDir="row">
                <Card title="Prototype" style={{ width: '25rem', marginBottom: '2em' }}>
                    <p style={{lineHeight: '1.5'}}>Our services are designed to support you in your local economy. Whether you are a retailer, service provider, a freelancer, gig-worker, artisan, small manufacturer, technopreneur, seniorpreneur or new Canadian entrepreneur we are here to serve.</p>
                </Card>
                <Box className="card">
                    <Timeline value={events1} opposite={(item) => item.status} content={(item) => <small className="p-text-secondary">{item.date}</small>} />
                </Box>
            </Flex>
            <style jsx>{`             
                .timeline-demo .custom-marker {
                    display: flex;
                    width: 2rem;
                    height: 2rem;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    border-radius: 50%;
                    z-index: 1;
                }
                
                .timeline-demo .p-timeline-event-content,
                .timeline-demo .p-timeline-event-opposite {
                    line-height: 1;
                }
                
                @media screen and (max-width: 960px) {
                    .timeline-demo .customized-timeline .p-timeline-event:nth-child(even) {
                        flex-direction: row !important;
                    }
                    .timeline-demo .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {
                        text-align: left !important;
                    }
                    .timeline-demo .customized-timeline .p-timeline-event-opposite {
                        flex: 0;
                    }
                    .timeline-demo .customized-timeline .p-card {
                        margin-top: 1rem;
                    }
                }
                
                `}
            </style>
        </DashboardContainer>
    )
}

export default DashboardProjects;
