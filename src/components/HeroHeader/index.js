import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { Image } from '@sitecore-jss/sitecore-jss-react';

const HeroHeader = (props) => (
  <div className="f-header__bottom">
    <div className="f-header__brand">
      <a href="/" className="f-header__logo" title="British Heart Foundation - Logo" tabIndex="0">
        <Image media={props.fields.heroImage} />
      </a>
      <h1>
        <a href="/" title="Form title" tabIndex="0">
          Forms v2 - Timeout
        </a>
      </h1>
    </div>

    <a
      href="#f-modal__close"
      className="cta cta__secondary cta__cancel"
      tabIndex="0"
      rel="modal:open"
    >
      <i className="bhfi bhfi-closemobile" aria-hidden="true"></i>
      <span>Cancel</span>
    </a>
  </div>
);

export default HeroHeader;
