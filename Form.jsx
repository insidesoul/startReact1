import React from 'react'

class Form extends React.Component {
    state = {
         email: '',
         checkbox: false
    }

    handleChange = (event) => {
        this.setState({[event.target.name ]: event.target.value})
    }

    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }
    validateEmail = () =>{
        if(!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.state.email)){
            alert('Email is not valid')
            return
        }

        if(this.state.checkbox === false) {
            alert("Please confirm your consent")
            return
        }

        this.setState({
            email: '',
            checkbox: false,
        })
        alert('Thank you for subscriprion!')
    }

    render() {
        const {email, checkbox} = this.state;

        return <div>
            <input type="email" name="email" placeholder="email" value={email} onChange={this.handleChange}/>
            <br/>
            <label>
                <input type="checkbox" name="checkbox" checked={checkbox} onChange={this.handleCheckboxChange}/>

                I agree with term and conditions
            </label>
            <br/>
            <button onClick={this.validateEmail}>Send</button>
        </div>
    }
}

export {Form}