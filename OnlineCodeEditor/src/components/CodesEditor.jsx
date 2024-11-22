import Editor from '@monaco-editor/react'
import '../App.css'

const CodesEditor = ({language, code, onChange}) => {
    
    const handleEditorChange = (value) => {
        onChange(value)
    } 

    return (
        <div>
            <Editor
                width="80vh"
                height="50vh"
                theme='vs-dark'
                language={language}
                value={code}
                onChange={handleEditorChange}
            />
        </div>
    )
}

export default CodesEditor