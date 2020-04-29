import React, {
    useState
}                   from 'react'
import {
    Col
}                   from "reactstrap";
import ReactPlayer  from 'react-player';

export default function VideoPlayer({
    playerUrl
}) {
    const [playing, setPlaying] = useState(false)
    return (
        <Col xs="12" md="8" className="video-player">
            <ReactPlayer 
                url={playerUrl} 
                playing={playing} 
                controls = {true}
                height = {"100%"}
                width = {"100%"}
            />
        </Col>
    )
}


