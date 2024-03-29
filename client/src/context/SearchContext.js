import { createContext, useReducer } from "react";

const INITIAL_STATE={
    city:undefined,
    dates:[],
    Options:{
        adult:undefined,
        children:undefined,
        room:undefined
    },
};

//context
export const SearchContext=createContext(INITIAL_STATE)

//Action
const SearchReducer=(state,action) =>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload
        case "RESET_Search":
            return INITIAL_STATE;
        default:
            return state
    }
};

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
  
    return (
      <SearchContext.Provider
        value={{
          city: state.city,
          dates: state.dates,
          options: state.options,
          dispatch,
        }}
      >
        {children}
      </SearchContext.Provider>
    );
  };
