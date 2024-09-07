import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-4">
                <h2 className="text-xl mb-2 text-[#403F3F] font-semibold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login with GitHub
                </button>
            </div>
            <div className="p-4 mb-6 text-[#706F6F]">
                <h2 className="text-xl mb-4 text-[#403F3F] font-semibold">Find us on</h2>
                <a className="p-4 flex items-center text-lg border rounded-t-lg" href="">
                <FaFacebook className="mr-2"/>
                <span>Facebook</span>
                </a>
                <a className="p-4 flex items-center text-lg border-x " href="">
                <FaTwitter className="mr-2"/>
                <span>Twitter</span>
                </a>
                <a className="p-4 flex items-center text-lg border rounded-b-lg" href="">
                <FaInstagram className="mr-2"/>
                <span>Instagram</span>
                </a>
            </div>
            <div className="p-4 space-y-3 mb-4">
                <h2 className="text-xl font-semibold text-[#403F3F]">Q Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;