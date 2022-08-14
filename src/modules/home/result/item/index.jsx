import { Button } from '@mui/material';
import React, { useState } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { sItem, sItemContent } from './styles';

const Item = ({ data, title, setGraph, accountList }) => {
  const [isOpen, setIsOpen] = useState(false);

  let tags = [];
  let contexts = [];
  accountList.forEach((e) => {
    contexts.push(...new Set(e.context));
    tags.push(e.tag);
  });
  let uniqueTags = [...new Set(tags)];
  let uniqueContexts = [...new Set(contexts)];
  return (
    <div className={sItem}>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => {
          setIsOpen(!isOpen);

          !isOpen ? setGraph(data) : setGraph({});
        }}
        fullWidth
      >
        {title}
      </Button>
      {isOpen && (
        <div className={sItemContent}>
          <p>Kategori utama: {uniqueTags.join(', ')}</p>
          <p>Sub-kategori: {uniqueContexts.slice(0, 10).join(', ')}</p>
          {accountList.slice(0, 10).map((item, index) => {
            return (
              <div key={index}>
                {/* <p>{item.target}</p> */}
                <TwitterTweetEmbed tweetId={item.id} />
                {/* <p className={sItemTitle}>{item.target}</p> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Item;
