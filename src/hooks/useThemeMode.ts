import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useThemeMode = () => {
return useContext(ThemeContext);
};
export default useThemeMode;
