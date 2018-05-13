import React, {Component} from 'react'; 
const weak = /^[a-z]{0,5}$/
const lowerAndUpper = /^([a-z]+|[A-Z]+){6,}$/
const special = /[!@#$%^&*()_+-=[]/
export class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
     password : "",
     message: "rien..."
    };
  }

  handleChange(e) {
    this.setState({
      password : e.target.value,
      message : weak.test(this.state.password) ? "Mot de passe faible" : lowerAndUpper.test(this.state.password) ? "mot de passe moyen" : special.test(this.state.password) ? "mot de passe fort" : "mot de passe moyen"
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password.length < 6)
      alert("Votre mot de passe est trop court")
  }

  render(){
    return(
      <div>
      <p>{this.state.message }</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Mot de passe"></label>
          <input onChange={this.handleChange.bind(this)} type="password"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Password