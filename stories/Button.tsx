import React, { FunctionComponent } from 'react';

type ButtonProps = {
    title: string;
    number: 4
}

const Button: FunctionComponent<ButtonProps> = props => (
    <button>{props.title}</button>
)

export default Button;