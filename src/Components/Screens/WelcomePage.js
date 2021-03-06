import { Link } from "react-router-dom";
import undraw_welcome from '../../Assets/undraw_welcome.svg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


const WelcomePage = () => {

    return ( 

        <div class="container-fluid">
            <div class="row">
                <div class="col-6 mt-5" >
                    <img src={undraw_welcome} alt='welcome'/>
                </div>
                <div class="col-6">
                    
                    <div class="mt-5 " style={{position: 'absolute', top: '10%', color:'#6C63FF'}}>
                        <h1 class="fw-bolder mt-5" >
                            Check out — Welcome To Plagiarism Checker App!
                        </h1>
                        
                        <div class="mt-5">
                            <List sx={{width: '100%',maxWidth: 360,bgcolor: 'background.paper',}}>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <PeopleAltIcon />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <Link to="/plagarismdetection/studentlogin" style={{ color:'#6C63FF', textDecoration: 'none'}}>
                                        { 
                                            <ListItemText  
                                            primary={<Typography style={{ fontWeight: '600'}}>Student</Typography>} 
                                            secondary="continue as student" /> 
                                        }
                                    </Link>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <WorkIcon />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <Link to="/plagarismdetection/facultylogin" style={{ color:'#6C63FF', textDecoration: 'none'}}>
                                        { 
                                            <ListItemText  
                                            primary={<Typography style={{ fontWeight: '600'}}>Faculty</Typography>}  
                                            secondary="continue as faculty" /> 
                                        }
                                    </Link>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <AdminPanelSettingsIcon />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <Link to="/plagarismdetection/adminlogin" style={{ color:'#6C63FF', textDecoration: 'none'}}>
                                        { <ListItemText 
                                             primary={<Typography style={{ fontWeight: '600'}}>Admin</Typography>} 
                                            secondary="continue as admin" /> 
                                        }
                                    </Link>
                                </ListItem>
                            </List>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default WelcomePage;