import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../config';

function ToolInput({ tool }) {
    const [output, setOutput] = useState(null);
    const [input, setInput] = useState(null);
    const processInput = () => {
        axios.post(API_URL + tool.api, {
            input: input
        }).then((res) => {
            setOutput(res.data.output);
        });
    }
    const handleInput = (e) => {
        setInput(e.target.value);
    }

    useEffect(() => {
        setInput("");
        setOutput("");
    }, [tool]);

    return (
        <div>
            <h2 className='text-xl primary-text spacer-ly'>{tool.title}</h2>
            <p className='text-l'>Input text</p>
            <div className='spacer-my'>
                <textarea className='text-m spacer-m full' rows={5} onInput={handleInput} value={input} />
            </div>
            <div className='display center'><button className='accent' onClick={processInput}>{tool.action}</button></div>
            <div className='spacer-my'>
                <textarea readonly className='text-m spacer-m full' rows={5} value={output} />
            </div>
        </div>
    )
}

export default ToolInput
