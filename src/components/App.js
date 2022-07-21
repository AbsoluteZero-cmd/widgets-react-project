import React, { useState } from 'react';
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
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div className='ui container'>
            <button
                className='ui button'
                onClick={() => setShowDropdown(!showDropdown)}
            >
                Toggle dropdown
            </button>
            {showDropdown ? (
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                    labelText='Select a color'
                />
            ) : null}
        </div>
    );
};

export default App;
