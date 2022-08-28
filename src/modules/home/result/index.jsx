import ForceGraph2D from 'react-force-graph-2d';
import React, { useRef, useEffect, useState, useCallback } from 'react';

import Item from './item';
import {
  sResult,
  sResultGraph,
  sResultInitial,
  sResultContent,
} from './styles';

const Result = ({ graph, setGraph, subgraph, isInitial, isLoading }) => {
  const forceRef = useRef(null);

  const [force, setForce] = useState();

  useEffect(() => {
    if (graph?.nodes) {
      setForce({ ...graph });
    } else {
      setForce(undefined);
    }
  }, [graph]);

  const handleClick = useCallback((node) => {
    // Aim at node from outside it
    window.open(`https://twitter.com/${node.id}`, '_blank');
  }, []);

  return (
    <div className={sResult}>
      <div className={sResultGraph}>
        <ForceGraph2D
          graphData={force}
          width={690}
          height={300}
          backgroundColor="aliceblue"
          nodeLabel="id"
          ref={forceRef}
          onNodeClick={handleClick}
        />
      </div>
      {isInitial ? (
        <div className={sResultInitial}>
          <p>Silakan untuk memilih minat terlebih dahulu</p>
        </div>
      ) : isLoading ? (
        <div className={sResultInitial}>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={sResultContent}>
          {subgraph.map((item) => {
            return (
              <Item
                data={item}
                key={item.id}
                setGraph={setGraph}
                accountList={item.links}
                nodeList={item.nodes}
                title={`Segmen ${item.id} - ${item.nodes.length} Akun & ${item.links.length} Interaksi`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Result;
