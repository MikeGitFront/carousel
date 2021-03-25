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

            if (currentPosition <= -(container.current.children.length - 2) * 100 && infinite) {
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

            if (currentPosition >= -100 && infinite) {
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

    const translateStep = 100

    const [startSwipePoint, setStartSwipePoint] = useState(null)
    const [swipeMovePoint, setSwipeMovePoint] = useState(1)

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
                console.log(-100 * (container.current.children.length - 1))
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
                if (currentPosition <= -300) {
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
                    onTouchCancel={() => console.log('cancel')}
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

