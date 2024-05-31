import { useEffect } from "react";
import Banner from "../Banner/Banner";
import CraftItemSection from "../CraftItemSection/CraftItemSection";
import CategoriesSection from "../CategoriesSection/CategoriesSection";
import LetestCollection from "../LetestCollection/LetestCollection";
import Contract from "../Contract/Contract";


const Home = () => {

    useEffect(() => {
        document.title = 'Home';
      }, []);

    return (
        <div className="">
            <Banner></Banner>
            <CraftItemSection></CraftItemSection>
            <LetestCollection></LetestCollection>
            <CategoriesSection></CategoriesSection>
            <Contract></Contract>

     </div>
    );
};

export default Home;