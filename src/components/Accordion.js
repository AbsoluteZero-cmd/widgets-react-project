import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        // console.log('Clicked', index);
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={index}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return (
        <div>
            <div className='ui styled accordion'>{renderedItems}</div>
        </div>
    );
};

export default Accordion;
