import React from 'react';
import './App.css';

function App() {
  const [number, setNumber] = React.useState();
  const [error, setError] = React.useState(false);

  const [biggerNumber, setBiggerNumber] = React.useState();
  const onSubmit = (e) => {
    if (!!error) {
      setError(false);
    }
    e.preventDefault();
    const length = number.toString().length;
    if (length > 16 || length < 14) {
      setError(true);
      return;
    }

    const array = [...number.toString()];
    console.log(array);

    const repeats = {};

    array.forEach((value) => {
      const actualValue = repeats[value];
      repeats[value] = !!actualValue ? actualValue + 1 : 1;
    });

    console.log(repeats);
    const bigger = Object.keys(repeats).reduce((previous, current) => {
      if (repeats[previous] < repeats[current]) {
        return current;
      } else {
        return previous;
      }
    });

    setBiggerNumber(bigger);
  };
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          type="number"
          placeholder={'Ingresa el número'}
        />
        <input type="submit" value="Submit" />
      </form>
      {!!error && (
        <>
          <span
            style={{
              color: 'red',
            }}
          >
            El número debe tener de 14 a 16 caracteres
          </span>
          <br />
        </>
      )}

      <span>El número que se repite más veces es: {biggerNumber}</span>
    </div>
  );
}

export default App;
