import React, { Component } from 'react'
import '../App.css'

export class Person extends Component {
    constructor(){    
        super()
        this.state ={
            fullName:'Alexis Sanchez',
            bio :'nouvelle experience',
           // imgSrc : <img src={}></img>,
           profession:'teacher',
           ShowState : true 
        }
    }
        
     
    render() { 
        return(
         <div>
             {this.state.ShowState ? <div className="welcome"><h1>welcome</h1></div> : 
              <div className="person">
                    <h1>{this.state.fullName}</h1>
                    <h1>{this.state.bio}</h1>
                    <h2>{this.state.profession}</h2> 
                </div>}
             <button className="button" onClick={()=> 
             {this.setState({ShowState: ! this.state.ShowState});
             }}
              >{this.state.ShowState ? "readLess" : "readMore"}</button>
        </div>)
        }
   
}

export default Person
