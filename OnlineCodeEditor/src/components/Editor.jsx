import { useState } from 'react'
import { initialCode } from '../utils/initializeCode'
import React from 'react'
import Dropdown from './Dropdown'
import CodesEditor from './CodesEditor.jsx'
import { CopyButton } from './Buttons.jsx'
import ResetButton from './Buttons.jsx'
import '../App.css'


function HandleEditor () {

    const [language, setLanguage] = useState('javascript')
    const [code, setCode] = useState(initialCode[language])
    const [copied, setCopied] = useState(false)
    const savedCode = React.useRef({ ...initialCode})
    
    const handleChangeLang = (language) => {
        setLanguage(language)
        setCode(savedCode.current[language])
    }

    const handleChangeCode = (new_code) => {
        setCode(new_code)
        savedCode.current[language] = new_code
    }

    const resetCode = () => {
        setCode(initialCode[language]);
        savedCode.current[language] = initialCode[language];
    }

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    }

    return (
        <div>
            <div className='headerEditor'>
                <Dropdown selectedLang={language} changeLang={handleChangeLang} /> 
                <ResetButton onReset={resetCode} />
            </div>
            <div><CodesEditor language={language} code={code} onChange={handleChangeCode} /></div>
            <div className='footerEditor'>
                <div className='output'>Output</div>
                <CopyButton onCopy={copyCode} copied={copied}/>
            </div>
            <div className='footer'>
                Click copy to copy your code
            </div>
        </div>
    )
}

export default HandleEditor