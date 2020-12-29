import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education'
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div className="resume-all">
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img 
                        src="https://f1.pngfuel.com/png/117/925/260/circle-silhouette-user-male-man-user-profile-avatar-black-blackandwhite-png-clip-art.png"
                        alt= "avatar"
                        style={{height: '200px'}}
                        />
                    </div>
                    <h2 style={{paddingTop: '2em'}}>Rishabh Sharma</h2>
                    <h4 style={{color: 'grey'}}>Computer Scientist</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>WordsWordsOWrisfsdfoidsfosdfoidsfosdfio</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>Address</h5>
                    <p>1 Bad at 2k Way, 94025</p>
                    <h5>Phone</h5>
                    <p>657-223-4234</p>
                    <h5>Email</h5>
                    <p>badat2k@example.com</p>
                    <h5>Web</h5>
                    <p>mywebsite.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                        startYear={2012}
                        endYear={2021}
                        schoolName="My University"
                        schoolDescription="Words"
                        />

                        <Education
                        startYear={2020}
                        endYear={2021}
                        schoolName="My Second University"
                        schoolDescription="More Words"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience 
                        startYear={2020}
                        endYear={200}
                        workName="First Job"
                        workDescription="Second Job"
                        />

                        <Experience 
                        startYear={2020}
                        endYear={200}
                        workName="Second Job"
                        workDescription="Second Job"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills

                        skill="HTML/CSS"
                        progress={100}
                        />
                        
                        <Skills
                        skill="Python"
                        progress={90}
                        />

                        <Skills
                        skill="Javascript"
                        progress={20}
                        />

                        <Skills
                        skill="React"
                        progress={210}
                        />

                    </Cell>
                </Grid>
        </div>

        )
    }
}

export default Resume;
