import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ProfilePicture from './image/perfil.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ProfilePicture}
          nome="Bruno Vallim" 
          descricao="Oi, eu sou o Bruno Vallim,tenho 30 anos e sou de Londrina-pr ."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Litz" 
          descricao="Sou formado em administração e atualmente estou fazendo o curso da Labenu de full stack, trabalhei na aréa de tratamento de dados numa empresa de pesquisa de mercado, chamada LITZ" 
        />
        
        <CardPequeno 
          
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
