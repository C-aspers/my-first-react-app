// importer react
import React from 'react';
import ReactDOM from 'react-dom';
// import biblio et des composants
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';



// import des composants
import Paragraphs from './components/Paragraphs';
import Clients from './components/Clients';
import TotalAmount from './components/TotalAmount';
//import Email from './components/Email';


// Création du premier composant
const App = () => (
  <Container>
    <div>
      <h1>Fichier client!</h1>
      <br></br>
      <Clients /> 
      <Paragraphs /> 
    
    
      <ul>
        <li>Books: <TotalAmount amount={154} /></li>
        <li>Pencils: <TotalAmount amount={12.85} /></li>
        <li>Erasers: <TotalAmount amount={18} /></li>
      </ul>
    </div>
  
</Container>
);

//Affiche le composant
ReactDOM.render(<App />, document.getElementById('root'));