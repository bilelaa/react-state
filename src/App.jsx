import { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Bilel",
        bio: "just a student",
        imgSrc: "/bilel.jpg",
        profession: "Software Developer working on that hihi ☻",
      },
      show: false,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ timeSinceMount: this.state.timeSinceMount + 1 });
    }, 1000);
  }

  render() {
    const { person, show, timeSinceMount } = this.state;

    return (
      <div>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Toggle Show
        </button>
        {show && (
          <div style={{ textAlign: "center" }}> {/* Center the content horizontally */}
          <Card style={{ width: "18rem", display: "inline-block" }}> {/* Ensure the Card stays inline */}
            <Card.Img variant="top" src="/bilel.jpg" />
            <Card.Body>
              <Card.Title>{person.profession}</Card.Title>
              <Card.Text>
                <p>Fullname: {person.fullName}</p>
                <p>Bio: {person.bio}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        
        )}
        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
