import { useState } from 'react'
import './ImageBrowserHeader.css'

export default function ImageBrowserHeader({ imageCount, onUpdate }) {
    let url = "https://github.com/Winston-Saarloos/rn-extratools";

    const [username, setUsername] = useState('')

    function EmptyFunction() {
        console.log('This was an empty function.');
    }

    return (
      <div className="ImageBrowserHeader">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" id="lblVersionNumber" href={url}>Version 0.0.1</a>
            <div id="lblImageResultNumber">Image Results: {imageCount}</div>
          <button type="button" className="btn btn-secondary" onClick={EmptyFunction} id="btnFeedLibrary" value="0">User Photo Feed</button>
          <button type="button" className="btn btn-secondary oldestNewest" onClick={EmptyFunction} id="btnOldestToNewest" value="0">Newest to Oldest</button>

          <div className="input-group w-25 mr-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">@</span>
            </div>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={event => setUsername(event.target.value)} />
          </div>
          <button className="btn btn-success my-2 my-sm-0" id="btnLoad" onClick={() => onUpdate(username)} >Load Images</button>
        </nav>
      </div>
    );
  }