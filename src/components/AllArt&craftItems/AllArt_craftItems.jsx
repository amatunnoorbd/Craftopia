import { useLoaderData } from "react-router-dom";
import TableRow from "../TableRow/TableRow";
import { useEffect } from "react";


const AllArt_craftItems = () => {

    const items = useLoaderData();

    useEffect(() => {
        document.title = 'All Art & Craft Items';
      }, []);


    return (
        <div className="overflow-x-auto lg:px-32 min-h-[80vh] pb-32">

            <h1 className="text-4xl font-bold text-center my-10 py-2 max-w-xl mx-auto bg-white">All Art & Craft Item List</h1>

            <div className="border-2 l:p-2 rounded-xl">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#90EE90] ">
                        <tr className="text-lg text-black">
                            <th>Image</th>
                            <th>Item Name</th>
                            <th className="hidden lg:block">Subcategory Name</th>
                            <th>Price</th>
                            <th className="hidden lg:block">Rating</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-200">

                        {items.map(item => <TableRow
                            key={item._id}
                            item={item}></TableRow>)}

                    </tbody>


                </table>

            </div>

        </div>
    );
};

export default AllArt_craftItems;