import React from 'react';
import './button.css';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant: 'primary' | 'secondary';
}

export const Button = ({
	children,
	className = '',
	variant,
	...props
}: Props) => {
	return (
		<button className={`tk-soleil button ${variant} ${className}`} {...props}>
			{children}
		</button>
	);
};
