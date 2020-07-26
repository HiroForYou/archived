import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Card, { CardPrimaryContent } from '@material/react-card';
import MaterialIcon from '@material/react-material-icon';

const Home = () => {
  return (
    <Grid>
      <Row>
        <Cell desktopColumns={8} phoneColumns={4} tabletColumns={8}>
          <h1>Welcome to TorchExpo</h1>
          <p>
            This is a collection of trained machine learning models in PyTorch
            all under same zoo and ready for deployment. Thanks for playing a
            part in our community.
          </p>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
          <h2>Browse by Research Area</h2>
          <br />
          <Row>
            <Cell desktopColumns={3} phoneColumns={2} tabletColumns={2}>
              <Card>
                <CardPrimaryContent style={{ padding: '0px 16px 16px 16px' }}>
                  <h5>
                    <MaterialIcon
                      style={{
                        verticalAlign: 'middle',
                        paddingRight: '0.5rem',
                      }}
                      icon="visibility"
                    />
                  </h5>
                  <span>VISION</span>
                  <ul type="square" style={{ lineHeight: '1.5rem' }}>
                    <li>Image Classification</li>
                    <li>Image Segmentation</li>
                    <li>Object Detection</li>
                  </ul>
                </CardPrimaryContent>
              </Card>
            </Cell>
            <Cell desktopColumns={3} phoneColumns={2} tabletColumns={2}>
              <Card>
                <CardPrimaryContent style={{ padding: '0px 16px 16px 16px' }}>
                  <h5>
                    <MaterialIcon
                      style={{
                        verticalAlign: 'middle',
                        paddingRight: '0.5rem',
                      }}
                      icon="message"
                    />
                  </h5>
                  <span>NLP</span>
                  <ul type="square" style={{ lineHeight: '1.5rem' }}>
                    <li>Text Classification</li>
                  </ul>
                </CardPrimaryContent>
              </Card>
            </Cell>
            <Cell desktopColumns={3} phoneColumns={2} tabletColumns={2}>
              <Card>
                <CardPrimaryContent style={{ padding: '0px 16px 16px 16px' }}>
                  <h5>
                    <MaterialIcon
                      style={{
                        verticalAlign: 'middle',
                        paddingRight: '0.5rem',
                      }}
                      icon="audiotrack"
                    />
                  </h5>
                  <span>AUDIO</span>
                  <ul type="square" style={{ lineHeight: '1.5rem' }}>
                    <li>Text-to-Speech Synthesis</li>
                  </ul>
                </CardPrimaryContent>
              </Card>
            </Cell>
            <Cell desktopColumns={3} phoneColumns={2} tabletColumns={2}>
              <Card>
                <CardPrimaryContent style={{ padding: '0px 16px 16px 16px' }}>
                  <h5>
                    <MaterialIcon
                      style={{
                        verticalAlign: 'middle',
                        paddingRight: '0.5rem',
                      }}
                      icon="grid_on"
                    />
                  </h5>
                  <span>GENERATIVE</span>
                  <ul type="square" style={{ lineHeight: '1.5rem' }}>
                    <li>Image Generation</li>
                  </ul>
                </CardPrimaryContent>
              </Card>
            </Cell>
          </Row>
        </Cell>
      </Row>
    </Grid>
  );
};

export default Home;
