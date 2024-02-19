import React from 'react';
import './style.css';

export const Button = (props: { children: JSX.Element, onClick: () => void }) => {
    return (
        <button onClick={props.onClick}>{props.children}</button>
    );
}