import React, {Component} from 'react'; 

export class MonComposant extends Component {
    jeClique() {
        console.log("j'ai cliqué")
      }
  
  
      render() {
    return(
      <div>
        <div> Un </div>
        <div> Deux </div>
        <div onClick={this.jeClique.bind(this)}>
            {this.props.maprop}
        </div>
      </div>
      );
  }


}

export default MonComposant