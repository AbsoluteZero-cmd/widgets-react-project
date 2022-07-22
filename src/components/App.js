import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

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
    return (
        <div className='ui container'>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    options={options}
                    labelText='some label'
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    );
};

export default App;
