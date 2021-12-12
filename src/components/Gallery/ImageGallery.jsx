import './style/imageGallery.css'
import React from 'react'

function ImageGallery() {
    return (
        <div className='profile-container'>
            <div className='profile-container-title'>
                <span>In-house Horses</span>
            </div>
            <div className='gallery'>
                <figure className='gallery__item gallery__item--1'>
                    <img src="https://picsum.photos/500/400" alt="Image 1" className='gallery__img' />
                </figure>
                <figure className='gallery__item gallery__item--2'>
                    <img src="https://picsum.photos/500/400" alt="Image 2" className='gallery__img' />
                </figure>
                <figure className='gallery__item gallery__item--3'>
                    <img src="https://picsum.photos/500/400" alt="Image 3" className='gallery__img' />
                </figure>
                <figure className='gallery__item gallery__item--4'>
                    <img src="https://picsum.photos/500/400" alt="Image 4" className='gallery__img' />
                </figure>
            </div>
        </div>
    )
}

export default ImageGallery
