import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './face.png'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={logo}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Software Developer</h1><p>(in the making... I'm still a student)</p>

            <hr/>

          <p>HTML/CSS | JavaScript | React | Java | Python | C/C++ | Fortran(unfortunately)</p>

        
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
