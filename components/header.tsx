import { Button, makeStyles, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

const useStyles = makeStyles({
  btn: {
    color: 'white',
  },
});
const Header = () => {
  const { btn } = useStyles();
  return (
    <div>
      <div className='bg-blue-500 flex justify-between items-center'>
        <div className='mx-1 p-1'>
          <Typography>LOGO</Typography>
        </div>
        <div>
          <Button variant='text' className={btn}>
            เข้าสู่ระบบ
          </Button>
          <Button variant='text' className={btn}>
            สมัครสมาชิก
          </Button>
        </div>
      </div>
      <div className='bg-blue-900 h-14 flex items-center'>
        <div className='container mx-auto'>
          <Link href='/shop'>
            <Button className={btn} variant='text'>
              ร้านค้า
            </Button>
          </Link>
          <Link href='/about'>
            <Button className={btn} variant='text'>
              เกี่ยวกับ
            </Button>
          </Link>
          <Link href='/contact'>
            <Button className={btn} variant='text'>
              ติดต่อเรา
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
