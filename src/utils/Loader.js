import './utils.css'

function Loader() {
    return (
        <div className='loader'>
            {/* <img src={'https://res.cloudinary.com/di8iypeft/image/upload/v1639769153/the_Stall/loader_nrum9c.gif'} alt='loader'></img> */}
            <div className="loading">
                <div className="loading-text">
                    <span className="loading-text-words">L</span>
                    <span className="loading-text-words">O</span>
                    <span className="loading-text-words">A</span>
                    <span className="loading-text-words">D</span>
                    <span className="loading-text-words">I</span>
                    <span className="loading-text-words">N</span>
                    <span className="loading-text-words">G</span>
                </div>
            </div>
        </div>
    )
}

export default Loader
