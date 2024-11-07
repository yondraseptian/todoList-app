import PropType from "prop-types";
import styles from "../styles/style.module.css";
export const ActionButton = (props) => {
  const { children } = props;
  return <div className={styles.actionButton}>{children}</div>;
};
ActionButton.propsTypes = {
  children: PropType.node.isRequired,
};
