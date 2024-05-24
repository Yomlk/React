import { FC } from "react";

interface RowProps {
    children?:React.ReactNode;
    direction?: "row" | "column";
}
const Row: FC<RowProps>= ({ children, direction="row" }) =>{
    
    return (<div style={{display:"flex", flexDirection:direction}}></div> )
}
export default Row;