import { Button } from '@mui/material';
import React, { useState } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { sItem, sItemTitle, sItemContent } from './styles';

const Item = ({ title, accountList }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={sItem}>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => setIsOpen(!isOpen)}
        fullWidth
      >
        {title}
      </Button>
      {isOpen && (
        <div className={sItemContent}>
          <TwitterTweetEmbed tweetId={'1555705197485117400'} />
          {accountList.map((item, index) => {
            return (
              <div key={index}>
                <p className={sItemTitle}>{item.target}</p>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Item;
