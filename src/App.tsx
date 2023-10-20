import { useEffect, useState } from 'react';
import allieClose from './assets/allie-close.png';
import allieOpen from './assets/allie-open.png';
import allicaLogo from './assets/AllicaBank.svg';
import './App.css';

function App() {
    const [isClose, setIsClose] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsClose((prevState => !prevState));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleClick = () => {
        const button = document.querySelector('[aria-label="Close Ask Allie"]') as HTMLButtonElement;
        button?.click();
    };

    return (
        <div>
            <nav>
                <img src={allicaLogo} alt="Allica Bank"/>
            </nav>
            <section>
                <div className="header" onClick={handleClick}>
                    {isClose ?
                        <img src={allieClose} className="logo" alt="Closed allicator"/> :
                        <img src={allieOpen} className="logo" alt="Open allicator"/>}
                    <h1>Ask Allie</h1>
                </div>
            </section>
        </div>
    );
}

export default App;
