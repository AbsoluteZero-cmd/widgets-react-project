import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';

const items = [
    {
        title: 'What is react?',
        content: 'React is a front and javascript framework',
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite framework among engineers',
    },
    {
        title: 'How do you use React?',
        content: 'Bla bla',
    },
];

const options = [
    {
        label: 'The color red',
        value: 'red',
    },
    {
        label: 'The color green',
        value: 'green',
    },
    {
        label: 'The shade of blue',
        value: 'blue',
    },
];

const App = () => {
    return (
        <div className='ui container'>
            <Translate />
        </div>
    );
};

export default App;
