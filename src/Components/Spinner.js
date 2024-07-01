
import PuffLoader from "react-spinners/PuffLoader"
import { Grid } from "@mui/material";
import Imports from "./Imports";
function Spinner() {
    

    return (
        <>
       <Grid sx={{display:"flex", justifyContent:"center", alignContent:"center"}}>
        <PuffLoader
         color="#fc9403" 
         size={150}
         
         
         />
         </Grid>
         <Grid></Grid>
         </>

    );
}

export default Spinner;
