import React from 'react'
import ProfilePic from './assets/profile-pic.jpg';


export class Home extends React.Component {
    componentDidMount(){
        let myArray = ['Web Developer', 'Freelancer', 'Frontend Developer'];
        let randomText = document.querySelector('.dev')
        window.onload = () => {
            setInterval(() => {
                randomText.innerHTML = myArray[Math.floor(Math.random() * myArray.length)]
                
            }, 3000)
        };
    }
    
    render() {
        return (
            <section id="hero">
                <div className="profile__sec">
                    <img src={ProfilePic} alt="Profile Picture" className="picture" />
                </div>
                <div className="home-text">
                    <p class="dev">Web Developer</p>
                    <h1>Mark O'neil</h1>
                    <p>
                        I'm a web developer based in the USA. I'm 
                        passionate  about building websites and 
                        applications that are fast, responsive 
                        and user-friendly.
                    </p>
                    <div id="home-btn">
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </section>
        )
    }
}