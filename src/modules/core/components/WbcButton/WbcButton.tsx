import * as React from "react";

type WbcButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const WbcButton: React.FC<WbcButtonProps> = (props) => {
	const { children, ...restProps } = props;
	return <button {...restProps}>{children}</button>;
};

export default WbcButton;
