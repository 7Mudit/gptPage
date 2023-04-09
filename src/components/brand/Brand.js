import React from 'react';
import './Brand.css';
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='Not Found' />
    </div>
    <div>
      <img src={slack}  alt='Not Found' />
    </div>
    <div>
      <img src={atlassian} alt='Not Found'  />
    </div>
    <div>
      <img src={dropbox} alt='Not Found'  />
    </div>
    <div>
      <img src={shopify}  alt='Not Found' />
    </div>
  </div>
);

export default Brand;
