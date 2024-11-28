import styles from './Button.module.css';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> 

export function Button({children, ...props}: ButtonProps) {

return (
    <button className={styles.container} {...props}>
        {children}
    </button>
)

}