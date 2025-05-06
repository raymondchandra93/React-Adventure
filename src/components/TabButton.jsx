function TabButton({children, onClick}) {
    return (
        <li>
            {/** The function name is without () because we want it to get executed by React when click happens, not when line of code is executed */}
            <button onClick={onClick}>{children}</button>
        </li>
    );
}

export default TabButton;