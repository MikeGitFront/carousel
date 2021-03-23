import React, { useEffect, useRef, useState } from 'react'
import CarouselItem from './CarouselItem'

const styles = {
    viewPort: {
        display: 'flex',
        width: `400px`,
        height: '200px',
        background: 'red',
        overflow: 'hidden',
    },
    itemContainer: {
        display: 'flex',
    }
}

const Carousel = () => {
    const [currentItem, setCurrentItem] = useState(2)
    const itemContainer = useRef(null)

    useEffect(() => {
        let firstItem = itemContainer.current.children[0].cloneNode(true)
        let lastItem = itemContainer.current.children[itemContainer.current.children.length - 1].cloneNode(true)

        itemContainer.current.insertBefore(lastItem, itemContainer.current.children[0])
        itemContainer.current.append(firstItem)

        itemContainer.current.style.transform = `translate(-${400}px)`
        itemContainer.current.style.transitionDuration = `0.0s`
    }, [])

    const nextItemHandler = () => {
        if (currentItem < itemContainer.current.children.length) {
            setCurrentItem(prev => prev + 1)
            itemContainer.current.style.transform = `translate(-${400 * currentItem}px)`
            itemContainer.current.style.transitionDuration = `0.7s`

            if (currentItem === itemContainer.current.children.length - 1) {
                setTimeout(() => {
                    itemContainer.current.style.transitionDuration = `0.0s`
                    itemContainer.current.style.transform = `translate(-${400}px)`
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
            itemContainer.current.style.transform = `translate(-${400 * currentItem - 2 * 400}px)`
            itemContainer.current.style.transitionDuration = `0.7s`

            if (currentItem === 2) {
                setTimeout(() => {
                    itemContainer.current.style.transitionDuration = `0.0s`
                    itemContainer.current.style.transform = `translate(-${400 * (itemContainer.current.children.length - 2)}px)`
                    setCurrentItem(itemContainer.current.children.length - 1)
                }, 700)

            }
        } else {
            return
        }
    }



    return (
        <div>
            <button onClick={previousItemHandler}>Previous</button>
            <button onClick={nextItemHandler}>Next</button>
            <div style={styles.viewPort}>
                <div ref={itemContainer} style={styles.itemContainer}>
                    <CarouselItem number={0} />
                    <CarouselItem number={1} />
                    <CarouselItem number={2} />
                    <CarouselItem number={3} />
                </div>
            </div>
        </div>
    )
}



export default Carousel
