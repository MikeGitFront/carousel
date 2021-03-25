import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const ButtonLeft = styled.button`
    position:absolute;
    background:transparent;
    outline:none;
    border:none;
    left:30px;
    top:50%;
    font-size:34px;
    cursor:pointer;
    transition:0.5s linear;

    &:hover{
        color:red;
    }
`

const ButtonRight = styled.button`
    position:absolute;
    background:transparent;
    outline:none;
    border:none;
    right:30px;
    top:50%;
    font-size:34px;
    cursor:pointer;
    transition:0.5s linear;

    &:hover{
        color:red;
    }
`
const Wrapper = styled.div`
    background-color:blue;
    width:100vw;
    height:100vh;
    position:relative;
    overflow:hidden;
`

const Container = styled.div`
    display:flex;
    transform:translate(${props => props.step}%);
    transition:${props => props.transition}s all ease;
`

const Item = styled.div`
    background:url('${props => props.src}');
    background-position:center;
    background-size:cover;
    width:100%;
    min-width:100vw;
    height:100%;
    min-height:100vh;
    display:${props => props.display || 'flex'};
    justify-content:${props => props.justify || 'center'};
    align-items:${props => props.align || 'center'};
    background-color:${props => props.bgcolor || 'white'};
    padding:${props => props.padding || '4px'};
`

const Carousel = ({ children, infinite }) => {
    const [currentPosition, setCurrentPosition] = useState(0)
    const [transition, setTransition] = useState(0.6)
    const container = useRef()
    const [newChildren, setNewChildren] = useState(children)

    useEffect(() => {
        if (infinite) {
            const fakeFirstChild = container.current.children[0].cloneNode(true)
            const fakeLastChild = container.current.children[container.current.children.length - 1].cloneNode(true)
            container.current.insertBefore(fakeLastChild, container.current.children[0])
            container.current.append(fakeFirstChild)

            setCurrentPosition(-100)
            setTransition(0)
        }
    }, [])

    const rightMoveHandler = () => {
        setTransition(0.6)
        if (currentPosition > -(container.current.children.length - 1) * 100) {
            setCurrentPosition(prev => prev - translateStep)

            if (currentPosition === -(container.current.children.length - 2) * 100 && infinite) {
                setTimeout(() => {
                    setCurrentPosition(-100)
                    setTransition(0)
                }, 600)
            }
        }
        else {
            return
        }
    }
    const leftMoveHandler = () => {
        setTransition(0.6)
        if (currentPosition < 0) {
            setCurrentPosition(prev => prev + translateStep)

            if (currentPosition === -100 && infinite) {
                console.log('da')
                setTimeout(() => {
                    setCurrentPosition(-(container.current.children.length - 2) * 100)
                    setTransition(0)
                }, 600)
            }
        }
        else {
            return
        }
    }

    const [startSwipePoint, setStartSwipePoint] = useState(null)

    const swipeMobileStart = (e) => {
        setStartSwipePoint(e.changedTouches[0].clientX)
    }

    const swipeMobileMove = (e) => {

    }
    const swipeMobileEnd = (e) => {
        if (window.innerWidth / 3 < startSwipePoint - (e.changedTouches[0].clientX)) {
            console.log('end')
        }
    }
    const swipeStart = (e) => {

    }
    const swipeMove = (e) => {

    }
    const swipeEnd = (e) => {

    }

    return (
        <Wrapper>
            <Container ref={container} className="container" step={currentPosition} transition={transition}>
                {newChildren.map((item, i) => <Item
                    onTouchStart={swipeMobileStart}
                    onTouchMove={swipeMobileMove}
                    onTouchEnd={swipeMobileEnd}
                    key={i}
                    {...item.props}
                >{item.props.children}</Item>)}
            </Container>
            <ButtonLeft
                onClick={leftMoveHandler}
            ><FaArrowAltCircleLeft /></ButtonLeft>
            <ButtonRight
                onClick={rightMoveHandler}
            >
                <FaArrowAltCircleRight />
            </ButtonRight>
        </Wrapper>
    )
}

export default Carousel

