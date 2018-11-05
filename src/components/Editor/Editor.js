import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "\
public class Tester {\n\
  public static void main(String[] args) {\n\
    String stmt = \"JavaChamp is here to help you\";\n\
    for (String token : stmt.split(\"//s\")) {\n\
      System.out.print(token + \" \");\n\
    }\n\
  }\n\
}"
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      readOnly: true,
      minimap: {
        enabled: false
      },
      scrollbar: {
        // Subtle shadows to the left & top. Defaults to true.
        useShadows: false,
        // Render vertical arrows. Defaults to false.
        verticalHasArrows: true,
        // Render horizontal arrows. Defaults to false.
        horizontalHasArrows: true,
        // Render vertical scrollbar.
        // Accepted values: 'auto', 'visible', 'hidden'.
        // Defaults to 'auto'
        vertical: 'hidden',
        // Render horizontal scrollbar.
        // Accepted values: 'auto', 'visible', 'hidden'.
        // Defaults to 'auto'
        horizontal: 'hidden',
        verticalScrollbarSize: 17,
        horizontalScrollbarSize: 17,
        arrowSize: 30
      }
    };
    return (
      <MonacoEditor
        // width="800"
        height="150"
        language="java"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={()=>this.onChange}
        editorDidMount={()=>this.editorDidMount}
      />
    );
  }
}

export default Editor;
