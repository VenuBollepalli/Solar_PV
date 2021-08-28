import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Train from '@material-ui/icons/Train';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
function App() {
  return <>
   <AppBar position="relative">

<Toolbar>

  <Train />

  <Typography variant="h6" color="inherit" noWrap>

   Metro Transit

  </Typography>

</Toolbar>

</AppBar>
    
  



  </>;
}

export default App;
