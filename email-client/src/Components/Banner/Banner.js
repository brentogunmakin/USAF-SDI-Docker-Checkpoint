import './Banner.css';
import mailLogo from './Logo.png';
import userLogo from './User.png';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Banner = () => {
    return (
        <>
        <header className='bannerStyle'>
            <MenuIcon id='Logo'/>
            <input id='EmailSearchBar' placeholder='Search Mail'/>
            <AccountCircleIcon id='Logo'/>
        </header>
        </>

    )
}


export default Banner;