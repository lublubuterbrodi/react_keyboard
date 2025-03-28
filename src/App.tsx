import { Component } from 'react';

interface AppState {
  pressedKey: string | null;
}

export class App extends Component<{}, AppState> {
  state: AppState = {
    pressedKey: null,
  };

  updatePressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.updatePressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.updatePressedKey);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
