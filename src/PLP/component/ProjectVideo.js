import React from 'react'
import "./ProjectVideo.css";

const ProjectVideo = () => {
    return (
        <div className='project_video_container'>
            <video autoPlay muted loop playsInline className="project_video">
                <source src="https://res.cloudinary.com/diwgt4zc8/video/upload/f_auto:video,q_auto/v1/elan-presidential/walkthrough3" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default ProjectVideo
