import React, { createContext, useContext, useState } from 'react'

var Context = createContext()
export const GlobalContext = ({ children }) => {
    const [id, setid] = useState(1)
    return (
        <Context.Provider value={{ id, setid }}>
            {children}
        </Context.Provider>
    )
}
export const useGeneralContext = () => {
    const GeneralContext = useContext(Context)
    return GeneralContext;
};
// export default GlobalContext