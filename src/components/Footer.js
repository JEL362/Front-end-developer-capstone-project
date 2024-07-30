import React from 'react';
import logo from '../images/Logo .svg'

const Footer = () => {
    return (
    <footer>
        <section>
            <div className="company-info">
                <img src={logo} alt=""/>
                <p>We are a family owned mediterraneran restaurant</p>
            </div>
            <div>
                <h3>Import Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About Us</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>

                </ul>
            </div>
            <div>
                <h3>
                    contact
                </h3>
                <ul>
                    <li> Address: <br/> 123 Towncity, USA</li>
                    <li> Phone: <br/> ++123456</li>
                    <li> Email: <br/> @littlelemon.com</li>
                </ul>
            </div>
            <div>
                <h3>
                    Social Media
                </h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </section>

    </footer>
    );
};

export default Footer