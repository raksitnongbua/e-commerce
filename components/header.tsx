import { Button, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      <div className='bg-blue-500 flex justify-between items-center'>
        <div className='mx-1 p-1'>
          <Typography>LOGO</Typography>
        </div>
        <div>
          <Button variant='text' className='mx-1'>
            <p className='text-white'>เข้าสู่ระบบ</p>
          </Button>
          <Button variant='text' className='mx-1'>
            <p className='text-white'>สมัครสมาชิก</p>
          </Button>
        </div>
      </div>
      <div className='bg-blue-900 h-14 flex items-center'>
        <div className='container mx-auto'>
          <Link href='/shop'>
            <Button variant='text'>ร้านค้า</Button>
          </Link>
          <Link href='/about'>
            <Button variant='text'>เกี่ยวกับ</Button>
          </Link>
          <Link href='/contact'>
            <Button variant='text'>ติดต่อเรา</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
