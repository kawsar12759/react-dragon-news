import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../shared/Header/Header";
import RightSideNav from "../../shared/RightSideNav/RightSIdeNav";
import Navbar from "../../shared/Navbar/Navbar";
import { useEffect, useState } from "react";


const News = () => {
    const { id } = useParams();
    const [newsDetails, setNewsDetails] = useState([]);
 
    const allNews = useLoaderData();

    
    useEffect(()=>{
        if(allNews.length>0)
        {
            const newsD = allNews.find(aNews => aNews._id===id);
            setNewsDetails(newsD);
        }
    },[])

    const { _id, title, author, image_url, details, rating, total_view } = newsDetails;
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 p-4 border rounded-lg h-fit">
                    <img className="w-full mb-4" src={image_url} alt="" />
                    <h4 className="text-2xl font-bold text-[#403F3F] leading-normal mb-4">{title}</h4>
                    <p className="text-[#706F6F] text-base">{details}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;