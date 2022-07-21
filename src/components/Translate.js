import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Africaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },
    {
        label: 'Dutch',
        value: 'nl',
    },
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label className='lable'>Enter text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                labelText='Select a language'
            />
            <br />
            <h3 className='ui header'>Output</h3>
            <Convert language={language} text={text} />
        </div>
    );
};

export default Translate;
