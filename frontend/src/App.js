import React, { useState, useRef } from 'react';
import { Container, Card, CardContent, makeStyles, Grid } from '@material-ui/core';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';


function App() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultFile, setScanResultFile] = useState(null);
  const [scanResultWebCam, setScanResultWebCam] = useState('');
  const [auhentic, setAuthentic] = useState(false);
  const classes = useStyles();
  const qrRef = useRef(null);

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  }

  return (
    <Container className={classes.conatiner}>
      <Card>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h3 style={{fontSize: '2rem'}}>Fake Product Authenticator</h3>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <QrReader
                  delay={300}
                  style={{ width: '20rem' }}
                  onError={handleErrorWebCam}
                  onScan={handleScanWebCam}
                />
              </Grid>
            </Grid>
            <h3 style={{textAlign: 'center'}}>Scanned By WebCam Code:</h3>
            {{scanResultFile} && <h3 style={{textAlign: 'center'}}>{scanResultWebCam == 'http://en.m.wikipedia.org' ? 'The Product is authentic ✅' : 'The product is fake ❎'}</h3>}
          </CardContent>
        </div>
      </Card>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  conatiner: {
    marginTop: 10
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#ffff',
    color: 'black',
    padding: 20
  },
  btn: {
    marginTop: 10,
    marginBottom: 20
  }
}));
export default App;
