import React from "react";

export default WrappedComponent => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const props = this.props;
      return (
        <div className="bg-dots">
          <div className="page bg-linked-cells">
            <div className="container flex flex-dir--column flex-hor--center ">
              <div className="main-content-wrapper">
                <WrappedComponent {...props} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  return HOC;
};
