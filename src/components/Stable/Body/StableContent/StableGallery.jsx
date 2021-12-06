import React from 'react'

function StableGallery() {
    return (
        <div className='stable-property-images'>
            <img style={{ width: '25%' }} src="https://picsum.photos/200/300" alt="image-1" />
            <img style={{ width: '40%' }} src="https://picsum.photos/200/300" alt="image-2" />
            <img style={{ width: '25%' }} src="https://picsum.photos/400/200" alt="image-3" />
            <img style={{ width: '36%' }} src="https://picsum.photos/300/200" alt="image-4" />
            <img style={{ width: '55%' }} src="https://picsum.photos/300/200" alt="image-4" />
        </div>
    )
}

export default StableGallery
