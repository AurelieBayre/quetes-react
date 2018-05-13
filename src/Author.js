import React, {Component} from 'react'; 

export class Author extends Component {
    getAuthor() {
        alert("l'auteur: " + this.props.name)
      }
  
  
      render() {
    return(
      <div>
        <div onClick={this.getAuthor.bind(this)}>
            Cliquez ICI pour afficher le nom de l'auteur!
        </div>
      </div>
      );
  }


}

export default Author