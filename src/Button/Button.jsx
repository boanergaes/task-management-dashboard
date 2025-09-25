import './Button.css'

export default function Button({className, content, btn_title}) {
    return (
        <button className={className} title={btn_title}>
            {content}
        </button>
    )
}