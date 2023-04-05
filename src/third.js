import axios from "axios";
import React from "react";
export default class AxiosGet1 extends React.Component{
state={person:[]}
componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>{
        this.setState({person:res.data})
    })
}
render(){
    return(
        <div className="three">
        <table>
        <tr>
        <td>sno</td>
        <td>Name</td>
        <td>username</td>
        <td>Email</td>
        </tr>
        <tr>
        <td> {this.state.person.map((e)=><p>{e.id}</p>)}</td>
       <td> {this.state.person.map((e)=><p key={e.id}>{e.name}</p>  )}</td>
      
      <td> {this.state.person.map((e)=><p>{e.username}</p>)}</td>
       <td>{this.state.person.map((e)=><p>{e.email}</p>)}</td>
       </tr>
       </table>
        </div>
    )
}


}