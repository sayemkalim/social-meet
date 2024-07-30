import React from 'react';
import Layout from '../components/common/Layout';
import RightLayout from '../components/common/RightLayout';
import MainLayout from '../components/common/MainLayout';

const Home = () => {
  return (
    <div className="flex">
        <Layout/>
        <MainLayout/>
        <RightLayout/>
  
    </div>
  );
};

export default Home;
