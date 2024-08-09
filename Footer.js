import React from 'react';
import { Grid, Input, Button } from 'semantic-ui-react';

const Footer = () => (
  <div style={{ padding: '2em 0', backgroundColor: '#f1f1f1', marginTop: '2em' }}>
    <Grid container columns={3}>
      <Grid.Column>
        <h4>Explore</h4>
        <p>Home</p>
        <p>Questions</p>
        <p>Articles</p>
        <p>Tutorials</p>
      </Grid.Column>
      <Grid.Column>
        <h4>Support</h4>
        <p>FAQs</p>
        <p>Help</p>
        <p>Contact Us</p>
      </Grid.Column>
      <Grid.Column>
        <h4>Stay connected</h4>
        <Input action={{ color: 'teal', labelPosition: 'right', icon: 'mail', content: 'Subscribe' }} placeholder='Enter your email' />
      </Grid.Column>
    </Grid>
    <div style={{ textAlign: 'center', marginTop: '2em' }}>
      <p>DEV@Deakin 2022 | Privacy Policy | Terms | Code of Conduct</p>
    </div>
  </div>
);

export default Footer;
