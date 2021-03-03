import './ImageBrowserMain.css';
//import PropTypes from 'prop-types';
//import React, { useState, useEffect, useRef } from "react";
//import classnames from 'classnames';
//import styles from './ImageBrowserMain.css';

function EmptyFunction() {
  console.log('This was an empty function.');
}

export default function ImageBrowserMain( { images } ) {

  return (
    <div className="ImageBrowserMain">
      <div id="photoGrid">
        <div className="grid col-12" id="grid">

          {images.map((image) => (
            <div key={image.Id} className="grid-item" type="button" data-toggle="modal" data-target="#imageDetailModal" onClick={EmptyFunction}>
              <img alt="grid-item" className="grid-image" src={`https://img.rec.net/${image.ImageName}?width=500`} loading="lazy" />
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}