import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Cook from "./Cook/Cook";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
    const [Recipes, SetRecipe] = useState([]);
    useEffect(() => {
        fetch('../../../../public/Recipes data/Recipes.JSON')
            .then(res => res.json())
            .then(data => SetRecipe(data))
    }, [])

    const [CookRecipes, setCookRecipe] = useState([]);
    const handleCook = (recipe) => {
        let newCookRecipes = [...CookRecipes, recipe]
        setCookRecipe(newCookRecipes)
        const notify = () => toast("Wow so easy!");
        notify()
        
        console.log(Recipes);
        let count = 0;
        for (const cook of CookRecipes) {
            if (cook.recipe_id === recipe.recipe_id)
            {
            count+=1
            console.log(count)
            
        }
        }
    }

    // for cook 
    const [cookingRecipes, setCookingRecipe] = useState([])
    function removeItem(cookingRecipe) {
        const remaining = CookRecipes.filter(cook => cookingRecipe.recipe_name !== cook.recipe_name)
        setCookRecipe([])
        setCookRecipe(remaining)
    }
    const handleCooking = (cookingRecipe) => {
        // console.log(cookingRecipe);
        const newCookingRecipe = [...cookingRecipes, cookingRecipe]
        setCookingRecipe(newCookingRecipe)
        // console.log(cookingRecipe);
        // console.log(CookRecipes);
        removeItem(cookingRecipe)
    }

    return (
        <div className="my-20">
            <h1 className="text-center text-4xl font-semibold">Our Recipes</h1>
            <p className="text-center text-[#150B2B99]">The taste of your food recipes is nothing short of extraordinary. Each dish is a harmonious blend of flavors, carefully balanced to tantalize the taste buds. Whether you are crafting a spicy curry, a comforting bowl of soup, or a decadent dessert, your keen understanding of flavor profiles allows you .</p>

            <div className="my-10 flex flex-col md:flex-row gap-5">

                {/* recipe cart */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 flex-1">
                    {
                        Recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleCook={handleCook}></Recipe>)
                    }
                </div>

                {/* cooking part */}
                <div>
                    <Cook CookRecipes={CookRecipes} handleCooking={handleCooking} cookingRecipes={cookingRecipes}></Cook>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Recipes;