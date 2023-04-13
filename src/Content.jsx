import React from 'react';
import {Home} from './Home';
import {About} from './About';
import {Education} from './Education';
import {Skill} from './Skill';
import {Contact} from './Contact';

export class Contents extends React.Component {
    render() {
        return (
        <main id='main'>
            <Home />
            <About />
            <Education />
            <Skill/>
            <Contact />
        </main>
        )
    }
}
