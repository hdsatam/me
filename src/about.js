import React from 'react';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import pic1 from './images/about1.jpg';
import pic2 from './images/about2.jpg';
import pic3 from './images/about3.jpg';
import pic4 from './images/about4.jpg';
import pic5 from './images/about5.jpg';
import pic7 from './images/about7.jpg';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div class="about" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/images/IMG_9321.JPG)"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div class="aboutTitle">
                            <b>About</b>
                        </div>
                    </Grid>
                    <Grid item xs></Grid>
                    <Grid item xs>
                        <div class="aboutText">
                            <Card>
                                <Card.Body className="cardBody">
                                    <p>Hello! I am currently a Master's student at the University 
                                    of Michigan studying Computer Science Engineering.
                                    I completed my Bachelor's in Computer Science also
                                    at the University of Michigan. I'm passionate about
                                    all different aspects of CS, from software engineering
                                    to Machine Learning to even some Operating Systems 
                                    level development. I like to spend time tinkering 
                                    around with programming (you can see more about this
                                    in the "Projects" section).</p>

                                    <p>Outside of computer science, I am a student instructor at the university,
                                    an avid movie fanataic, enjoyer of video games, am constantly listening
                                    to some form of music (both classical and modern),
                                    and I love hiking through nature. </p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Grid>
                    {/* <Grid item xs>     
                        <div class="aboutPic">
                            <Carousel controls={false} indicators={false} pause={false}>
                                <Carousel.Item>
                                    <img className="aboutPicImg" src={pic1} alt='About Pic #1'/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="aboutPicImg" src={pic2} alt='About Pic #2'/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="aboutPicImg" src={pic3} alt='About Pic #3'/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="aboutPicImg" src={pic4} alt='About Pic #4'/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="aboutPicImg" src={pic5} alt='About Pic #5'/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="aboutPicImg" src={pic7} alt='About Pic #7'/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Grid> */}
                </Grid>
            </div>
        );
    }
}

export default About;