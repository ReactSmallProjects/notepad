import React, { useState } from 'react';
import './Navbar.css';
import Text from './text';

function Navbar() {
    const [fontSize, setFontSize] = useState(29);

    const handleChange = (e) => {
        setFontSize(e.target.value);
    };

    return (
        <div className="bigdiv">
            <p className="head">Online Notepad</p>
            <ul className="Navbar">
                <li>File</li>
                <li>Edit</li>
                <li>Insert</li>
                <li>View</li>
                <li>Help</li>
            </ul>
            <div className='settingFont'>
                <p className="fontSize">font size:</p>
                <input type="number" value={fontSize} onChange={handleChange} />
            </div>
                <Text fontSize={fontSize}/>
        </div>
    );
}
export default Navbar;