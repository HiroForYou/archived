import React from 'react';
import { Row, Cell, Grid } from '@material/react-layout-grid';

const Contact = () => {
  return (
    <Grid>
      <Row>
        <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
          <h2>Contact us</h2>
          <br />
          {/* <a href="https://instagram.com/torchexpo">Instagram</a> &nbsp;&nbsp; <a href="https://twitter.com/torchexpo">Twitter</a>
          <br />
          <br /> */}
          You can contact us at torchexpo [at] gmail [dot] com for following
          issues:
          <br />
          <br />
          <ul style={{ lineHeight: '1.5rem' }}>
            <li>
              For questions or issues related to models, tasks or publishers.
            </li>
            <li>For publishing/updating a task/model.</li>
            <li>For reporting a bug or reporting a page on the website.</li>
            <li>For suggestions/feedback :)</li>
          </ul>
        </Cell>
      </Row>
    </Grid>
  );
};

export default Contact;
