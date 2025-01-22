import * as React from 'react'

export default function Profile() {
 
const [profilePic, setProfilePic] = React.useState(null);
const [userName, setUserName] = React.useState('');
const [email, setEmail] = React.useState('');
const [country, setCountry] = React.useState('');
const [state, setState] = React.useState('');

const handleFileChange = (e) => {
    setProfilePic(e.target)
}

const handleSubmit = (e) => {
    e.preventDefault();


if (!userName || !email || !state || !country) {
    alert('Please fill all the fields ');
    return;
}

console.log({
    userName,email,state,country,profilePic
});

alert('Profile Creation Successfully')

}


  return (
    <div className='profile-creation-container'>
    <div className='profile-card'>
        <h2>Create Your Profile</h2>
        <form onSubmit={handleSubmit} className='profile-form'>

            <div className='photo-upload'>
                <label htmlFor='profile-pic' className='photo-label'>
                    {profilePic ? (
                        <img src="images/user person.png" alt="profile" className='profile-pic-preview' />

                    ) : (
                        <div className='upload-placeholder'>
                            <span>Click to add photo</span>
                        </div>
                    )}
                    </label>
                    <input id = "profile-pic"  type="file" accept='image/*' onChange={handleFileChange} className='photo-input' />
               
            </div>

           <div className='input-group'>
            
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Username' required />
                </div>

                <div className='input-group'>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' required />
               </div>

               <div className='input-group'>
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder='Enter Your State' required />
                </div>

                <div className='input-group'>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Enter Your Country' required />
                </div>
                                <button type='submit' className='submit-button'>Create Profile</button>

        </form>
    </div>
    </div>
  )
}
