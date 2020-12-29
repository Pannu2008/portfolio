import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>App Name</h2>
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1024px-Google_Contacts_icon.svg.png"
                    alt="avatar"
                    style={{height:'250px'}}
                    />
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Words Words Words WOrds OWrds oiwejwoefjwefuwefewufheu</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Us!</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                        <ListItem>
                         <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                         (123)-456-7890
                         </ListItemContent>
                         </ListItem>

                         <ListItem>
                         <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-info-circle" aria-hidden="true"/>
                         (123)-456-7890
                         </ListItemContent>
                         </ListItem>

                         <ListItem>
                         <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                         rishabh2003
                         </ListItemContent>
                         </ListItem>

                         <ListItem>
                         <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-skype" aria-hidden="true"/>
                         mySkypeID
                         </ListItemContent>
                         </ListItem>
                        </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;

 