import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../shared/Header/Header";
import LeftSideNav from "../../shared/LeftSideNav/LeftSideNav";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightSideNav/RightSIdeNav";
import BreakingNews from "../Home/BreakingNews/BreakingNews";
import NewsCard from "../Home/NewsCard";
import { useEffect, useState } from "react";


const CategoryNews = () => {
    
    const allNews = useLoaderData();
    const { id } = useParams();
    const [selectedNews, setSelectedNews] = useState([]);

    useEffect(() => {
        if (id === "0") {
            setSelectedNews(allNews);
          } else {
            const selected = allNews.filter((aNews) => aNews.category_id === id);
            setSelectedNews(selected);
          }
    }, [id])
    
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    {
                        selectedNews.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default CategoryNews;