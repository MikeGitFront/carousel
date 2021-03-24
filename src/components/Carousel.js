import React, { useEffect, useRef, useState } from 'react'

const styles = {
    wrapper: {
        position: 'relative',
    },
    viewPort: {
        display: 'flex',
        background: 'red',
        overflow: 'hidden',
    },
    itemContainer: {
        display: 'flex',
    },
    buttons: {
        left: {
            position: 'absolute',
            top: '50%',
            left: '0',
            zIndex: '2',
        },
        right: {
            position: 'absolute',
            top: '50%',
            right: '0',
        },
    },
}

const Carousel = ({ children, slideWidth, slideHeigth }) => {
    const [currentItem, setCurrentItem] = useState(2)
    const itemContainer = useRef(null)
    const viewPort = useRef(null)
    const [newChildren, setNewChildren] = useState(children)

    const itemStyles = {
        height: `${slideHeigth}px`,
        width: `${slideWidth}px`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }



    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log('resize')
            if (window.innerWidth < slideWidth) {

            }
        })

        // return window.removeEventListener('resize',)
    }, [])


    useEffect(() => {
        viewPort.current.style.maxWidth = `${slideWidth}px`
        viewPort.current.style.maxHeight = `${slideHeigth}px`

        let firstItem = itemContainer.current.children[0].cloneNode(true)
        let lastItem = itemContainer.current.children[itemContainer.current.children.length - 1].cloneNode(true)

        itemContainer.current.insertBefore(lastItem, itemContainer.current.children[0])
        itemContainer.current.append(firstItem)

        itemContainer.current.style.transform = `translateX(-${slideWidth}px)`
        itemContainer.current.style.transitionDuration = `0.0s`
    }, [])

    const nextItemHandler = () => {
        if (currentItem < itemContainer.current.children.length) {
            setCurrentItem(prev => prev + 1)
            itemContainer.current.style.transform = `translateX(-${slideWidth * currentItem}px)`
            itemContainer.current.style.transitionDuration = `0.7s`

            if (currentItem === itemContainer.current.children.length - 1) {
                setTimeout(() => {
                    itemContainer.current.style.transitionDuration = `0.0s`
                    itemContainer.current.style.transform = `translateX(-${slideWidth}px)`
                    setCurrentItem(2)
                }, 700)

            }
        } else {
            return
        }

    }

    const previousItemHandler = () => {
        setCurrentItem(prev => prev - 1)
        if (currentItem > 0) {
            itemContainer.current.style.transform = `translateX(-${slideWidth * currentItem - 2 * slideWidth}px)`
            itemContainer.current.style.transitionDuration = `0.7s`

            if (currentItem === 2) {
                setTimeout(() => {
                    itemContainer.current.style.transitionDuration = `0.0s`
                    itemContainer.current.style.transform = `translateX(-${slideWidth * (itemContainer.current.children.length - 2)}px)`
                    setCurrentItem(itemContainer.current.children.length - 1)
                }, 700)

            }
        } else {
            return
        }
    }



    return (
        <div style={styles.wrapper}>
            <button style={styles.buttons.left} onClick={previousItemHandler}>Previous</button>
            <div ref={viewPort} style={styles.viewPort}>
                <div onTouchStart={() => console.log('move')} ref={itemContainer} style={styles.itemContainer}>
                    {newChildren.map((item, i) => <div key={i} style={itemStyles}>{item}</div>)}
                </div>
            </div>
            <button style={styles.buttons.right} onClick={nextItemHandler}>Next</button>
        </div>
    )
}



export default Carousel
