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

const Dots = styled.div`
    position:absolute;
    bottom:30px;
    left:50%;
    transform:translateX(-50%);
    display:flex;
    justify-content:center;
    align-items:center;
`

const Dot = styled.button`
    width:20px;
    height:20px;
    border:1px solid black;
    background-color:${({ active }) => active ? 'black' : 'white'};
    border-radius:20px;
    outline:none;
    box-shadow:${({ active }) => active ? 'inset 0px 0px 2px 2px white' : 'none'};
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
    transform:translate(${({ step }) => step}%);
    transition:${({ transition }) => transition}s all ease;
`

const Item = styled.div`
    background:url('${({ src }) => src}');
    background-position:center;
    background-size:cover;
    width:100%;
    min-width:100vw;
    height:100%;
    min-height:100vh;
    display:${({ display }) => display || 'flex'};
    justify-content:${({ justify }) => justify || 'center'};
    align-items:${({ align }) => align || 'center'};
    background-color:${({ bgcolor }) => bgcolor || 'white'};
    color:${({ color }) => color || 'white'};
    padding:${({ padding }) => padding || '4px'};
`

const Carousel = ({ children, infinite, slidestoShow = 1 }) => {
    const [currentPosition, setCurrentPosition] = useState(0)
    const [transition, setTransition] = useState(0.6)
    const container = useRef()
    const [newChildren, setNewChildren] = useState(children)

    const [startSwipePoint, setStartSwipePoint] = useState(null)
    const [swipeMovePoint, setSwipeMovePoint] = useState(1)

    const [swipePoint, setSwipePoint] = useState(null)
    const [currPosition, setCurrPosition] = useState(1)
    const [isMoving, setIsMoving] = useState(false)

    const translateStep = 100 / slidestoShow

    const [index, setIndex] = useState(0)

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

            if (currentPosition <= -(container.current.children.length - 2) * 100 && infinite) {
                setTimeout(() => {
                    setCurrentPosition(-100)
                    setTransition(0)
                    setIndex(0)
                }, 600)
            }
        }
        else {
            return
        }
        setIndex(prev => prev + 1)
    }
    console.log(index)
    const leftMoveHandler = () => {
        setTransition(0.6)
        if (currentPosition < 0) {
            setCurrentPosition(prev => prev + translateStep)

            if (currentPosition >= -100 && infinite) {
                setTimeout(() => {
                    setCurrentPosition(-(container.current.children.length - 2) * 100)
                    setTransition(0)
                    setIndex(container.current.children.length - 3)
                }, 600)
            }
        }
        else {
            return
        }
        setIndex(prev => prev - 1)
    }

    // mobile swipe
    const swipeMobileStart = (e) => {
        setStartSwipePoint(e.changedTouches[0].clientX)
    }

    const swipeMobileMove = (e) => {
        if (startSwipePoint < window.innerWidth && startSwipePoint > window.innerWidth / 2) {
            if (infinite) {
                if (currentPosition <= -100 * container.current.children.length - 2) {
                    return
                }
                setCurrentPosition(prev => prev - swipeMovePoint)
            }
            else {
                if (currentPosition === -100 * (container.current.children.length - 1)) {
                    return
                }
                setCurrentPosition(prev => prev - swipeMovePoint)
            }

        }
        if (startSwipePoint > 0 && startSwipePoint < window.innerWidth / 2) {
            if (currentPosition >= 0) {
                return
            }
            setCurrentPosition(prev => prev + swipeMovePoint)
        }

    }

    const swipeMobileEnd = (e) => {
        if (startSwipePoint - (e.changedTouches[0].clientX) >= window.innerWidth / 3) {
            if (infinite) {
                rightMoveHandler()
                setCurrentPosition(Math.ceil((currentPosition / 100) - 1) * 100)
            }
            else {
                if (currentPosition <= -100 * (container.current.children.length - 1)) {
                    return
                }
                rightMoveHandler()
                setCurrentPosition(Math.ceil((currentPosition / 100) - 1) * 100)
            }
        }


        else if (e.changedTouches[0].clientX - startSwipePoint > window.innerWidth / 3) {
            if (infinite) {
                leftMoveHandler()
                setCurrentPosition(Math.ceil(currentPosition / 100) * 100)
            }
            else {
                if (currentPosition >= 0) {
                    return
                }
                leftMoveHandler()
                setCurrentPosition(Math.ceil(currentPosition / 100) * 100)
            }
        }
        else if ((e.changedTouches[0].clientX < window.innerWidth && e.changedTouches[0].clientX > window.innerWidth / 1.5) && ((startSwipePoint - (e.changedTouches[0].clientX) < window.innerWidth / 2))) {
            setCurrentPosition(Math.ceil(currentPosition / 100) * 100)
        }
        else if ((e.changedTouches[0].clientX < window.innerWidth / 1.5 && e.changedTouches[0].clientX > 1) && ((startSwipePoint - (e.changedTouches[0].clientX) < window.innerWidth / 2))) {
            setCurrentPosition(Math.floor(currentPosition / 100) * 100)
        }
    }


    // desktop swipe
    const swipeStart = (e) => {
        setSwipePoint(e.clientX)
        setIsMoving(true)
    }

    const swipeMove = (e) => {
        if (isMoving) {
            if (swipePoint < window.innerWidth && swipePoint > window.innerWidth / 2) {
                if (infinite) {
                    if (currentPosition <= -100 * container.current.children.length - 2) {
                        return
                    }
                    setCurrentPosition(prev => prev - swipeMovePoint)
                }
                else {
                    if (currentPosition === -100 * (container.current.children.length - 1)) {
                        return
                    }
                    setCurrentPosition(prev => prev - swipeMovePoint)
                }

            }
            if (swipePoint > 0 && swipePoint < window.innerWidth / 2) {
                if (currentPosition >= 0) {
                    return
                }
                setCurrentPosition(prev => prev + swipeMovePoint)
            }
            else {
                return
            }
        }
    }

    const swipeEnd = (e) => {
        setIsMoving(false)
        if (swipePoint - (e.clientX) >= window.innerWidth / 3) {
            if (infinite) {
                rightMoveHandler()
                setCurrentPosition(Math.ceil((currentPosition / 100) - 1) * 100)
            }
            else {
                if (currentPosition <= -100 * (container.current.children.length - 1)) {
                    return
                }
                rightMoveHandler()
                setCurrentPosition(Math.ceil((currentPosition / 100) - 1) * 100)
            }
        }


        else if (e.clientX - swipePoint > window.innerWidth / 3) {
            if (infinite) {
                leftMoveHandler()
                setCurrentPosition(Math.ceil(currentPosition / 100) * 100)
            }
            else {
                if (currentPosition >= 0) {
                    return
                }
                leftMoveHandler()
                setCurrentPosition(Math.ceil(currentPosition / 100) * 100)
            }
        }
        else if ((e.clientX < window.innerWidth && e.clientX > window.innerWidth / 1.5) && ((swipePoint - (e.clientX) < window.innerWidth / 2))) {
            setCurrentPosition(Math.ceil(currentPosition / 100) * 100)
        }
        else if ((e.clientX < window.innerWidth / 1.5 && e.clientX > 1) && ((swipePoint - (e.clientX) < window.innerWidth / 2))) {
            setCurrentPosition(Math.floor(currentPosition / 100) * 100)
        }
    }

    const getToTheSlide = (i) => {
        setCurrentPosition(-(i + 1) * 100)
        setIndex(i)
    }


    return (
        <Wrapper>
            <Container ref={container} className="container" step={currentPosition} transition={transition}>
                {newChildren.map((item, i) => <Item
                    onTouchStart={swipeMobileStart}
                    onTouchMove={swipeMobileMove}
                    onTouchEnd={swipeMobileEnd}
                    onMouseDown={swipeStart}
                    onMouseMove={swipeMove}
                    onMouseUp={swipeEnd}
                    key={i}
                    {...item.props}
                >{item.props.children}</Item>)}
            </Container>
            <ButtonLeft
                onClick={leftMoveHandler}
            ><FaArrowAltCircleLeft /></ButtonLeft>
            <ButtonRight
                onClick={rightMoveHandler}
            ><FaArrowAltCircleRight />
            </ButtonRight>
            <Dots>
                {newChildren.map((item, i) => <Dot
                    onClick={() => getToTheSlide(i)}
                    key={i}
                    active={i === index ? true : false}
                />)}
            </Dots>
        </Wrapper>
    )
}

export default Carousel

