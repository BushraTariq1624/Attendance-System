import React, {useContext} from 'react'
import { CheckInContext } from './CheckContext';

const CheckInOut = () => {
  // const [checkInTime, setCheckInTime] = useState('');
  // const [checkOutTime, setCheckOutTime] = useState('');
  const { checkInTime, checkOutTime,setCheckInTime,setCheckOutTime } = useContext(CheckInContext);

  const handleCheckIn = () => {
    const now = new Date();
    setCheckInTime(now.toLocaleTimeString()); // sets the current time
  };

  const handleCheckOut = () => {
    const now = new Date();
    setCheckOutTime(now.toLocaleTimeString()); // sets the current time
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
            YOUR CHECK-IN TIME: {checkInTime || 'Not checked in yet'}
          </h1>
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
            YOUR CHECK-OUT TIME: {checkOutTime || 'Not checked out yet'}
          </h1>
          <button className="flex-shrink-0 text-white bg-emerald-700 border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg mt-10 sm:mt-0" onClick={handleCheckIn}>
            Check-In
          </button>
          <button className="flex-shrink-0 text-white bg-emerald-700 border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg mt-10 sm:mt-0" onClick={handleCheckOut}>
            Check-Out
          </button>
        </div>
      </div>
    </section>

  )
}

export default CheckInOut