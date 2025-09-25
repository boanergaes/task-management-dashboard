
export default function AnchorLi({text, href}) {
    return (
        <a href={href}>
            <li>{text}</li>
        </a>
    )
}