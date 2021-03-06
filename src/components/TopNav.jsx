
/**
 * 
 * @param {mainLogo, navItems, onMainLogoClick, onItemClick, itemEmeraldStyle} props 
 * @returns 
 */
export const TopNav = (props) => {

    let mainLogo = props.mainLogo;
    let navItems = props.navItems;

    return (
        <div className="w-full h-[64px] px-3 rounded-b-lg bg-emerald-primary-screen fixed 
        top-0 left-0 right-0 z-10 inline-flex flex-row items-center">
            <img src={mainLogo} alt="main logo" className="h-11" onClick={props.onMainLogoClick}/>
            <ul className="inline-flex flex-row items-center absolute right-1">{
                navItems.map((item, index) => {
                    return (
                        <li key={index} onClick={() => props.onItemClick(index)}>
                            <div className={`w-auto inline-flex flex-row items-center m-2
                                hover:bg-emerald-primary/30 rounded-lg transition-all ${props.itemEmeraldStyle}`}>
                                <img src={item.icon} alt="nav icon" className="h-7 m-2"/>
                                <p className="mr-3">{item.title}</p>
                            </div>
                        </li>
                    )
                })
            }</ul>
        </div>
    )
}