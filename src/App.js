import React from "react";
import Carousel from "./components/Carousel";
import "./Styles.css";


const styles = {
    app: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
    }
}

const App = () => {
    return (
        <div className="App" style={styles.app}>
            <Carousel />
        </div>
    );
};

export default App;