import React from 'react'

export class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="footer-container">
                    <div className="footer-left">
                        <a href='#'>
                            <i className='fab fa-facebook'></i>
                        </a>
                        <a href='#'>
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a href='#'>
                            <i className='fab fa-instagram'></i>
                        </a>
                        <a href='#'>
                            <i className='fab fa-whatsapp'></i>
                        </a>
                    </div>
                    <div className="footer-right">
                        <p>
                            <span>❤</span> &copy; 2023 dev_twumstine
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}