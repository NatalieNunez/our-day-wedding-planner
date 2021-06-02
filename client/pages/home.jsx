import React from 'react';
import InspirationBoard from '../inspo-board/inspiration-board';
import HomeHeader from '../components/home-header';

export default function Home(props) {
  return (
    <>
      <HomeHeader />
      <InspirationBoard />
    </>
  );
}
