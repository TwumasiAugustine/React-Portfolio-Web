import React from 'react';


export class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        const slideElement = document.querySelector('.slide-in')
        const windowHeight = window.innerHeight;
        const slidePosition = slideElement.getBoundingClientRect().top;
        if (slidePosition < windowHeight) {
            this.setState({
                isVisible: true
            })
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
    render(){
        return(
            <section id="education">
                <h2>Education</h2>
                <div id="education-container" className={`slide-in ${this.state.isVisible ? 'active' : ''}`}>
                    <div class="education-item">
                        <h3>Example College Of Education</h3>
                        <p>Bachelor of Education</p>
                        <p>2022 - Present</p>
                    </div>
                    <div class="education-item">
                        <h3>Other</h3>
                        <ul>
                            <li>CodeCademy</li>
                            <li>FreeCodeCamp</li>
                            <li>Youtube</li>
                            <li>W3Schools</li>
                            <li>Scrimba</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}