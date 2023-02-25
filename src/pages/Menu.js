// import React from "react";
// import { MenuList } from "../helpers/MenuList";
// import MenuItem from "../components/MenuItem";
// import "../styles/Menu.css";

// function Menu() {
//   return (
//     <div className="menu">
//       <h1 className="menuTitle">Our Menu</h1>
//       <div className="menuList">
//         {MenuList.map((menuItem, key) => {
//           return (
//             <MenuItem
//               key={key}
//               image={menuItem.image}
//               name={menuItem.name}
//               price={menuItem.price}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Menu;

// export default Menu;
import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Logo from "../assets/kitchen-tools.png";
import Search from "../assets/search.png";



const APP_ID = "a52b4d43";
const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fafafa;
  border-radius: 10px;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 200px;
  border-radius: 10px;
`;
const RecipeName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 32px;
  font-family: 'Ubuntu', sans-serif;
`;
const SeeMoreText = styled.span`
  color: #0a0a0a;
  font-size: 18px;
  text-align: center;
  border: solid 1px #0a0a0a;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
  
`;

const IngredientsText = styled(SeeMoreText)`
  color: #0a0a0a;
  border: solid 1px #0a0a0a;
  margin-bottom: 12px;
`;
const SeeNewTab = styled(SeeMoreText)`
  color: #0a0a0a;
  border: solid 1px #0a0a0a;
`;
const RecipeComponent = (props) => {
  const [show, setShow] = useState("");

  const { label, image, ingredients, url } = props.recipe;
  return (
    <RecipeContainer>
      <Dialog
        onClose={() => console.log("adsadad")}
        aria-labelledby="simple-dialog-title"
        open={!!show}
      >
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
          <RecipeName>{label}</RecipeName>
          <table>
            <thead>
              <th>Ingredient</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr key={index} className="ingredient-list">
                  <td>{ingredient.text}</td>
                  <td>{ingredient.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <SeeNewTab onClick={() => window.open(url)}>See More</SeeNewTab>
          <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>
      <CoverImage src={image} alt={label} />
      <RecipeName>{label}</RecipeName>
      <IngredientsText onClick={() => setShow(!show)}>
        Ingredients
      </IngredientsText>
      <SeeMoreText onClick={() => window.open(url)}>
        See Complete Recipe
      </SeeMoreText>
    </RecipeContainer>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  background-color: #68A7AD;
  color: #fafafa;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  // box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: #fafafa;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const RecipeImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 15px;
`;
const Placeholder = styled.img`
  width: 150px;
  height: 150px;
  margin: 200px;
  opacity: 50%;
`;
const SearchInput = styled.input`
  color: #050505;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const RecipeListContainer = styled.div`
  display: flex;
  height: 813px;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
  background-color: #fafafa;
`;
const AppComponent = () => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [recipeList, updateRecipeList] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
      <Container>
      <Header>
        <AppName>
          <RecipeImage src={Logo} />
          Recipick
        </AppName>
        <SearchBox>
          <SearchIcon src={Search} />
          <SearchInput
            placeholder="Search Recipe"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>
      <RecipeListContainer>
        {recipeList?.length ? (
          recipeList.map((recipe, index) => (
            <RecipeComponent key={index} recipe={recipe.recipe} />
          ))
        ) : (
          <Placeholder src={Logo} />
        )}
      </RecipeListContainer>
    </Container>
    
  );
};

export default AppComponent;
