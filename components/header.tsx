import React from 'react';

const Header = () => {
  return (
    <div className='bg-red-100 flex justify-between'>
      <div className='mx-1'>LOGO</div>
      <div>
        <button className='mx-1'>เข้าสู่ระบบ</button>
        <button className='mx-1'>สมัครสมาชิก</button>
      </div>
    </div>
  );
};

export default Header;
