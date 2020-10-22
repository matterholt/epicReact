/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

const baseHours = {
  clockIn: '08:20',
  clockOut: '16:30',
};

function useLocalStorage(
  storageKey,
  defaultValue = baseHours,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) {
  // adding options to allow user to decided how to process
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(storageKey);

    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, serialize(state));
  }, [state, storageKey]);

  return [state, setState, serialize];
}

const DefaultHours = () => {
  const [clockInOut, setClockInOut] = useLocalStorage('defaultHours');

  function handleChange(e) {
    const { value, id } = e.target;
    const updateValues = {
      ...clockInOut,
      [id]: value,
    };
    setClockInOut(updateValues);
  }

  return (
    <div>
      <form>
        <h2>Default Time</h2>
        <label htmlFor="clockIn">Clock in</label>
        <input
          id="clockIn"
          onChange={handleChange}
          type="time"
          value={clockInOut.clockIn}
        />
        <label htmlFor="clockOut">Clock Out</label>
        <input
          onChange={handleChange}
          type="time"
          id="clockOut"
          value={clockInOut.clockOut}
        />
      </form>
    </div>
  );
};

function App() {
  return (
    <div>
      <DefaultHours />
    </div>
  );
}
export default App;
