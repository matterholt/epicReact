import React, { useState, useEffect } from 'react';

const baseHours = {
  clockIn: '08:00',
  clockOut: '16:30',
};

const DefaultHours = ({ standardHrs = baseHours }) => {
  const [clockInOut, setClockInOut] = useState(standardHrs);

  function handleChange() {}
  return (
    <div>
      <form>
        <h2>Default Time</h2>
        <label htmlFor="defaultClockIn">Clock in</label>
        <input
          id="defaultClockIn"
          onChange={handleChange}
          type="time"
          value={clockInOut.clockIn}
        />
        <label htmlFor="defaultClockOut">Clock Out</label>
        <input
          onChange={handleChange}
          type="time"
          id="defaultClockOut"
          value={clockInOut.clockOut}
        />
      </form>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <DefaultHours />
    </div>
  );
}
