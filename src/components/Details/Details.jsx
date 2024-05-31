import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Details = () => {

    const item = useLoaderData();
    console.log(item);
    const {
        item_name,
        price,
        image,
        subcategory_name,
        rating,
        customization,
        processing_time,
        stockStatus,
        short_description,
        user_name,
        user_email,
    } = item;


    return (
        <div className="border rounded mx-0 lg:mx-20 lg:mt-10 mb-32 p-5 lg:p-8 bg-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-8">

            <section className=" lg:h-[670px]  w-full rounded-2xl ">
                <img className="w-full h-full rounded-md" src={image} alt="" />
            </section>

            <section className="bg-white rounded-md px-6 lg:px-12 pt-6">

                <h1 className="text-2xl lg:text-4xl font-bold">{item_name}</h1>
                <p className="text-xl font-medium py-4">Category : {subcategory_name}</p>

                <div className="text-xl font-medium pb-6 pt-3 border-y-2 space-y-3">
                    <p className='pt-2'>Price : {price}</p>
                    <div className="flex items-center gap-2 ">
                        <p className=''>
                            Rating : {rating}
                        </p>
                        <FaStar />
                    </div>
                    <p> Customization: {customization}</p>
                    <p> Stock Status: {stockStatus}</p>
                    <p>Processing Time : {processing_time}</p>
                </div>

                <div className="py-6 text-lg">
                    <p className="text-xl font-bold pb-2">Description :</p>
                    {short_description}</div>

                {
                    (user_email && user_name) && 
                        <div className="text-xl font-medium pb-6 pt-4 border-t-2 space-y-3">
                            <p> Creator Name : {user_name}</p>
                            <p> Creator Email : {user_email}</p>
                        </div>   
                }


                <Link to='/' className="mt-2">
                    <button className="btn mb-5 lg:mb-10 btn-success text-white">Back to Home Page</button>
                </Link>


            </section>
        </div>
    );
};

export default Details;