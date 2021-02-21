import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
