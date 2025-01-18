import React from "react"

class User extends React.Component{
    constructor(props){
        super(props);

        this.state={
            likesCount : 20
        };
        console.log("User1 constructor", );
    }
    componentDidMount(){
        console.log("User1 componentDidMount", );
    }
    
    render(){
        const {name , location, email} = this.props;
        const { likesCount } = this.state;
        console.log("User1 render", );
        
      return(
        <div className="user-card">
           <h5> Namwe : {name}</h5>
           <h5> Likes : {likesCount} <button onClick={()=>{
            this.setState({
                likesCount : this.state.likesCount + 1
            })
           }}>GIVE LIKE</button></h5>
           <h5> Location : {location}</h5>
           <h5>Email : {email}</h5>
        </div>
    )}
}

export default User ;