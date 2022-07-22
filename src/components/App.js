import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';

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

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} />;
    }
};
const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />;
    }
};
const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown options={options} labelText='some label' />;
    }
};

const showTranslate = () => {
    if (window.location.pathname == '/translate') {
        return <Translate />;
    }
};

const App = () => {
    return (
        <div className='ui container'>
            {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()}
        </div>
    );
};

export default App;
