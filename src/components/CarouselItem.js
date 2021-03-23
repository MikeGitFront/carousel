import React from 'react'

const styles = {
    item: {
        width: '400px',
        height: '200px',
        backgroundColor: 'yellow',
        border: '1px solid black',
    }
}

const CarouselItem = ({ number }) => {
    return (
        <div style={styles.item}>
            <h1>{number}</h1>
        </div>
    )
}

export default CarouselItem
