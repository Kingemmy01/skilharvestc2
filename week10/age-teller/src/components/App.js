import React, { useState } from 'react';
import AgeStats from './AgeStats';

function App() {

    const [ dob, setDob ] = useState(''); 
    const [ showStats, setShowStats ] = useState(false);
    
    return (
        <div className="App">
            <hi>Age Teller</hi>

            <p className='mb-4'>Enter your date of birth below: </p>

            <input 
                type="date"
                className="mb-4" 
                placeholder="Enter your birth year..."
                onChange={ (e) => {
                    setDob(e.target.value)
                    setShowStats(true)
                }}
            />

            <button className="btn btn-warning">Calculate</button>
            
                {/*// if showStats value is set to true display the component */}
            { showStats ? <AgeStats dob={dob} /> : <div></div> }
            </div>
    )
}

export default App;
