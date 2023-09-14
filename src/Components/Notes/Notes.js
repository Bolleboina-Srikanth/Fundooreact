 import { useContext } from 'react';
 import {Box, Drawer} from '@mui/material';
 import {styled} from '@mui/material/styles'
 import Form from './Form';




 const DrawerHeader = styled('div')(({ theme }) => ({
   ...theme.mixins.toolbar,
 }));


 

 const NoteTaking = ({ getAllnotes}) => {
    


   return (
     <Box sx={{ display : 'flex', width: '100%'}}>
       <Box sx={{ p: 3,width : '100%;'}}>
     <DrawerHeader/>
     <Form  getAllnotes={getAllnotes}/>
     </Box>
     </Box>
    
 )
 }
 export default NoteTaking;