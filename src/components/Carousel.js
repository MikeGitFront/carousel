import React, { useState } from 'react'
import CarouselItem from './CarouselItem'



const Carousel = () => {
    const [position, setPosition] = useState(0)

    const previousItemHandler = () => {

    }

    const nextItemHandler = () => {

    }

    return (
        <div>
            <button onClick={previousItemHandler}>Previous</button>
            <button onClick={nextItemHandler}>Next</button>
            <div style={styles.viewPort}>
                <div style={styles.itemContainer}>
                    <CarouselItem number={0} />
                    <CarouselItem number={1} />
                    <CarouselItem number={2} />
                    <CarouselItem number={3} />
                </div>
            </div>
        </div>
    )
}

const styles = {
    viewPort: {
        display: 'flex',
        width: '400px',
        height: '200px',
        background: 'red',
    },
    itemContainer: {
        display: 'flex',
        transform: `translate(-${0}px)`
    }
}

export default Carousel
