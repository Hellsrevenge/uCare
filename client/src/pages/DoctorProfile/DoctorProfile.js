import React from "react";
import "./DoctorProfile.css";

class Books extends Component {
    state = {
      
    };
  
    componentDidMount() {
      this.loadBooks();
    }
  
    loadBooks = () => {
      API.getBooks()
        .then(res => this.setState({ books: res.data }))
        .catch(err => console.log(err));
    };



function DoctorProfile(props) {
    return (
        <div>Hello</div>
    );
}
export default DoctorProfile;
