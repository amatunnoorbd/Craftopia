import { useEffect, useState } from "react";
import SubCategoryItemCard from "../SubCategoryItemCard/SubCategoryItemCard";


const LandscapePainting = () => {

    useEffect(() => {
        document.title = 'Landscape Painting';
      }, []);

    const [items , setItems ] = useState([]);

    useEffect(() =>{
        fetch('https://assignment-10-server-side-gules.vercel.app/allSubcategoryItems')
        .then(res => res.json())
        .then(datas =>{
            const data = datas.filter(data => data.subcategory_name === "Landscape Painting");
            // console.log(data);
            setItems(data);
        })

    },[])

    console.log(items);

    return (
        <div className="mt-10 mb-24 min-h-[70vh]">
            <h1 className="bg-white py-3 rounded mx-auto max-w-xl text-3xl lg:text-5xl mb-6 font-semibold text-center">Landscape Painting</h1>
            <div className="grid lg:grid-cols-2 max-w-4xl mx-5 lg:mx-auto gap-4 justify-center">
                {
                    items.map(item => <SubCategoryItemCard 
                    key={item._id}
                    item={item}></SubCategoryItemCard>)
                }
            </div>
        </div>
    );
};

export default LandscapePainting;