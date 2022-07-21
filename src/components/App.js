import React from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';

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

const App = () => {
    return (
        <div className='ui container'>
            <Dropdown />
        </div>
    );
};

export default App;
