import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import logo from './face.png'
import logo2 from './background.png'
class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
      
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Youssef Iraqi</h2>
            <img
            
              src={logo}
              alt="logo"
              style={{height: '250px'}}
               />
               <h3>About Me</h3>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Currently seeking a career in software development. Problem solver. Data driven. Hard-worker, dedicated and consistent with a very positive outlook on everything.</p>
              <h4>Hobbies:</h4>
              <p style={{ width: '30%', margin: 'auto'}}><ul><li>Programming</li>
              <li>Running</li><li>Lifting</li><li>The Office</li></ul></p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    
                   Phone: (858) 900-4541
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                  
                    Email: youssefhiraqi@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    Github: <a href="https://www.github.com/youzefih">github.com/youzefih</a>
                  
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    LinkedIn:<a href="https://www.linkedin.com/in/youssef-iraqi/">linkedin.com/in/youssef-iraqi/</a>
                  
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
