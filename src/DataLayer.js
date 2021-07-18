import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

const DataLayer = (props) => {
    return (
        <DataLayerContext.Provider
            value={useReducer(props.reducer, props.initialState)}
        >
            {props.children}
        </DataLayerContext.Provider>
    );
};

export const DataLayerContextValue = () => useContext(DataLayerContext);

export default DataLayer;
