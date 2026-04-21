//This file Contains all the basic configuration logic for the app server to work--->
import dotenv from 'dotenv';

dotenv.config();  //Load the env variables 

type ServerConfig = {
    PORT: number
}

// function loadEnv() {
//     // Keep this function if you want to call it elsewhere, 
//     // but the variables are already loaded now.
// }



export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3002
}


// export default loadEnv;