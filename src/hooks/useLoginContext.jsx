import { useContext } from "react"
import { LoginContext } from "../Context/loginContext"

export const useLoginContext = () => {
    useContext(LoginContext)
}