import './Clovervideo.css';

const Clovervideo = () => {
    return (
        <div className='cloverdale_video_container'>
            <h2>Experience Cloverdale</h2>
            <div className='cloverdale_video'>
                <video autoPlay muted loop playsInline className="cloverdale_video_box">
                    <source src="https://res.cloudinary.com/daa1hgr9j/video/upload/v1757102992/vwysknnuxh3azrhrhw9p.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default Clovervideo