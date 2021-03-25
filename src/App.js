import React from "react";
import Carousel from "./components/Carousel";
import "./Styles.css";
import styled from 'styled-components'
import picture from './images/mountains.jpg'
import picture1 from './images/mountains1.jpg'
import picture2 from './images/mountains2.jpg'
import picture3 from './images/mountains3.jpg'

const AppWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
width:100vw;
`

const App = () => {
    return (
        <AppWrapper>
            <Carousel infinite>
                <div src={picture} ></div>
                <div src={picture1} ></div>
                <div src={picture2} ></div>
                <div src={picture3} ></div>
                <div align="flex-start"
                    padding="4px 10px">
                    <h1>Hello</h1>
                </div>
            </Carousel>
        </AppWrapper>
    );
};

export default App;