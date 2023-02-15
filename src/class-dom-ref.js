import React from "react";

class ClassDomRef extends React.Component {
  render() {
    const { forwardRef, ...rest } = this.props;

    // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
    return <button ref={this.props.test}>test2</button>;
  }
}

export default ClassDomRef;
