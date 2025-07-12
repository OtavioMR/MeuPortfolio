import React from 'react';
import minhaFoto from './assets/images/MinhaFotoPerfil.jpeg';
import './App.css';


function App() {
  return (
    <>
      <header className='App-header'>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark colorNavBar">
          <div className="container mb-4">
            <a className="navbar-brand" href="#sobre"><h1>Otávio Monteiro</h1></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#sobre">Sobre</a></li>
                <li className="nav-item"><a className="nav-link" href="#projetos">Projetos</a></li>
                <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className='Foto-Perfil p-5'>
        <img src={minhaFoto} alt="Minha Foto" className="img-fluid mx-auto d-block minhaFoto" />

      </section>

      <div className="container" style={{ paddingTop: '80px' }}>
        <section id="sobre" className="my-5">
          <h2>Sobre Mim</h2>
          <p>Olá, sou Otávio, desenvolvedor frontend e apaixonado por tecnologia...</p>
        </section>

        <section id="projetos" className="my-5">
          <h2>Projetos</h2>
          <ul>
            <li><a href="https://exemplo.com/projeto1" target="_blank" rel="noreferrer">Projeto 1 – App de Clima</a></li>
            <li><a href="https://exemplo.com/projeto2" target="_blank" rel="noreferrer">Projeto 2 – To-do List</a></li>
          </ul>
        </section>

        <section id="contato" className="my-5">
          <h2>Contato</h2>
          <p>Email: otavio@example.com</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/otaviomonteiro" target="_blank" rel="noreferrer">linkedin.com/in/otaviomonteiro</a></p>
        </section>

        <section>
          <p>
            Olá a todos meus queridos
          </p>
        </section>

      </div>
    </>
  );
}

export default App;
