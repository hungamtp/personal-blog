import React from 'react';
import EndBody from '../../component/EndBody';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import InstaPost from '../../component/InstaPost';
import PopularPost from '../../component/PopularPost';
import RecentPost from '../../component/RecentPost';
import SearchBar from '../../component/SearchBar';
import Slide from '../../component/Slides';

function HomePage() {
  return (
    <div>
      <Header />
      <Slide />
      <SearchBar />
      <PopularPost />
      {/* <RecentPost /> */}
      {/* <EndBody /> */}
      {/* <InstaPost /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
