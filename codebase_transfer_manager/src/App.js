import React, {useState} from "react";
import logo from "./logo.png";
import "./App.css";


function App() {
    const [info, setInfo] = useState('');
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <code>Codebase Transfer Manager</code>
                </p>
                <button onClick={() => {
                    window.api.send('notify', 'Hello there');
                }}>
                    Notify
                </button>
                <button onClick={() => {
                    window.api.send('upload', '');
                }}>
                    Upload File
                </button>
                <form>
                    <input 
                    type="text" 
                    value={info} 
                    onChange= {e => {
                        setInfo(e.target.value)
                    } }
                    />
                    <button onClick={() => {
                        window.api.send('download', info);
                    }}>
                        Download
                    </button>
                </form>
                
            </header>
        </div>
    );
}

export default App;
