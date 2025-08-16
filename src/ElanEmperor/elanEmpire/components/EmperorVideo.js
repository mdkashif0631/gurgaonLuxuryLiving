import React from 'react'

const EmperorVideo = () => {
    return (
        <div className='project_video_container'>
            <video autoPlay muted loop playsInline className="project_video">
                <source src="https://res.cloudinary.com/dif213nbi/video/upload/v1755345656/emperor-video_jbgqrr.webm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default EmperorVideo