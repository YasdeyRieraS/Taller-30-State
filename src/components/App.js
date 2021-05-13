import {Component} from 'react';
import Table from './Table';

class App extends Component {
  state = {
    characters: [
      {
        name: 'Cloud',
        job: 'Merc',
      },
      {
        name: 'Barret',
        job: 'Bar Owner',
      },
      {
        name: 'Tifa',
        job: 'Bartender',
      },
      {
        name: 'Aerith',
        job: 'Flower girl',
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((_, i) => {
        return i !== index;
      }),
    });
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table charactersData={characters}
        removeCharacter={this.removeCharacter} />
      </div>
    );
  }
}

export default App;
