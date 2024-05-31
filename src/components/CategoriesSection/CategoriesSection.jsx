import { useEffect, useState } from "react";
import CategoriesCard from "../CategoriesCard/CategoriesCard";

const CategoriesSection = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-site-beta.vercel.app/categoriesItems')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])


    return (
        <div className="mb-32 mt-20 ">
            <h1 className='bg-white pt-5 text-4xl font-bold text-center pb-5 max-w-xl mx-auto'>Art & Craft Categories</h1>

            <div className="grid lg:grid-cols-3 max-w-7xl lg:mx-auto  lg:px-10 gap-7">
                {
                    items.map(item => <CategoriesCard
                    key={item._id}
                    item={item}></CategoriesCard>)
                }
            </div>


        </div>
    );
};

export default CategoriesSection;