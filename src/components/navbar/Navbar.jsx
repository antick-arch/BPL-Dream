import navDoller from '../../assets/dollar_1.png'
import navLogo from '../../assets/logo.png'
const Navbar = () => {

    return (
        <div className="navbar">
            <div className="flex-1">
                <img src={navLogo} alt="nav_logo" />
            </div>
            <div className="">
                <button className="btn bg-white rounded-lg flex justify-between gap-2">
                    <span className='text-[1rem] font-bold'>0 Coin</span>
                    <img src={navDoller} alt="doller_logo" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;