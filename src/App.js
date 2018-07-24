import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";

class App extends Component {

  state = {
    friends
  };

  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
    console.log("Fire");
  };


  render() {
    return (
      <div>
      <NavBar />
      <Header />
      <Wrapper>
        {this.state.friends.map(item => (
          <FriendCard
          removeFriend={this.removeFriend}
          id={item.id}
          key={item.id}
          name={item.name}
          image={item.image}
          occupation={item.occupation}
          location={item.location}
          />
        ))}
      </Wrapper>
      <Footer />
      </div>
    );
  };
};

export default App;
