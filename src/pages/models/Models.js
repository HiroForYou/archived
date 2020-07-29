import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import LinearProgress from '@material/react-linear-progress';
import { Link } from 'react-router-dom';
import ModelCard from '../../components/cards/ModelCard';

const Models = (props) => {
  const { publisher } = props;
  const [models, setModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const route =
      publisher && publisher._id ? `/publishers/${publisher._id}/` : '/';
    fetch(`https://torchexpo.herokuapp.com/v1${route}models`, {
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
  }, [publisher]);

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
              <Link to={`/models/${model._id}`}>
                <ModelCard model={model} />
              </Link>
            </Cell>
          ))}
      </Row>
    </Grid>
  );
};

Models.propTypes = {
  publisher: PropTypes.shape({
    _id: PropTypes.string,
  }),
};

Models.defaultProps = {
  publisher: {
    _id: null,
  },
};

export default Models;
