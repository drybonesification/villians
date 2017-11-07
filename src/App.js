import React, { Component } from "react";
import "./App.css";
import SuperHeroes from "./superHeroes";

class App extends Component {
  state = {
    title: "Super heroes",
    heroes: SuperHeroes.HEROES,
    selectedHero: {}
  };

  handleSubmit = event => {
    event.preventDefault();
    const hero = this.state.selectedHero;
    const heroIndex = this.state.heroes.map(o => o.id).indexOf(hero.id);
    this.setState({
      heroes: [
        ...this.state.heroes.slice(0, heroIndex),
        {
          ...hero,
          superhero: hero.superhero
        },
        ...this.state.heroes.slice(heroIndex + 1, this.state.heroes.length)
      ]
    });
  };

  handleSelectedHero = hero => {
    this.setState({
      selectedHero: hero
    });
  };

  HanedleNameChange = event => {
    console.log(event.target.value);
    this.setState({
      selectedHero: {
        ...this.state.selectedHero,
        superhero: event.target.value
      }
    });
  };

  render() {
    const HeroesList = this.state.heroes.map(hero => {
      return (
        <li key={hero.id} onClick={() => this.handleSelectedHero(hero)}>
          <span className="badge">{hero.id}:</span> {hero.superhero}
        </li>
      );
    });
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <ul className="heroes">{HeroesList}</ul>
        <div>
          <div>
            <label>ID:</label>
            {this.state.selectedHero.id}
          </div>
          <form onSubmit={this.handleSubmit}>
            <label>Hero Name:</label>
            <input
              type="text"
              value={this.state.selectedHero.superhero}
              onChange={event => this.HanedleNameChange(event)}
            />
            <input className="button" type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
