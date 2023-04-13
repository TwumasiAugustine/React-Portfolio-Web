import react from 'react'

export class SkillCard extends react.Component {
    render(){
        return(
            <div className="skill">
                <div className="skill__item">
                    <i className={this.props.icon} />
                    <span>
                        {this.props.skill}
                    </span>
                </div>
            </div>
        )
    }
}