import React, { useRef, useState } from 'react';

import Item from './item';
import ForceGraph2D from 'react-force-graph-2d';
import { sResult, sResultContent } from './styles';
const data = {
  nodes: [
    { id: 'A' },
    { id: 'B' },
    { id: 'C' },
    { id: 'D' },
    { id: 'E' },
    { id: 'F' },
  ],
  links: [
    { source: 'A', target: 'B', value: 5 },
    { source: 'B', target: 'C', value: 5 },
    { source: 'C', target: 'D', value: 5 },
    { source: 'D', target: 'E', value: 5 },
    { source: 'E', target: 'F', value: 5 },
    { source: 'C', target: 'F', value: 5 },
  ],
};
const Result = ({ subgraph, isInitial, isLoading }) => {
  const [force, setForce] = useState({
    nodes: [
      { id: 'A' },
      { id: 'B' },
      { id: 'C' },
      { id: 'D' },
      { id: 'E' },
      { id: 'F' },
    ],
    links: [
      { source: 'A', target: 'B', value: 5 },
      { source: 'B', target: 'C', value: 5 },
      { source: 'C', target: 'D', value: 5 },
      { source: 'D', target: 'E', value: 5 },
      { source: 'E', target: 'F', value: 5 },
      { source: 'C', target: 'F', value: 5 },
    ],
  });
  const forceRef = useRef(null);
  return (
    <div className={sResult}>
      <ForceGraph2D
        graphData={force}
        width={690}
        height={300}
        // backgroundColor="aliceblue"
        nodeLabel="id"
        ref={forceRef}
      />
      {isInitial ? (
        <div>
          <p>Silakan untuk memilih minat terlebih dahulu</p>
        </div>
      ) : isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={sResultContent}>
          {subgraph.map((item) => {
            return (
              <Item
                key={item.id}
                accountList={item.links}
                title={`Subgraph ${item.id} - ${item.nodes.length} Akun`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Result;
