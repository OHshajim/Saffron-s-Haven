// import { useState } from "react";
import Cooking from "./Cooking";

const Cook = ({ CookRecipes ,handleCooking ,cookingRecipes}) => {

    let count = 1;

    return (
        <div>
            <div className="border border-[#28282833] rounded-2xl py-8  ">
                {/* cook part */}
                <h2 className="text-2xl font-semibold text-center border-b mx-8">Want to cook: {CookRecipes.length}</h2>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row  */}
                            {CookRecipes.map(CookRecipe => <tr key={CookRecipe.recipe_id} className="bg-[#28282808] ">
                                <th>{count++}</th>
                                <td>{CookRecipe.recipe_name}</td>
                                <td>{CookRecipe.preparation_time}</td>
                                <td>{CookRecipe.calories} Calories</td>
                                <td className="card-actions">
                                    <button onClick={() => handleCooking(CookRecipe)} className="btn  bg-[#0BE58A] rounded-full text-base">Preparing</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>

                {/* cooking part */}
                <Cooking cookingRecipes={cookingRecipes}></Cooking>
            </div>

        </div>
    );
};

export default Cook;