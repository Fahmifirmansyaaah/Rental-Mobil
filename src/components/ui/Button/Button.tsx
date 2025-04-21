import styles from "./Button.module.css";

interface propsType {
  type?: "button" | "submit" | "reset";
  children: string;
  onClick?: () => void;
  className?: string;
  color?: "primary" | "secondary";
}

const Button = (props: propsType) => {
  const { type = "button", children, color = "primary", className } = props;
  return (
    <button className={`${styles.button} ${styles[`button-${color}`]} ${className}`} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
