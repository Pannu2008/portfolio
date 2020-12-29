import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import ThemeSwitcher from './ThemeSwitcher';
import ButtonBases from './Menu';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; //This line is unnessecary, b/c it already adds I guess??


import Resume from "./resume";

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                  <Grid className="landing-grid">
                     <Cell col={12}>
                        <img 
                        src="https://www.sd44.ca/ProgramsServices/IB/PublishingImages/IB%20logo.png"
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Road To 45</h1>
                        <hr />
                        <p>
                        A collection of previous IB assesments from real IB students.  
                        </p>

                        <div className="social-links">

                        {/*All of these are just hypothetical, not set in stone...*/}
                        
                      <h3 href="./projects" className="text-style">View projects here!</h3>
                      <h6 className="text-style2">View my projects Here!</h6>

                        {/* To-do List*/}
                        <a className= "logo-style" href="./projects" rel="noopener noreferrer" target="_blank">
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        
                        </a>
                        </div>
                    </div>
                    <Button>TEST BUTTON</Button>
                    <Button>I wjhy</Button>
    
                     </Cell>
                </Grid>
            </div>   
        )
    }
}
export default Landing;

//1: Change Landing Page entirely; make it look better 🤷‍♂️🤷‍♂️🤷‍♂️
//2: "Delete" resume page, but just like keep it lokey
//3: On the projects page, make it like workouts or sum like that
//4: On contact us, put an email and whatever
