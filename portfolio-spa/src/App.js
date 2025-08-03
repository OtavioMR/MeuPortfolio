import React from 'react';
import minhaFoto from './assets/images/MinhaFotoPerfil.jpeg';
import fotoProjeto from './assets/images/projeto2.png';
import certificadoPython from './assets/images/certificadoDigital.pdf';
import fotoDidi from './assets/images/fotoDidi.jpg';
import imagemFaculdade from './assets/images/imagemFaculdade.png';
import fotoCertificado from './assets/images/fotoCertificado.png';
import './App.css';

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm bg-body-tertiary p-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><b>Otávio Monteiro</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link" href="#">Pricing</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className='container py-4'>

        <section className="d-flex justify-content-center align-items-center py-4">
          <div className="row w-100">
            <div className="col-md-12 d-flex justify-content-center">
              <img src={minhaFoto} alt="" className="fotoPerfil" />
            </div>
            <div className="col-md-12 mt-4 d-flex justify-content-center">
              <h1 className="nomeUsuario"><b>Otávio Monteiro</b></h1>
            </div>
          </div>
        </section>

        <section className='sobreMim py-4  m-3'>
          <div className="row justify-content-center">
            <div className="col-md-12 mb-3 text-center">
              <h2><b>Sobre mim</b></h2>
            </div>
            <div className="col-md-10">
              <div className="cardSobre p-4">
                <p className="mb-0 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates recusandae quae corrupti dolor beatae minima dolores, vitae quos voluptate, nam modi laborum. Quod tenetur nam, voluptate reprehenderit alias numquam.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='historicoProfissional py-4 m-3'>
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2><b>Histórico Profissional</b></h2>
            </div>

            <div className="col-lg-5 col-md-10 m-3">
              <div className="cardProfissao p-4">
                <div className="row">
                  <div className="col-12 text-center">
                    <h3><b>Desenvolvedor Júnior</b></h3>
                  </div>
                  <div className="col-12 text-center mb-3">
                    <small>20/02/2025 - atualmente</small>
                  </div>
                  <div className="col-12 mb-3 text-center text-center">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, ea. Ex, ducimus hic, eligendi fugiat debitis voluptate unde repudiandae odit corporis magni atque! Dolore aliquam accusantium eveniet magnam nostrum corporis?</p>
                  </div>
                  <div className="col-12">
                    <ul className='competenciasProfissao ps-0 text-center'>
                      <li className='py-1'><b>Trabalho com VR</b></li>
                      <li className='py-1'><b>Edição de vídeos</b></li>
                      <li className='py-1'><b>Desenvolvimento com Unity</b></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-10 m-3">
              <div className="cardProfissao p-4">
                <div className="row">
                  <div className="col-12 text-center">
                    <h3><b>Desenvolvedor Júnior</b></h3>
                  </div>
                  <div className="col-12 text-center mb-3">
                    <small>20/02/2025 - atualmente</small>
                  </div>
                  <div className="col-12 mb-3 text-center">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, ea. Ex, ducimus hic, eligendi fugiat debitis voluptate unde repudiandae odit corporis magni atque! Dolore aliquam accusantium eveniet magnam nostrum corporis?</p>
                  </div>
                  <div className="col-12">
                    <ul className='competenciasProfissao ps-0 text-center'>
                      <li className='py-1'><b>Trabalho com VR</b></li>
                      <li className='py-1'><b>Edição de vídeos</b></li>
                      <li className='py-1'><b>Desenvolvimento com Unity</b></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='historicoAcademico py-4  m-3'>
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2><b>Histórico Acadêmico</b></h2>
            </div>

            <div className="col-lg-5 col-md-10 m-3">
              <div className="cardProfissao p-4">
                <div className="row">
                  <div className="col-12 text-center mb-3">
                    <img src={imagemFaculdade} alt="" className='fotoHistorico' />
                  </div>
                  <div className="col-12 text-center">
                    <h3><b>Desenvolvimento de Software Multiplataforma</b></h3>
                  </div>
                  <div className="col-12 text-center mb-3">
                    <small>13/02/2025 - 12/12/2027</small>
                  </div>
                  <div className="col-12 text-center">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, ea. Ex, ducimus hic, eligendi fugiat debitis voluptate unde repudiandae odit corporis magni atque! Dolore aliquam accusantium eveniet magnam nostrum corporis?</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-10 m-3">
              <div className="cardProfissao p-4">
                <div className="row">
                  <div className="col-12 text-center mb-3">
                    <img src={imagemFaculdade} alt="" className='fotoHistorico' />
                  </div>
                  <div className="col-12 text-center">
                    <h3><b>Desenvolvimento de Software Multiplataforma</b></h3>
                  </div>
                  <div className="col-12 text-center mb-3">
                    <small>13/02/2025 - 12/12/2027</small>
                  </div>
                  <div className="col-12 text-center">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, ea. Ex, ducimus hic, eligendi fugiat debitis voluptate unde repudiandae odit corporis magni atque! Dolore aliquam accusantium eveniet magnam nostrum corporis?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='certificados py-4  m-3'>
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2><b>Certificados</b></h2>
            </div>

            <div className="col-lg-5 col-md-10 m-3">
              <div className="cardCertificado p-3 text-center">
                <img src={fotoCertificado} alt="" className="img-fluid" />
                <div className="tituloCertificado mt-3">
                  <h4><b>Desenvolvimento Python</b></h4>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-10 m-3">
              <div className="cardCertificado p-3 text-center">
                <img src={fotoCertificado} alt="" className="img-fluid" />
                <div className="tituloCertificado mt-3">
                  <h4><b>Desenvolvimento Python</b></h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='projetos py-4  m-3'>
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2><b>Projetos</b></h2>
            </div>

            <div className="col-lg-5 col-md-10 m-3">
              <div className="cardProjetos p-3 text-center">
                <div className="fotoProjeto">
                  <img src={fotoProjeto} alt="" className="img-fluid" />
                </div>
                <div className="tituloProjeto mt-3">
                  <h4><b>Chronos Lux</b></h4>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-10 m-3">
              <div className="cardProjetos p-3 text-center">
                <div className="fotoProjeto">
                  <img src={fotoProjeto} alt="" className="img-fluid" />
                </div>
                <div className="tituloProjeto mt-3">
                  <h4><b>Chronos Lux</b></h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;