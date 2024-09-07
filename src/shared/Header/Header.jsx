import logo from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mb-4 mt-10' src={logo} alt="" />
            <p className='mb-1 text-lg text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;