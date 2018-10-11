import React from "react";

export default WrappedComponent => {
  class HOC extends React.Component {
    render() {
      return (
        <div className="bg-dots">
          <div className="page  bg-linked-cells">
            <div className="container flex flex-dir--column flex-hor--center ">
              <div className="main-content-wrapper">
                <WrappedComponent />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  return HOC;
};
