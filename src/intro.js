import React from 'react';
import pic from './images/introPi.jpg';
import resume from './docs/Hershal_Satam_Resume.pdf';
import Grid from '@material-ui/core/Grid';
import { sizing } from '@material-ui/system';
import pic1 from './images/about1.jpg';
import pic2 from './images/about2.jpg';
import pic3 from './images/about3.jpg';
import pic4 from './images/about4.jpg';
import pic5 from './images/about5.jpg';
import pic7 from './images/about7.jpg';
import Carousel from 'react-bootstrap/Carousel';

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div class="intro">
                <div class="hello">
                    <h1><b>Hello! I am Hershal!</b></h1>
                </div>
                <div class="introPic">
                    {/* <img className="introPicImg" src={pic} alt="introPic" width="750px" height="500px"/> */}
                    <Carousel controls={false} indicators={false} pause={false} fade={true}>
                        <Carousel.Item>
                            <img className="introPicImg" src={pic} alt='Intro Pic'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="introPicImg" src={pic1} alt='About Pic #1'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="introPicImg" src={pic2} alt='About Pic #2'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="introPicImg" src={pic3} alt='About Pic #3'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="introPicImg" src={pic4} alt='About Pic #4'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="introPicImg" src={pic7} alt='About Pic #7'/>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div class="introLinks">
                    <Grid container spacing={3} class="links">
                        <Grid container spacing={3}>
                            <Grid item className="linkItem">
                                <a className="il" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hdsatam/">LinkedIn</a>
                            </Grid>
                            <Grid item className="linkItem">
                                <a className="i1" target="_blank" rel="noopener noreferrer" href="https://github.com/hdsatam">Github</a>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item className="linkItem">
                                <a className="i1" target="_blank" rel="noopener noreferrer" href="mailto:hdsatam@gmail.com">Email</a> (hdsatam@gmail.com)
                            </Grid>
                            <Grid item className="linkItem">
                                <a className="i1" target="_blank" rel="noopener noreferrer" href={resume}>Resume</a>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Intro;