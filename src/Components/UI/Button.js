import './Button.css';

const Button = (props) => {
    return (
        <div className={`${props.className} ${'button'}`}>
        {props.children}
        </div>
        );
}

export default Button;