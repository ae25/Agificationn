import React, { Component } from 'react';

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
         name: "",
         country: "",
         age: "",
        }
    }
    onChangeName = (e) => {
        this.setState({
            name: e.currentTarget.value
        })
    }
    onChangeCountry = (e) => {
        this.setState({
            country: e.currentTarget.value
        })
    }
    findAge = () =>{
        fetch("https://api.agify.io?name="+this.state.name+"&country_id="+this.state.country)
            .then(response => response.json())
            .then(json => {
                console.log(json.age);
                 this.setState({
                    age: json.age
                 })
            })
            
        
    }
   
    render() {
        return (
            <div className="App">
            <h2> Enter your Name and City and we'll guess your age</h2>
            
                <input type = "text" onChange={this.onChangeName} placeholder='Name'/>
                <input type = "text" onChange={this.onChangeCountry} placeholder='Country'/>
                <button onClick={this.findAge}>Submit</button>
            <h3> Your age is {this.state.age}</h3>
             </div>
        );
    }
}

export default home;