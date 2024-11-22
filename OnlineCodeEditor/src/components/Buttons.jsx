import '../App.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';


export const CopyButton = ({onCopy, copied}) => {
    return (
        <div className='copy-button'>
            <button onClick={onCopy} className='copy-button'>
                {copied ? "Copied" : "Copy"}
            </button>
        </div>
    )
}

const ResetButton = ({onReset}) => {
    return (
        <div>
            <button onClick={onReset} className="reset-button">
            <FontAwesomeIcon icon={faRotateLeft} style={{ marginRight: '5px' }} />
             Reset to Initial Code
            </button>
        </div>
    )
}

export default ResetButton
