// name, email, phonenumber

import { useState } from 'react';


 
function PersonalItem(props) {
  return <li>{props.info}</li>
}


function List(props) {
  return (
    <ul>
      {props.personalInfo.map((info) => {
        return <PersonalItem key={info} info={info} />;
      })}
    </ul>
  );
}


const personalForm = new FormData();

  const personalValues = {
    firstName: personalForm.get('firstName'),
  lastName: personalForm.get('lastName'),
  email: personalForm.get('email'),
  phoneNumber: personalForm.get('phoneNumber'),

}; 

function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + 'px',
    width: props.width,
    
    
  };


  return (
    <button style={buttonStyle}>{props.text}</button>
    
  );
}





function Personal(e) {



{/*
const personalInfo = ['First Name', 'Last Name', 'Email', 'Phone Number'];
 



const personalInfoList = personalInfo.map((info) => <li key={info}>{info}</li>)
 */}


 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [phoneNumber, setPhoneNumber] = useState('');
 

  return (
  
  <>



    <header>
<h1>Upload Your CV</h1>

    </header>
    
    <h3>Personal Information</h3>


<div id="formbox">
    <form>

<label>
        First Name:
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder='Jane'
          
        />
      </label>

      <label>
        Last Name:
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder='Doe'
        />
      </label>

       <label>
        Email:
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='you@you.com'
        />
      </label>

       <label>
        Phone Number:
        <input
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          placeholder='416-111-1111'
        />
      </label>

      <Button text="Update" color="blue" fontSize={12} width="70px" />

    

</form>

</div>

 {/* 
<form>

 
  <div id="personal-formbox">
      <label>First Name 
   
    <input type="text" name="firstName" placeholder="Jane" />
    </label>
    

    <label>Last Name 
    <input type="text" name="lastName" placeholder="Doe" />
    </label>
    

    <label>Email 
    <input type="email" name="email" placeholder="jane@yahoo.com" />
    </label>
   

    <label>Phone Number
    <input type="number" name="phoneNumber" placeholder="000-000-0000" />
</label>

</div>
  </form>
  */}
 
 {/*
 <form>

  <ul>

    <div id="labels">

<List personalInfo={personalInfoList} />
</div>

<div id="inputs">
<input type="text" name="firstName" placeholder='Jane'>{personalValues.firstName}</input>
<input type="text" name="lastName" placeholder='Doe' >{personalValues.lastName}</input>
<input type="email" name="email" placeholder='you@you.com' >{personalValues.email}</input>
<input type="text" name="phoneNumber" placeholder='416-111-1111' >{personalValues.phoneNumber}</input>
</div>



</ul> 

/*}

<div id='submit'>

<Button text="Update" color="blue" fontSize={12} />
{/* <Button text="Edit" color="blue" fontSize={12} /> */}
{/*
</div>

</form>
 */}



 




 </>
  );
}



export default Personal;