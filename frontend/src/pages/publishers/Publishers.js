import React, { useState, useEffect } from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import LinearProgress from '@material/react-linear-progress';
import { Link } from 'react-router-dom';
import PublisherCard from '../../components/cards/PublisherCard';

const Publishers = () => {
  const [publishers, setPublishers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://torchexpo.herokuapp.com/v1/publishers', {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.torchexpo+json;version=1',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setPublishers(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <Grid align="center">
      <Row>
        {isLoading && (
          <Cell
            desktopColumns={6}
            tabletColumns={4}
            phoneColumns={3}
            align="middle"
          >
            <LinearProgress indeterminate />
            <p align="center">Loading Publishers ...</p>
          </Cell>
        )}
        {publishers.length > 0 &&
          publishers.map((publisher) => (
            <Cell
              key={publisher._id}
              desktopColumns={6}
              phoneColumns={4}
              tabletColumns={8}
            >
              <Link to={`/publishers/${publisher._id}`}>
                <PublisherCard publisher={publisher} />
              </Link>
            </Cell>
          ))}
      </Row>
    </Grid>
  );
};

export default Publishers;
