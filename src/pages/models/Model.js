import React, { useState, useEffect } from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import MaterialIcon from '@material/react-material-icon';
import LinearProgress from '@material/react-linear-progress';
import CardType from '../../components/cards/CardType';

const Model = (props) => {
  const modelId = props.match.params.id; // eslint-disable-line
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://torchexpo.herokuapp.com/v1/models/${modelId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.torchexpo+json;version=1',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setModel(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [modelId]);

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
            <p align="center">Loading Model ...</p>
          </Cell>
        )}
        {model && (
          <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
            <CardType name={model.task[0].name} icon="visibility" />
            <h2>{model.name}</h2>
            <MaterialIcon
              className="inherit-color"
              style={{ verticalAlign: 'middle', paddingRight: '0.5rem' }}
              icon="people"
            />
            <span>{model.publisher.length > 0 && model.publisher[0].name}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <MaterialIcon
              className="inherit-color"
              style={{ verticalAlign: 'middle', paddingRight: '0.5rem' }}
              icon="schedule"
            />
            <span>{new Date(model.updatedAt).toLocaleDateString()}</span>
            <p>{model.description}</p>
          </Cell>
        )}
      </Row>
    </Grid>
  );
};

export default Model;
