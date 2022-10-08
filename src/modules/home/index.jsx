import axios from 'axios';
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

import { Wrapper } from '@/components';

import Result from './result';
import Interest from './interest';

import { sHome } from './styles';

const Home = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [graph, setGraph] = useState({});
  const [subgraph, setSubgraph] = useState({});
  const [isInitial, setIsInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [intersetList, setIntersetList] = useState([]);

  const interestCheckboxOnChangeHandler = (e) => {
    if (e.target.checked) {
      setIntersetList([...intersetList, e.target.name]);
    } else {
      setIntersetList(intersetList.filter((item) => item !== e.target.name));
    }
  };

  const submitButtonHandler = async () => {
    setIsInitial(false);
    setIsLoading(true);

    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/market-grouping',
        {
          topic: [...intersetList],
        },
      );

      const data = await response.data.data;

      const entriesData = Object.entries(data.subgraph);
      const fixedEntriesData = entriesData.map(([key, value]) => {
        return {
          id: key.replace('subgraph', ''),
          ...value,
        };
      });
      const sortedFixedEntriesData = fixedEntriesData.sort((a, b) => {
        return a.id - b.id;
      });

      setGraph(data.fullgraph);
      setSubgraph([...sortedFixedEntriesData]);
    } catch {
      setSubgraph([]);
      enqueueSnackbar('Failed to fetch data', { variant: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <div className={sHome}>
        <Interest
          isLoading={isLoading}
          submitButtonHandler={submitButtonHandler}
          interestCheckboxOnChangeHandler={interestCheckboxOnChangeHandler}
        />
        <Result
          graph={graph}
          setGraph={setGraph}
          subgraph={subgraph}
          isInitial={isInitial}
          isLoading={isLoading}
        />
      </div>
    </Wrapper>
  );
};

export default Home;
