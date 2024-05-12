import Logo from "./Logo/Logo";
import NavigateBtn from "./NavigateBtn/NavigateBtn";
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="sideBar">
            <Logo/>
            <NavigateBtn/>
        </div>
    )
}

export default SideBar;