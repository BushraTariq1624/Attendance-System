// CheckInContext.js
import React, { createContext, useState } from 'react';

export const CheckInContext = createContext();

export const CheckInProvider = ({ children }) => {
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');

  return (
    <CheckInContext.Provider value={{ checkInTime, setCheckInTime, checkOutTime, setCheckOutTime }}>
      {children}
    </CheckInContext.Provider>
  );
};
