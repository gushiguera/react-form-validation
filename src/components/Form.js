import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false
        };
    }
    
    validateName = (name) => {
        const lengthValid = name.length >=3 && name.length < 30;
        const re = /^[A-Z]+$/i
        return lengthValid && re.test(name);
    }
    
    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
    }
    
    validatePhone = (phone) => {
        const firstDigitValid = phone.charAt(0) !== "0" && phone.charAt(0) !== "1"
        const re = /^\d{10}$/
        return firstDigitValid && re.test(phone);
    }
    
    validateUrl = (url) => {
        const re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
        return re.test(url);
    }
    
    onNameChange = (e) => {
        const name = e.target.value;
        const nameValid = this.validateName(name);
        this.setState({
            isNameValid: nameValid
        })
    }
    
    onEmailChange = (e) => {
         const email = e.target.value
         const emailValid = this.validateEmail(email) 
         this.setState({
            isEmailValid: emailValid
         })
    }
    
    onPhoneChange = (e) => {
        const phone = e.target.value
        const phoneValid = this.validatePhone(phone) 
        this.setState({
            isPhoneValid: phoneValid
        })
    }
    
    onBlogUrlChange = (e) => {
        const url = e.target.value;
        const urlValid = this.validateUrl(url);
        this.setState({
            isUrlValid: urlValid
        })
    }
    
    verifyForm = () => {
        if (this.state.isNameValid && this.state.isEmailValid && this.state.isPhoneValid && this.state.isUrlValid) {
            this.props.isFormValid(true);
        } else {
            this.props.isFormValid(false);
        }
    }
    
    render() {
        return (
            <div className="row">
                <h1 className="text-center">Form Validation</h1>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input className="name" type="text" name="name" placeholder='Name' onChange={this.onNameChange} />
                    
                    <label htmlFor="email">Email:</label>
                    <input className="email" type='email' name="email" placeholder='Email' onChange={this.onEmailChange} />  
                    
                    <label htmlFor="phone">Phone:</label>
                    <input className="phone" type="text" name="phone" placeholder='Phone' onChange={this.onPhoneChange} />
                    
                    <label htmlFor="blogUrl">BlogUrl:</label>
                    <input className="url" type="text" name="blogUrl" placeholder='Blog Url' onChange={this.onBlogUrlChange} />               
                    
                    <div className="small-6 small-centered text-center columns">
                        <a href="#" className="button success expand round text-center" onClick={this.verifyForm}>Verify</a>
                    </div>
                </form>
        </div>);
    }
}

export default Form;
