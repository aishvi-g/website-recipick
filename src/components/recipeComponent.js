import styled from "styled-components";

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  box-shadow: 0 3px 10px 0 #aaa;
  width : 300px;

`;

export const CoverImage = styled.img`
  height: 200px;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  margin: 10px;
  font-weight: bold;
  color: black;
`;

export const IngredientsText = styled.span`
  font-size: 18px;
  margin-bottom: 12px;
  border: solid 1px green;
  cursor: pointer;
  color: green;
  padding : 10px 15px;
  border-radius: 4px;
  text-align: center;

`;

export const SeeMoreText = styled(IngredientsText)`
  color: #eb3300;
  bprder: solid 1px #eb3300;
`;