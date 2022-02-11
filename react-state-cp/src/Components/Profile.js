// import React, { Component } from "react";

// class Profile extends Component {
//   state = {
//     Time: 0,
//     Person: {
//       fullName:"",
//       bio: "",
//       imgSrc: "",
//       profession: "",
//     },
//     showsState: false,
//   };

//   closeProfile = () => {
//     this.showState({
//       Person: {
//         fullName: "Anagor Chidera",
//         bio: "I am a Geologist transitioning into tech. My goal is to be Full-stack Javascript Software Engineer. I'll continue to learn new things to help me achieve my goal.",
//         imgSrc: "./image.jpg",
//         profession: "Software Engineer",
//       },
//       showsState: !this.state.showsState,
//     });
//   };
//   tick() {
//     this.setState((state) => ({
//       Time: state.Time + 1,
//     }));
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//   }
//   render() {
//     return (
//       <div>
//         <img
//           src={this.state.Person.imgSrc}
//           height="400px"
//           width="900px"
//           alt="logo"
//         />
//         <h3> {this.state.Person.fullName} </h3>
//         <h3> {this.state.Person.bio} </h3>
//         <h3> {this.state.Person.profession} </h3>
//         <h5> this component was mounted {this.state.Time}s ago</h5>
//         <button
//           onClick={this.state.shows ? this.openProfile : this.closeProfile}
//         >
//           {this.state.shows ? "hide" : "show"}
//         </button>
//       </div>
//     );
//   }
// }

// export default Profile;