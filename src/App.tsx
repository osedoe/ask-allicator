import { useEffect, useState } from 'react';
import allicaClose from './assets/allicator_closed.svg';
import allicaOpen from './assets/allicator_open.svg';
import './App.css';

function App() {
    const [isClose, setIsClose] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setIsClose((prevState => !prevState));
        }, 1000);
    }, []);

    return (
        <>
            <h1>Ask Allica</h1>
            <div>
                {isClose ?
                    <img src={allicaClose} className="logo" alt="Vite logo"/> :
                    <img src={allicaOpen} className="logo react" alt="React logo"/>}
            </div>
        </>
    );
}

export default App;
