import '../styles/Header.css'

export function Header( props ) {
    return (
        <header className={props.name + "-header header"}>
            <a href="/">
                <img src={props.logo} />
                <span className="sr-text">{props.siteName}</span>
            </a>
            {/* Navigation */}
            { props.nav }
        </header>
    )
}