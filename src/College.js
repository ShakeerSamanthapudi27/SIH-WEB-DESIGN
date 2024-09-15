import React from 'react'
import changestate from './changestate';

export default class College extends React.Component {
    constructor()
    {
        super();
        {
            this.state = {name :"Shannu"}
            //this.obj={age:18};
        };
       
    }
    changestate=()=>
    {
      this.setState({name:"shiva"})
    }
    render() {
    return (
      <div>
        <h1>Name : {this.state.name}{this.state.city}</h1>
        <h1>Phone : {this.state.phone}{this.state.email}helo</h1>
        <button onClick={this.changestate}>Click</button>
      </div>
    )
  }
}
