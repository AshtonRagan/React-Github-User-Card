import React, { Component } from 'react';
import Axios from "axios";
import Card from "./Card"
import Followers from "./followers"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      user: "AshtonRagan",
      followers:[]
    }
  }

  componentDidMount() {

    Axios.get(`https://api.github.com/users/${this.state.user}`).then(res => {
      
      this.setState ({
        data: res.data,
      })
    })

    .then(res=>{
      Axios.get(this.state.data.followers_url).then(res=>{
        // console.log(res);
        
          this.setState({
            followers:res.data
          })


      }).catch(err=>{console.log(err);
      })
    })
    .catch(err => { console.log(err) })
   
  }

  componentDidUpdate(prevState){
    if(this.state.user !== prevState.user)
    {

    }

  }
 ClickHandler = (name) =>{
this.setState({
  user:name
})

console.log(this.state.user);



}


  render() {
    
    return (
      <div>
        <Card user={this.state.data} />
       <div className="Followers-container">
         <h2>Followers:</h2>
        <Followers followers={this.state.followers} click={this.ClickHandler}/>
      </div>
      </div>
    )
  }

}

export default App;
