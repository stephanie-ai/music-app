import React, { Component } from 'react';

class Form extends Component {

    state = {
        username: "",
        nameInput: ""
    }
    
    handleInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };

    handleFormSubmit = e => {
        e.preventDefault();
        this.setState(prevState => ({ 
          username: prevState.nameInput,
          nameIntput: ""
        }));
      };
    
    render() {
        return (
            <div>
                <h2 id="greeting">Hi there, {this.state.username ? this.state.username : 'mate'}!</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" id="nameInput" name="nameInput" placeholder="That's not my name!" value={this.state.nameInput} onChange={this.handleInput}/>
                    <input type="submit" value="Update!"/>
                 </form>
            </div>


        );
    }
}


export default Form;