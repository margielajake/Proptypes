import logo from './logo.svg';
import './App.css';
import Welcome from './Profile/Profile';
import PropTypes from "prop-types";

const handleName = name => alert(name);
const App = () => {
  return (
   <div style = {{display:'flex', justifyContent:'center', alignItems: 'center', marginTop:'15px', padding: '10px'}}>
     <Welcome fullName="Sara Campbell"  profession="Software Engineer" handleName={handleName}>

     </Welcome>
   </div>
 );
};



export default App;
