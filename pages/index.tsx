import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

const Home = () => {
  return (
    <Layout>
      <div className='container mx-auto'>
        <div className='flex-1 my-2 p-2'>
          <p className='text-6xl text-red-500 m-2 text-center'>SHOP NAME</p>
        </div>
      </div>
      <button className='btn btn-blue'>Test</button>
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
