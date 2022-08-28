import { Button } from '@mui/material';
import React, { useState } from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { sItem, sItemContent } from './styles';
import { getInterstList } from '../../../../modules/home/interest/helpers';

const Item = ({ data, title, setGraph, accountList, nodeList }) => {
  const [isOpen, setIsOpen] = useState(false);

  let getMostContext = (arr) => {
    let counts = {};
    for (const num of arr) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    let sortable = [];
    for (var vehicle in counts) {
      sortable.push([vehicle, counts[vehicle]]);
    }

    return sortable.sort(function (a, b) {
      return b[1] - a[1];
    })[0][0];
  };

  let tags = [];
  let contexts = [];
  let textContexts = [];
  accountList.forEach((e) => {
    contexts.push(...new Set(e.context));
    textContexts.push(...e.context);
    tags.push(e.tag);
  });
  let res = textContexts.filter((e) => !getInterstList().includes(e));
  // console.log(res);
  let context = getMostContext(res);

  // let uniqueTags = [...new Set(tags)];
  // let uniqueContexts = [...new Set(contexts)];
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
          <p>
            <b>Kategori:</b> {context}
          </p>
          {/* <b>Sample akun:</b> */}
          {/* {nodeList.slice(0, 10).map((item, index) => { */}
          {/* return ( */}
          {/*<div key={index}>*/}
          {/* {item.id} */}
          {/* <p className={sItemTitle}>{item.target}</p> */}
          {/* </div> */}
          {/* ); */}
          {/* })} */}
          {/* <p>Kategori: {uniqueTags.join(', ')}</p> */}
          {/* <p>Sub-kategori: {uniqueContexts.slice(0, 10).join(', ')}</p> */}
          {accountList.slice(0, 10).map((item, index) => {
            return (
              <div key={index}>
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
