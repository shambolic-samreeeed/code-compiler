import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  return (
    <div className='dark:bg-black'>
      <Editor
        height='90vh'
        defaultLanguage='javascript'
        defaultValue='// your code here'
        options={{ minimap: { enabled: false } }}
        theme='vs-dark'
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
