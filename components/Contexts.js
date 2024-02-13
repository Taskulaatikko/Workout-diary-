import { createContext } from "react";

const DurationContext = createContext();
const DistanceContext = createContext();
const SelectedDateContext = createContext();
const SelectionButtonContext = createContext();



console.log("createContext!!");
export { DistanceContext, DurationContext, SelectedDateContext, SelectionButtonContext};