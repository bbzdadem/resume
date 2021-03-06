import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>CREATIVE</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                    <button className="hmmbtn" ><a href="https://drive.google.com/file/d/1wK9UJcd6fPjTRi_S6XIOeAA4QKjTPpb_/view?usp=sharing" rel="noopener noreferrer" >Download CV</a></button>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;
