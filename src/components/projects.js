import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
       /**  JAVA FILL UP */
          <div className="projects-grid">
          {/* PROG1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >###########</CardTitle>
            <CardText>
              #########################################
            </CardText>
            <CardActions border>
           
              <Button href="https://www.github.com/youzefih" colored>github</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              
            </CardMenu>
          </Card>
          
         
         {/* PROG1 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >###########</CardTitle>
           <CardText>
             #########################################
           </CardText>
           <CardActions border>
          
             <Button href="https://www.github.com/youzefih" colored>github</Button>
           </CardActions>
           <CardMenu style={{color: '#fff'}}>
             
           </CardMenu>
         </Card>
         
         </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>TBD</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>TBD</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>###########</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Java</Tab>
          <Tab>Python</Tab>
          <Tab>C/C++</Tab>
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
