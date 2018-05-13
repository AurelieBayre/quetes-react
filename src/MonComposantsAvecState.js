import React, {Component} from 'react'; 

export class MonComposantAvecState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ancienRegime : "La noblesse, le clergé"
    };
  }

  handleClick() {
    this.setState({
      ancienRegime : "le tiers état"
    })
  }

  render(){
    return(
      <div onClick={this.handleClick.bind(this)}>
        {this.state.ancienRegime}
      </div>
    );
  }
}

export default MonComposantAvecState