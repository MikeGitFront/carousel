import React from "react";
import Carousel from "./components/Carousel";
import "./Styles.css";
import image from './images/mountains.jpg'
import styled from 'styled-components'

const AppWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
width:100vw;

@media(max-width:1000px) {
    background-color:black;
}
`

const App = () => {
    return (
        <AppWrapper>
            <Carousel>

            </Carousel>
        </AppWrapper>
    );
};

export default App;