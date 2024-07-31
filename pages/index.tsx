import React from 'react';
import Layout from '../components/Layout';


const Home: React.FC = () => (
  <Layout>
    <div>
       <div className='hero'>
      <h1>Become a better business with us.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis tortor, ultricies ut justo eu.</p>
      <button>Our Business</button>
    </div>  
    <div className='hero_container'>
         <div className='hero_text'>
        <h1>Lorem ipsum dolor</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec eu mattis tincidunt viverra eu. Lacus turpis felis</p>
    </div>
    <div className='hero_text'>
        <h1>Lorem ipsum dolor</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec eu mattis tincidunt viverra eu. Lacus turpis felis</p>
    </div>
    <div className='hero_text'>
        <h1>Lorem ipsum dolor</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec eu mattis tincidunt viverra eu. Lacus turpis felis</p>
    </div>
    </div>
   
    </div>
   
  </Layout>
);

export default Home;