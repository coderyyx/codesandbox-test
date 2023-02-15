import React, { useRef, forwardRef, useState } from "react";

class FancyButton extends React.Component {
  constructor() {
    super();
    this.state = {
      normal: "test"
    };
  }
  focus() {
    // ...
    console.log("focus1");
  }

  test = () => {
    console.log("focus test");
  };
  // ...
  render() {
    console.log(this.props);
    const { children } = this.props;
    return <button>{children}</button>;
  }
}
const logProps = (Component) => {
  class LogProps extends React.Component {
    componentDidUpdate(prev) {
      console.log("prev.props=====>", prev);
      console.log("this.props=====>", this.props);
    }
    render() {
      const { forwardRef, ...rest } = this.props;

      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <Component ref={forwardRef} {...rest} />;
    }
  }

  const TempLogProps = forwardRef((props, ref) => {
    return <LogProps forwardRef={ref} {...props} />;
  });

  return TempLogProps;
};

export default logProps(FancyButton);
