import React from 'react';
import { PhonebookSection } from '../Main/PhonebookSection';
import { SMain, SMainHeading } from '../Main';

export const App: React.FC = () => {
    return (
        <SMain>
            <SMainHeading>Homework 05</SMainHeading>
            <PhonebookSection />
        </SMain>
    );
};
