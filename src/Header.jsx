import React, {Component} from 'react';
import Logo from './assets/letter-o (1).png';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false
        };
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll(){
        if(window.scrollY > 100){
            this.setState({isSticky: true})

        }else{
            this.setState({isSticky: false})
        }
    }
    render() {
        const {isSticky} = this.state;
        const stickyClass = isSticky ? 'sticky' : '';


        const toggleMenu = () => {
        const menu = document.querySelector('.overlay');
        const menuButton = document.querySelector('.menu');
        const isOpen = menu.style.transform === 'translateX(0%)';
        menu.style.transform = isOpen ? 'translateX(100%)' : 'translateX(0%)';
        menuButton.textContent = isOpen ? '☰' : 'X';
        };
        return (
            <header id="header" className={stickyClass}>
                <a href="" className="logo">
                    <img src={Logo} alt="logo" />
                        O'neil
                </a>
                <nav className="navBar">
                    <ul className='overlay'>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
                <a href='#' className='menu' onClick={toggleMenu}>
				☰
			</a>
            </header>
        );
    }
}
