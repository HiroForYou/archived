import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';

const Home = () => {
  return (
    <Grid>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <h1>TorchExpo Beta Release is under construction</h1>
          <h2>
            Thanks for your interest, public beta will be released in October.
            Stay tuned!
          </h2>
          <p>
            Contact
            {" "}
            <a style={{ color: '#812ce5' }} href="mailto:prabhuomkar@pm.me">
              prabhuomkar@pm.me
            </a>
            {" "}
            in case if you have any queries
          </p>
        </Cell>
      </Row>
    </Grid>
  );
};

export default Home;
