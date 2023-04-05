import React, { useState } from 'react';

function ToggleImage() {
  const [image, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rOTCQUNHz3b-SXcbtTnY_2Ynf-IWDIV6Zw&usqp=CAU');
   
  function handleClick() {
    if (image === 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rOTCQUNHz3b-SXcbtTnY_2Ynf-IWDIV6Zw&usqp=CAU') 
    {
      setImage('https://5.imimg.com/data5/SELLER/Default/2021/7/BU/WC/FS/3027728/suzuki-gixxer-sf-150cc-bike-500x500.jpg');
    } else {
      setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0rOTCQUNHz3b-SXcbtTnY_2Ynf-IWDIV6Zw&usqp=CAU');
    }
  }

  return (
    <div>
    <h1>Toggle Images</h1>
    <img src={image} alt="Toggle Image" onClick={handleClick} />
    </div>
  );
}

export default ToggleImage;