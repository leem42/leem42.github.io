import * as React from 'react';

class Footer extends React.Component {
  public render() {
    return (
      <footer style={{position: "fixed", bottom: "0", width: "100%", zIndex: 3, background: "#f5f5f5"}}>
        <p className="mediumText">Last updated: 6/7/2020 </p>
      </footer>
    );
  }
}

export {Footer};
