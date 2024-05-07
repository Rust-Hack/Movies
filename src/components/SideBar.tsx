import Logo from "./sideBar/Logo/Logo";
import './sideBar.css'
import NavigateBtn from "./sideBar/NavigateBtn/NavigateBtn";

const SideBar = () => {
    return (
        <div className="sideBar">
            <Logo/>
            <NavigateBtn/>
        </div>
    );
}

export default SideBar;