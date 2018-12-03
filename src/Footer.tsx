import * as React from 'react';

class Footer extends React.Component {
  public render() {
    return (
      <footer style={{position: "fixed", bottom: "0", width: "100%", zIndex: 3, background: "#f5f5f5"}}>
        <p className="mediumText">Last updated: 11/4/2018 </p>
      </footer>
    );
  }
}

export {Footer};
