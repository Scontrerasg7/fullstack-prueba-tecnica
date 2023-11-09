import { useContext } from "react";
import { HashContext } from "../context/hash.jsx";


export const useHash = () => {
    const hash = useContext(HashContext)

    if (hash == undefined) {
        throw new Error('useHash must be used within a HashProvider')
    }

    return hash
}