import { createContext } from "react";

const DurationContext = createContext();
const DistanceContext = createContext();
const SelectedDateContext = createContext();
const SelectionButtonContext = createContext();
const UnitSelectionContext = createContext('km3');


console.log("createContext!!");
export { DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext, UnitSelectionContext};