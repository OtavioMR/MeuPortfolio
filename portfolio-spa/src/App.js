import React from 'react';
import minhaFoto from './assets/images/MinhaFotoPerfil.jpeg';
import fotoProjeto from './assets/images/projeto2.png'
import './App.css';

function App() {

  const projetos = [
    { titulo: "ChronosLux", descricao: "Ecommerce de relógios", imagem: fotoProjeto },
    { titulo: "ChronosLux", descricao: "Ecommerce de relógios", imagem: fotoProjeto },
    { titulo: "ChronosLux", descricao: "Ecommerce de relógios", imagem: fotoProjeto },
    { titulo: "ChronosLux", descricao: "Ecommerce de relógios", imagem: fotoProjeto }
  ];


  return (
    <>
      <header className='App-header'>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark colorNavBar">
          <div className="container my-2">
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

      <section className="d-flex justify-content-center align-items-center p-5 Foto-Perfil">
        <img src={minhaFoto} alt="Minha Foto" className="img-fluid minhaFoto" />
      </section>

      <div className="container text-center" style={{ paddingTop: '80px' }}>
        {/* SOBRE MIM */}
        <section id="sobre" className="my-5 mx-3">
          <h2 className="Sublinhado mb-4">Sobre Mim</h2>
          <p>
            Olá! Meu nome é <strong>Otávio Monteiro</strong>, sou estudante de <strong>Desenvolvimento de Software Multiplataforma</strong> na <strong>Fatec de Cotia</strong>.
            Sou apaixonado por tecnologia, com foco em desenvolvimento frontend e interfaces intuitivas.
          </p>
          <p>
            Atualmente, estou construindo projetos em <strong>React</strong> e aprimorando minhas habilidades em JavaScript, CSS moderno e boas práticas de UI/UX.
          </p>
          <p>
            Acompanhe minha trajetória e se conecte comigo pelo LinkedIn:
            <a href="https://www.linkedin.com/in/otávio-monteiro-465559252/" target="_blank" rel="noreferrer">
              linkedin.com/in/otávio-monteiro
            </a>
          </p>
        </section>

        <section id="projetos" className="my-5 mx-3">
          <h2 className="Sublinhado text-center mb-4">Projetos</h2>
          <div className="row gy-4 gx-3">
            {projetos.map((projeto, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div className="card h-100">
                  <img src={projeto.imagem} alt="Foto-Projeto" className="card-img-top img-fluid" />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{projeto.titulo}</h5>
                    <p className="card-text">{projeto.descricao}</p>
                    <a href="#" target="_blank" rel="noreferrer" className="btn btn-primary mt-auto">Ver projeto</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>






        {/* CONTATO */}
        <section id="contato" className="my-5 mx-3">
          <h2 className="Sublinhado mb-4">Contato</h2>
          <p>Email: otavio@example.com</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/otaviomonteiro" target="_blank" rel="noreferrer">linkedin.com/in/otaviomonteiro</a></p>
        </section>
      </div>
    </>
  );
}

export default App;
