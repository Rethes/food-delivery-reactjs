import React, {useState} from 'react'
import './Home.css'
import Header from "../../components/Header/Header.jsx";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";
import AppDownload from "../../components/AppDownload/AppDownload.jsx";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay.jsx";

const Home = () => {
    const [category, setCategory] = useState("All")
    return (
        <div>
            {/*mounting the components in the home page */}
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category} />
            <AppDownload/>
        </div>
    )
}
export default Home
