import React, { Component  } from 'react';
import VideoCover from 'react-video-cover';

import Video from '../img/Quik_2018-08-08_21-48-14-2.mp4';

class MiVideoCover extends Component{
    state = {
        play: false
    }

render(){
    const videoOptions = {
        src: Video,
        ref: videoRef => {
          this.videoRef = videoRef;
        },
     
           
        onMouseOver: () => {
            if (this.videoRef && this.videoRef.paused) {
              this.videoRef.play();
            } else if (this.videoRef) {
              this.videoRef.pause();
            }
          },
          title: 'click to play/pause',
    };
    return(
        <div style={{
            width: '400px',
            height: '400px',
            overflow: 'hidden',
            margin: 'auto'
          }}>
            <VideoCover
              videoOptions={videoOptions}
            />
          </div>
      
    )
}




}

export default MiVideoCover;