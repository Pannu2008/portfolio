import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardMenu, CardActions, Button, IconButton, CardText, Icon} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){

    if(this.state.activeTab === 0){
        return(
            <div className='projects-grid'><h1>Grade 1</h1>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/06/Math-Beauty_2880x1220_Lede_HPA.jpg) center/cover'}}> Math and Numbers </CardTitle>
                <CardText>
                    Words Words Words Words Words Words 
                </CardText>
                <CardActions border>
                    <Button colored href="https://www.google.com"> Lesson</Button>
                    <Button colored> Video</Button>
                    <Button colored href="./Question#1"> Question</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name= 'share'/>
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/06/Math-Beauty_2880x1220_Lede_HPA.jpg) center/cover'}}> Math and Numbers </CardTitle>
                <CardText>
                    Words Words Words Words Words Words
                </CardText>
                <CardActions border>
                    <Button colored href="https://www.google.com"> Github</Button>
                    <Button colored> CodePen</Button>
                    <Button colored> LivePen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name= 'share'/>
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/06/Math-Beauty_2880x1220_Lede_HPA.jpg) center/cover'}}> Math and Numbers </CardTitle>
                <CardText>
                    Words Words Words Words Words Words
                </CardText>
                <CardActions border>
                    <Button colored href="https://www.google.com"> Github</Button>
                    <Button colored> CodePen</Button>
                    <Button colored> LivePen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name= 'share'/>
                </CardMenu>
            </Card>
            </div>

        )
    }
    else if(this.state.activeTab === 1){
        return(
            <div><h1>Grade 2</h1></div>
        )
    }
    else if(this.state.activeTab === 2){
        return(
            <div><h1>Grade 3</h1></div>
        )
    }
    else if(this.state.activeTab === 3){
        return(
            <div><h1>Grade 4</h1></div>
        )
    }
    else if(this.state.activeTab === 4){
        return(
            <div><h1>Grade 5</h1></div>
        )
    }
    else if(this.state.activeTab === 5){
        return(
            <div><h1>Grade 6</h1></div>
        )
    }
    else if(this.state.activeTab === 6){
        return(
            <div><h1>Grade 7</h1></div>
        )
    }
    else if(this.state.activeTab === 7){
        return(
            <div><h1>Grade 8</h1></div>
        )
    }
    else if(this.state.activeTab === 8){
        return(
            <div><h1>Grade 9</h1></div>
        )
    }
    else if(this.state.activeTab === 9){
        return(
            <div><h1>Grade 10</h1></div>
        )
    }
    else if(this.state.activeTab === 10){
        return(
            <div><h1>Grade 11</h1></div>
        )
    }
    else if(this.state.activeTab === 11){
        return(
            <div><h1>Grade 12</h1></div>
        )
    }
}

    render() {
        return(
            <div className="category-tabs">
             <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>Gr. 1</Tab>
            <Tab>Gr. 2</Tab>
            <Tab>Gr. 3</Tab>
            <Tab>Gr. 4</Tab>
            <Tab>Gr. 5</Tab>
            <Tab>Gr. 6</Tab>
            <Tab>Gr. 7</Tab>
            <Tab>Gr. 8</Tab>
            <Tab>Gr. 9</Tab>
            <Tab>Gr. 10</Tab>
            <Tab>Gr. 11</Tab>
            <Tab>Gr. 12</Tab>

            </Tabs>   

            
                <Grid>
                <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                </Cell>
                </Grid>
                
           
            </div>
        )
    }
}

export default Projects;
