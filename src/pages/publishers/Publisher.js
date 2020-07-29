import React, { useState, useEffect } from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import LinearProgress from '@material/react-linear-progress';
import CardType from '../../components/cards/CardType';
import Models from '../models/Models';

const Publisher = (props) => {
  const publisherId = props.match.params.id; // eslint-disable-line
  const [publisher, setPublisher] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://torchexpo.herokuapp.com/v1/publishers/${publisherId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.torchexpo+json;version=1',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setPublisher(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [publisherId]);

  return (
    <>
      <Grid style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
        <Row>
          {isLoading && (
            <Cell
              desktopColumns={6}
              tabletColumns={4}
              phoneColumns={3}
              align="middle"
            >
              <LinearProgress indeterminate />
              <p align="center">Loading Publisher ...</p>
            </Cell>
          )}
          {publisher && (
            <Cell desktopColumns={9} phoneColumns={4} tabletColumns={8}>
              <CardType name="Publisher" icon="people" />
              <Row>
                <Cell desktopColumns={9} phoneColumns={3} tabletColumns={6}>
                  <h2>{publisher.name}</h2>
                  <p>{publisher.description}</p>
                </Cell>
                <Cell desktopColumns={3} phoneColumns={1} tabletColumns={2}>
                  <img
                    src={publisher.imageLink}
                    width="75%"
                    alt={publisher.name}
                  />
                </Cell>
              </Row>
            </Cell>
          )}
        </Row>
      </Grid>
      <Models publisher={publisher} />
    </>
  );
};

export default Publisher;
