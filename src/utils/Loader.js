import './utils.css'

function Loader() {
    return (
        <div className='loader'>
            <img src='https://i.pinimg.com/originals/f4/06/70/f4067002c56532d9b275dd881a6f3d8f.gif' alt='loader'></img>
            {/* <img src='https://lh3.googleusercontent.com/proxy/YbbKDsv1DHXdZIpbbM1XnLXZ2RdoP_LKagS1sil52l2vt9K8yVHVPwKPRwVwHeF1yLpYJv0FEs2tGmgoBeFWNgu3lxs_d3i2tJF3eoUbMckS1VM2_MN4OWM' alt='loader'></img> */}
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
