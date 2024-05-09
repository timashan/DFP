import { FC, PropsWithChildren, ReactPropTypes, Attributes } from "react";
import styles from "./index.module.scss";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  theme?: string;
}

const Btn: FC<Props> = ({ children, onClick, theme }) => {
  return (
    // <div >
    <button
      className={`${styles.container} ${theme && styles[theme]}`}
      onClick={onClick}
    >
      {children}
    </button>
    // </div>
  );
};

export default Btn;

export const ToolBarBtn: FC<Props> = (p) => <Btn theme="toolbar" {...p} />;
export const NodeToolBarBtn: FC<Props> = (p) => (
  <Btn theme="nodetoolbar" {...p} />
);
