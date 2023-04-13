import React from 'react'
import { SkillCard } from './SkillCard';
export class Skill extends React.Component {
    
    render(){
        
        return(
            <section id="skill">
                <h2>Skills</h2>
                <div className="skill-container">
                    <SkillCard icon="fab fa-html5" skill="HTML"/>
                    <SkillCard icon="fab fa-css3-alt" skill="CSS"/>
                    <SkillCard icon="fab fa-js-square" skill="JavaScript"/>
                    <SkillCard icon="fab fa-react" skill="React JS"/>
                </div>
            </section>
        )
    }
}