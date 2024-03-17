
const Recipe = ({ recipe ,handleCook}) => {
    const { image_url, recipe_name, short_description, ingredients, calories, preparation_time } = recipe;
    return (
            <div className="card  bg-base-100 shadow-xl border border-[#28282833]">
                <figure className="px-10 pt-10">
                    <img src={image_url} alt="Food" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title ">{recipe_name}</h2>
                    <p className="text-base text-[#878787] fira">{short_description}</p>
                    <div className="border-y py-5">
                        <h3 className="text-lg font-medium">Ingredients: {ingredients.length}</h3>
                        <ul className="text-[#878787] list-disc px-5">
                            {ingredients.map((ingredient,idx)=><li key={idx}>{ingredient}</li>)}
                        </ul>
                    </div>
                    <div className="flex justify-between items-center text-[#282828CC] text-base">
                        <div className="flex gap-1 items-center">
                            <img src="../../../../public/icon/Frame (1).png" alt="" />
                            <p>{preparation_time}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img src="../../../../public/icon/Frame.png" alt="" />
                            <p>{calories} Calories</p>
                        </div>
                    </div>

                    <div className="card-actions mt-2">
                        <button onClick={()=>handleCook(recipe)}  className="btn bg-[#0BE58A] rounded-full text-lg px-6">Want to Cook</button>
                    </div>
                </div>
            </div>
    );
};

export default Recipe;