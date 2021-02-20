import './ImageBrowserHeader.css';

function ImageBrowserHeader() {
    let url = "";

    function EmptyFunction() {
        console.log('This was an empty function.');
    }

    return (
      <div className="ImageBrowserHeader">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" id="lblVersionNumber" href={url}>Version W.I.P</a>
            <div id="lblImageResultNumber">Image Results: 0</div>
            <button type="button" className="btn btn-secondary" onClick={EmptyFunction} id="btnFeedLibrary" value="0">User Photo Feed</button>
            <button type="button" className="btn btn-secondary oldestNewest" onClick={EmptyFunction} id="btnOldestToNewest" value="0">Newest to Oldest</button>

            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="RR username" aria-label="@ RecNet Username" id="txtUsername" />
                <button className="btn btn-success my-2 my-sm-0" id="btnLoad" onClick={EmptyFunction}>Load Images</button>
            </form>
        </nav>
      </div>
    );
  }
  
  export default ImageBrowserHeader;