import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

const Home = () => {
  return (
    <Layout>
      <div className='container mx-auto'>
        <div className='flex-1 my-2 p-2'>
          <p className='text-6xl text-red-400 m-2 text-center'>TANTOSA</p>
        </div>
      </div>
    </Layout>
  );
};
export default Home;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
