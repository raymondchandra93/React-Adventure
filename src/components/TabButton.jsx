function TabButton({children, isSelected, ...props}) {
    return (
        <li>
            {/** The function name is without () because we want it to get executed by React when click happens, not when line of code is executed */}
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    );
}

export default TabButton;