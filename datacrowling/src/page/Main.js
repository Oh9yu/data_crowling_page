import React from 'react';
import Content from './content/Content';
import Tab from './tab/Tab';
import Search from './search/Search';

const Main = () => {
  return (
    <div>
      main search
      <Tab />
      <Content />
      <Search />
    </div>
  );
};

export default Main;
