import React, { useState, useEffect } from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import LinearProgress from '@material/react-linear-progress';
import ModelCard from '../components/cards/ModelCard';

const Models = () => {
  const [models, setModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://torchexpo.herokuapp.com/v1/models', {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.torchexpo+json;version=1',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setModels(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <Grid>
      <Row>
        {isLoading && (
          <Cell
            desktopColumns={6}
            tabletColumns={4}
            phoneColumns={3}
            align="middle"
          >
            <LinearProgress indeterminate />
            <p align="center">Loading Models ...</p>
          </Cell>
        )}
        {models.length > 0 &&
          models.map((model) => (
            <Cell
              key={model._id}
              desktopColumns={6}
              phoneColumns={4}
              tabletColumns={8}
            >
              <ModelCard model={model} />
            </Cell>
          ))}
      </Row>
    </Grid>
  );
};

export default Models;
