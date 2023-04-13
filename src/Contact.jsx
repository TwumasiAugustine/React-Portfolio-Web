import React from 'react'

export class Contact extends React.Component {
    render(){
        return(
            <section id="contact">
                <h2>Contact Me</h2>
                <div className="contact-container">
                    <div className='contact-form'>
                        <form action="#" method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="Your Name" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>    
                                <input type="email" name="email" id="email" placeholder="Your Email" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
                            </div>
                            <div className='form-group'>
                                <input type="submit" value="Send" className="btn"/>
                            </div>
                        </form>
                    </div>
                    <div className="contact-info">
                        <div className="contact-info__item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Address: 1234 Street Name, City Name, United States</span>

                        </div>
                        <div className="contact-info__item">
                            <i className="fas fa-phone"></i>
                            <span>Phone: +1 234 567 8901</span>
                        </div>
                        <div className="contact-info__item">
                            <i className="fas fa-envelope"></i>
                            <span>Email:</span>
                            <a href="mailto: example@example.com">
                                example@example.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}