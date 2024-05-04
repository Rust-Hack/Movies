import Logo from "./sideBar/Logo";
import '../styles/sideBar/sideBar.css'
import NavigateBtn from "./sideBar/NavigateBtn";

const SideBar = () => {
    return (
        <div className="sideBar">
            <Logo/>
            <NavigateBtn/>
        </div>
    );
}

export default SideBar;