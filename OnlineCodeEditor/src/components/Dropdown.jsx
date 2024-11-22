import React from 'react'
import '../App.css'


const Dropdown = ({selectedLang, changeLang}) => {

    return (
    <select
        value={selectedLang}
        onChange={(e) => changeLang(e.target.value)}
        className='dropdown'
    >
        <option value="javascript">Javascript</option>
        <option value="java">Java</option>
    </select>
    )
}


export default Dropdown