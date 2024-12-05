function Nav({ navList }) {
    return (
        <nav className="navbar navbar-expand-lg" aria-label="Main Navigation" role="navigation">
            <ul className="navbar-nav">
            {navList.map((item, index) => (
                <li key={index}>
                <a className="navbar-nav" href={item.href}>{item.label}</a>
                </li>
            ))}
            </ul>
        </nav>
    );
}
export default Nav;