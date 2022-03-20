import React from 'react';
// import logo from './logo.svg';

import Header from '../componant/profile_componants/header.jsx'
import Banner from '../componant/profile_componants/Banner.jsx'
import LabTabs from '../componant/profile_componants/LabTab';




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