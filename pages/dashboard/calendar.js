import React, { useState, useEffect } from 'react';

import { Flex, Heading } from '@chakra-ui/react';
import Calendar from 'react-calendar';
import styled from 'styled-components';

import DashboardContainer from '@/components/DashboardContainer';

const DashboardCalendar = () => {
    const [value, onChange] = useState(false);
    useEffect(() => {
        onChange(new Date());
    }, []);

    const CalendarContainer = styled.div`
    /* ~~~ container styles ~~~ */
    min-width: 800px;
    margin: auto;
    margin-top: 20px;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 3px;
    /* ~~~ navigation styles ~~~ */
    .react-calendar__navigation {
        display: flex;
        .react-calendar__navigation__label {
        font-weight: bold;
        font-size: 1.575em;
        }
        .react-calendar__navigation__arrow {
        flex-grow: 0.333;
        }
    }
    /* ~~~ label styles ~~~ */
    .react-calendar__month-view__weekdays {
        text-align: center;
        font-size: 1.2em;
        font-weight:600;
        color: #000000;
        
    }
    /* ~~~ button styles ~~~ */
    button {
        margin: 3px;
        background-color: #322659;
        border: 0;
        border-radius: 3px;
        color: white;
        padding: 5px 0;
        &:hover {
        background-color: #322659;
        }
        &:active {
        background-color: #a5c1a5;
        }
    }
    /* ~~~ day grid styles ~~~ */
    .react-calendar__month-view__days {
        display: grid !important;
        grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 
        
        .react-calendar__tile {
        max-width: initial !important;
        }
        .react-calendar__tile--range {
        box-shadow: 0 0 6px 2px black;
        }
    }
    /* ~~~ neighboring month & weekend styles ~~~ */
    .react-calendar__month-view__days__day--neighboringMonth {
        opacity: 0.9;
    }
    .react-calendar__month-view__days__day--weekend {
        color: #dfdfdf;
    }
    /* ~~~ other view styles ~~~ */
    .react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades {
        display: grid !important;
        grid-template-columns: 20% 20% 20% 20% 20%;
        &.react-calendar__year-view__months {
        grid-template-columns: 33.3% 33.3% 33.3%;
        }
        
        .react-calendar__tile {
        max-width: initial !important;
        }
    }
    `;

    return(
        <DashboardContainer>
            <Heading pb={5}>Calendar</Heading>
            <Flex justifyContent="center">
                <CalendarContainer>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
                </CalendarContainer>
            </Flex>
        </DashboardContainer>
    )
}

export default DashboardCalendar;
