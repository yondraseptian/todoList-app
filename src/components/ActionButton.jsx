/* eslint-disable react/prop-types */
import PropType from "prop-types";
export const ActionButton = (props) => {
  const { children } = props;
  return <div className="action">{children}</div>;
};
ActionButton.propsTypes = {
  children: PropType.node.isRequired,
};
