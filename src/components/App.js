import React from 'react';
import Accordion from './Accordion';

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
            <h1>Widgets app</h1>
            <Accordion items={items} />
        </div>
    );
};

export default App;
