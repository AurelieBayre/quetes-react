import React, {Component} from 'react'; 
const weak = /^[a-z]{0,5}$/
const upper = /[A-Z]*/
const special = /[!@#$%^&*()_+-=[]/
export class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
     password : "",
     message: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password.length < 6) {
      alert("Votre mot de passe est trop court")
    }
  }

  handleChange(e) {
    this.setState({
      password : e.target.value,
      message : weak.test(this.state.password) ? "Mot de passe faible" 
        : upper.test(this.state.password) && special.test(this.state.password) && this.state.password.length >= 7 ? "Mot de passe fort" 
        : upper.test(this.state.password) && (this.state.password.length) >= 7 ? "Mot de passe moyen" 
        : "Votre mot de passe doit contenir des minuscules, des majuscules et des caractères spéciaux"
    })
  }

  render(){
    return(
      <div>
      <p>{this.state.message }</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="Mot de passe"></label>
          <input onChange={this.handleChange.bind(this)} type="password"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Password