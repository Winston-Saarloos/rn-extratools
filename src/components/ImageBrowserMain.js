import React, { Component } from 'react';
import './ImageBrowserMain.css';

function EmptyFunction() {
  console.log('This was an empty function.');
}

class ImageBrowserMain extends Component {
  
  render() {
    return (
      <div className="ImageBrowserMain">
        <div id="photoGrid">
          <div className="grid col-12" id="grid">
            <div className="grid-item" type="button" data-toggle="modal" data-target="#imageDetailModal" onClick={EmptyFunction}>
              <img alt="Image1" data-src="https://img.rec.net/4214c04942d846bbb4220e248650fcd0.jpg?width=500" className="grid-image" src="https://img.rec.net/4214c04942d846bbb4220e248650fcd0.jpg?width=500" />
            </div>
            <div className="grid-item" type="button" data-toggle="modal" data-target="#imageDetailModal" onClick={EmptyFunction}>
              <img alt="Image1" data-src="https://img.rec.net/4214c04942d846bbb4220e248650fcd0.jpg?width=500" className="grid-image" src="https://img.rec.net/4214c04942d846bbb4220e248650fcd0.jpg?width=500" />
            </div>
            <div className="grid-item" type="button" data-toggle="modal" data-target="#imageDetailModal" onClick={EmptyFunction}>
              <img alt="Image1" data-src="https://img.rec.net/4214c04942d846bbb4220e248650fcd0.jpg?width=500" className="grid-image" src="https://img.rec.net/4214c04942d846bbb4220e248650fcd0.jpg?width=500" />
            </div>
            <div className="grid-item" type="button" data-toggle="modal" data-target="#imageDetailModal" onClick={EmptyFunction}>
              <img alt="Image1" data-src="https://img.rec.net/4214c04942d846bbb4220e248650fcd0.jpg?width=500" className="grid-image" src="https://img.rec.net/4214c04942d846bbb4220e248650fcd0.jpg?width=500" />
            </div>
            <div className="grid-item" type="button" data-toggle="modal" data-target="#imageDetailModal" onClick={EmptyFunction}>
              <img alt="Image1" data-src="https://img.rec.net/4214c04942d846bbb4220e248650fcd0.jpg?width=500" className="grid-image" src="https://img.rec.net/4214c04942d846bbb4220e248650fcd0.jpg?width=500" />
            </div>
            <div className="grid-item" type="button" data-toggle="modal" data-target="#imageDetailModal" onClick={EmptyFunction}>
              <img alt="Image1" data-src="https://img.rec.net/4214c04942d846bbb4220e248650fcd0.jpg?width=500" className="grid-image" src="https://img.rec.net/4214c04942d846bbb4220e248650fcd0.jpg?width=500" />
            </div>
            <div className="grid-item" type="button" data-toggle="modal" data-target="#imageDetailModal" onClick={EmptyFunction}>
              <img alt="Image1" data-src="https://img.rec.net/4214c04942d846bbb4220e248650fcd0.jpg?width=500" className="grid-image" src="https://img.rec.net/4214c04942d846bbb4220e248650fcd0.jpg?width=500" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageBrowserMain;