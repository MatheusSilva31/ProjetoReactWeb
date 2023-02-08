import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import InfoIcon from '@mui/icons-material/Info';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router';


export const  FixedBottomNavigation = () => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  
  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, }} elevation={3}>
        <BottomNavigation
          showLabels={true}
          value={value}
          onChange={handleChange}
          
        >
          <BottomNavigationAction label="Home"  value={value} icon={<HomeIcon  />}  onClick={()=>navigate("/pagina-inicial")}/>
          <BottomNavigationAction label="Register" value={value} icon={<PostAddIcon />} onClick={()=>navigate("/cadastrar")} />
          <BottomNavigationAction label="About" value={value} icon={<InfoIcon />} onClick={()=>navigate("/sobre")}/>
        </BottomNavigation> 
      </Paper>
    </Box>
  );
}

export default FixedBottomNavigation;
