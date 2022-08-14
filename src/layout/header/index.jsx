import React from 'react';

import { Wrapper } from '@/components';

import { sHeader } from './styles';

const Header = () => {
  return (
    <Wrapper>
      <div className={sHeader}>
        <p>Market Grouping</p>
      </div>
    </Wrapper>
  );
};

export default Header;
