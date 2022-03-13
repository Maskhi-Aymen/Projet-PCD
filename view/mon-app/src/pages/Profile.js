import React from 'react';
// import logo from './logo.svg';

import Header from '../Components/header'
import Banner from '../Components/Banner'
import LabTabs from '../Components/LabTab';




function Profile() {
  return (
    <div className='yellocard'>
      <Header text ="Profile Page"/>
      <hr />
      <Banner /> 
      <br />
     <LabTabs/>
  

    </div>
  );
}

export default Profile;
/*import AddPub from '../componant/content/AddPub';
<AddPub/>
*/