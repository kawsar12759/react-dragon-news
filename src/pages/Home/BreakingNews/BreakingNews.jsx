import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex mt-5">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={150} className="bg-[#F3F3F3] text-[#403F3F] font-semibold text-lg">
                <Link className="mr-12" to="/">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-12" to="/">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-12" to="/">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;