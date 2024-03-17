
const Cooking = ({ cookingRecipes }) => {
    // console.log(cookingRecipes);
    let count = 1;
    let time = 0;
    let calories = 0;
    for (const cook of cookingRecipes) {
        const Time = parseInt(cook.preparation_time)
        const Calories = parseInt(cook.calories)
        console.log(cook);
        time += Time;
        calories += Calories
    }
    return (
        <div>
            <h2 className="text-2xl font-semibold text-center border-b m-10 ">Currently cooking: {cookingRecipes.length}</h2>

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
                        {/* row */}
                        {
                            cookingRecipes.map(cookingRecipe => <tr className="bg-[#28282808]" key={cookingRecipe.recipe_id}>
                                <th>{count++}</th>
                                <td>{cookingRecipe.recipe_name}</td>
                                <td>{cookingRecipe.preparation_time}</td>
                                <td>{cookingRecipe.calories} Calories</td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <div className="px-10 flex justify-between py-3 gap-5 text-base text-[#282828CC] font-semibold">
                    <p>Total Time = {time} minutes</p>
                    <p>Total Calories = {calories} Calories</p>
                </div>
            </div>

        </div>
    );
};

export default Cooking;