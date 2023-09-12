import React, { useEffect, useState } from 'react'
import "./style.scss"
import PageWrapper from '../../hoc';
import Editor from "@monaco-editor/react";

const Home = () => {
  const roles = ["Frontend Developer", "Backend Developer", "Full stack Developer",];
  const [currentRole, setCurrentRole] = useState(roles[0])

  useEffect(() => {
    setTimeout(() => {
      if (currentRole?.length) {
        setCurrentRole((role) => role.slice(0, -1));
      }
    }, 100)
  }, [currentRole])
  const rTabs = (str) => str.trim().replace(/^ {4}/gm, "");

  const code = rTabs(`
    // A sample react code snippets.
    
    import React, { useState } from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    import examples from "./examples";
    
    function App() {
      const [theme, setTheme] = useState("light");
      const [language, setLanguage] = useState("javascript");
      const [isEditorReady, setIsEditorReady] = useState(false);
    
      function handleEditorDidMount() {
        setIsEditorReady(true);
      }
    
      function toggleTheme() {
        setTheme(theme === "light" ? "vs-dark" : "light");
      }
    
      function toggleLanguage() {
        setLanguage(language === "javascript" ? "python" : "javascript");
      }
    
      return (
        <>
          <button onClick={toggleTheme} disabled={!isEditorReady}>
            Toggle theme
          </button>
          <button onClick={toggleLanguage} disabled={!isEditorReady}>
            Toggle language
          </button>
    
          <Editor
            height="90vh" // By default, it fully fits with its parent
            theme={theme}
            language={language}
            value={examples[language]}
            editorDidMount={handleEditorDidMount}
            loading={"Loading..."}
          />
        </>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);  
  `)

  return (
    <div className='home'>
      <div className='inner-container'>
        <div className='left-pane'>
          <div>
            <div className='phrase'>Hi all, I am</div>
            <div className='title'>Karthik Balaji</div>
            <div className="typewriter">
              <div className="text">
                <div className="wrapper">
                  {roles?.map((role) => <p key={role}>{role}</p>)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right-pane'>
          <Editor
            height="500px"
            theme={"vs-dark"}
            language='javascript'
            value={code}
          />
        </div>
      </div>
    </div>
  )
}

export default PageWrapper(Home);