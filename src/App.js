import React from "react";
import Carousel from "./components/Carousel";
import "./Styles.css";
import image from './images/mountains.jpg'


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
            <Carousel
                slideHeigth={600}
                slideWidth={1000}
            >
                <img height="100%" width="100%" src={image} alt="someImage" />
                <h2>Text content</h2>
                <div>
                    <h1>awdwa</h1>
                    <p>awdwa</p>
                    <div>awdwa</div>
                </div>
                {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/o_Ay_iDRAbc" title="YouTube video player" frameBorder="0" allow="accelerometer; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            </Carousel>
        </div>
    );
};

export default App;