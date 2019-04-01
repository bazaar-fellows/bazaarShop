import React, { Component } from 'react';
import '../../components/design/about.scss';
import Auth from '../../auth/auth';
import Layout from '../../components/layout';
import { store } from '../index';
import { Provider } from "react-redux";
import Background from '../../components/background';
import '../../components/design/contactPage.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            phone: '',
            email: '',
            hours: '',
            facebook: '',
            instagram: '',
            twitter: ''
        }
    }

    addLocation = e => {
        e.preventDefault();
        let newLocation = e.target.value;
        this.setState({ location: newLocation });
        console.log('state after submit', this.state);
    }



    render() {
        console.log('from render', this.state);
        return (
            <Provider store={store} >
                <Layout>
                    <Background />
                    <div className='contact-page-container'>
                        <img className='contact-image' src="http://sites.nicholas.duke.edu/envhealth/files/2017/11/oasdom.com-contact-us.jpg" alt="contact" />
                        <h2>Connect with us</h2>
                        <ul className='ul-container'>
                            <li>
                                🏫: 123 Marine View Drive, Everett, WA 98201 {this.state.location}
                            </li>
                            <li>
                                📞: 555.123.4567 {this.state.phone}
                            </li>
                            <li>
                                🖥: info@oliveandatlas.com{this.state.email}
                            </li>
                            <li>
                                ⏰: 9 am - 5 pm, M-F{this.state.hours}
                            </li>
                        </ul>
                        <Auth capability="create">
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" placeholder="Add location" onChange={(e) => this.addLocation(e)} />
                                <input type="text" placeholder="Add phone #" onChange={(e) => this.addPhone(e)} />
                                <input type="text" placeholder="Add email" onChange={(e) => this.addEmail(e)} />
                                <input type="text" placeholder="Add hours" onChange={(e) => this.addHours(e)} />
                            </form>
                        </Auth>
                    </div>
                </Layout>
            </Provider>
        )
    }
}

export default Contact;