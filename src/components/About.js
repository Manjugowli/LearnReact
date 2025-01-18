import User from './User'
import React from 'react';
// const About = () =>{
//     return (
//         <div>
//             <h1> About Us Page</h1>
//             <User name={'Gowli'} location={'Banglore'} email={'manjugowli123@gmail.com'}/>
//         </div>
//     )
// }

// export default About;

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent constructor" );
    }
    componentDidMount(){
        console.log("Parent componentDidMount" );
    }
    render(){
        console.log("Parent render" );
      return (
        <div>
            <h1> About Us Page</h1>
            <User name={'Gowli'} location={'Banglore'} email={'manjugowli123@gmail.com'}/>
        </div>
    )
    }
}

export default About;