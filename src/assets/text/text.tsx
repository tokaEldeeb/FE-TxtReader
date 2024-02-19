import './style.css';

export const Body = (props: { children: JSX.Element }) => {
    return (
        <p className="body">{props.children}</p>
    );
}

export const Title = (props: { children: JSX.Element }) => {
    return (
        <h1 className="title">{props.children}</h1>
    );
}

export const SubTitle = (props: { children: JSX.Element }) => {
    return (
        <p className="sub-title">{props.children}</p>
    );
}