import { FaRegBookmark } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { _id, title, author, thumbnail_url, details, rating, total_view } = news;
    return (
        <div className="border mb-4 rounded-md">
            <div className="bg-[#F3F3F3] flex items-center justify-between py-3 px-4">
                <div className="flex items-center">
                    <img style={{ height: '40px', width: '40px' }} className="rounded-full mr-4  " src={author.img} alt="" />
                    <div>
                        <p className="text-base font-semibold text-[#403F3F]">{author.name ? author.name : 'Anonymous'}</p>
                        <p className="text-[#403F3F] text-sm">{author.published_date?.split(' ')[0]}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <FaRegBookmark className="text-xl text-[#706F6F] mr-3" />
                    <IoShareSocialOutline className="text-xl text-[#706F6F]" />
                </div>
            </div>
            <div className="px-4">
                <h4 className="text-xl font-bold text-[#403F3F] my-4">{title}</h4>
                <img style={{ height: '260px' }} className="w-full mb-4" src={thumbnail_url} alt="" />
                <p className="text-base text-[#706F6F]">{details.slice(0, 200)}...</p>
                <p className="font-semibold text-base text-[#FF8C47] mb-2"><Link to={`/news/${_id}`}>Read More</Link></p>
                <hr />
                <div className="py-3 flex justify-between items-center">
                    <div className="flex  text-[#FF8C47]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <p className="text-[#706F6F] text-base font-medium ml-2">{rating.number}</p>
                    </div>
                    <div className="flex items-center text-base text-[#706F6F] font-medium">
                        <FaEye className="text-xl mr-2"/>
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;