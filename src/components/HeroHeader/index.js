import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

const HeroHeader = (props) => (
  <div>
    <p>Image 1</p>
    <Image media={props.fields.heroImage} />
  </div>
);

export default HeroHeader;
