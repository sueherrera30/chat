import React, { useState } from 'react';
import './Input.less'
import { TfiClip } from "react-icons/tfi";
import { BiImageAdd } from "react-icons/bi";


// interface SearchProps {
//   messageWitten: string;
// }

const Input = () => {
    const [messageWitten, setMessageWitten] = useState('')
  return (
    <div className="input" >
        <input
            type="text"
            value={messageWitten}
            onChange={(e) => setMessageWitten(e.target.value)}
            placeholder='write a text'
        />
        <div className='input--send-section'>
            <div className='input--send-section-icons'>
                <TfiClip />
                <BiImageAdd />
            </div>
            <button>send</button>
        </div>
    </div>
  );
};

export default Input;
