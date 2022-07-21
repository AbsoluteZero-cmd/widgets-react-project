import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term,
                    },
                }
            );

            setResults(data.query.search);
        };

        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 500);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [term]);

    const onSearchChange = (term) => {
        setTerm(term);
    };

    const renderedResults = results.map((result, index) => {
        return (
            <div className='item' key={index}>
                <div className='right floated content'>
                    <a
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className='ui button'
                        target='_blank'
                    >
                        Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    <span
                        dangerouslySetInnerHTML={{ __html: result.snippet }}
                    ></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <form className='ui form'>
                <div className='field'>
                    <label>Enter search term</label>
                    <input
                        className='input'
                        type='text'
                        value={term}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
            </form>
            <div className='ui list'>{renderedResults}</div>
        </div>
    );
};

export default Search;
