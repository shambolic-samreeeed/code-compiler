import React from 'react';
import Editor from '@monaco-editor/react';
import { useState } from 'react';

const CodeEditor = () => {

    const [value, setValue] = useState()

  return (
    <div className='dark:bg-black'>
      <Editor
        height='50vh'
        defaultLanguage='javascript'
        defaultValue='// your code here'
        options={{ minimap: { enabled: false } }}
        theme='vs-dark'
        value = {value}
        onChange={
            (value)=>setValue(value)
        }

        onMount={(editor, monaco) => {
          monaco.editor.defineTheme('transparentTheme', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: { 'editor.background': '#00000000' },
          });
          monaco.editor.setTheme('transparentTheme');
        }}
      />
    </div>
  );
};

export default CodeEditor;
