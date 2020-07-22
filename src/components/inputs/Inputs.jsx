import React, {useState,useContext} from 'react';

const Inputs = () => {
    const [me,setMe]=useState('');
    const [myBuddy,setBuddy]=useState('');

    const handleMe = e => {
        setMe(e.target.value)
    }
    const handleBuddy = e => {
        setBuddy(e.target.value)
    }

    return (
        <div>
            <form>
                <input
                placeholder= 'My name' 
                type="text"
                onChange={handleMe}
                />

                <input
                placeholder= 'My Buddy' 
                type="text"
                onChange={handleBuddy}
                />

                <button>Let's play!</button>
            </form>
            
        </div>
    );
}

export default Inputs;
