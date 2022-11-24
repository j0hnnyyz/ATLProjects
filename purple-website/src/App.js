import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './App.css';
import DarAulas from './views/DarAulas.js';
import Estudar from './views/Estudar.js';
import Grid from '@mui/material/Grid';
import EstudarIcon from './assets/images/Estudar.svg';
import AulasIcon from './assets/images/Vector.svg';
import ProffyTitleImg from './assets/images/Proffy.svg';
import MainImage from './assets/images/Ilustra.svg';
import Button from '@mui/material/Button';
import HeartIcon from './assets/images/LilHeart.svg'

{/*FALHAS*/}
{/*click do botão afeta a pagina toda*/}
{/*falta de responsividade*/}
{/*não segui o tamanho exato de paddings e distancias porque parecia uma proporção muito grande na tela desse notebook*/}

{/*DÚVIDAS*/}
{/*como posso manter a div na largura da imagem pra quebrar o texto "Sua plaforma de estudos online." */}
{/* devo diminuir o tamanho das imagens?*/}
{/* pergunta iniciante, em quais situações devo usar <a> ou <h1> ou <h6> ou outro elemento de texto tipo <p>. E os "<h>" vão até qual?*/}
{/*o uso do BrowseRouter e do NAVLINK estao corretos?*/}
{/*no figma, alguns elementos quando são puxados juntos, formam uma especie de grid ou box... é pra ser feito da mesma forma?
por exemplo a seta e o "proffy" na segunda tela, parte superior */}

function App() {

  const [count, setCount] = useState(0);

  return (
  <BrowserRouter>
    <Grid container justifyContent="center" alignItems="center" sx={{width: '100%', height: '100vh', backgroundColor: '#8257E5'}}>
      <Grid>
        <Grid container alignItems="center" spacing={2}>
          <Grid item sx={{fontSize: '36px'}}>
            <div><p>Você clicou {count} vezes</p><button onClick={() => setCount(count + 1)}></button></div>
            <div>              
              <img src={ProffyTitleImg}></img>
              <a class="mainP"><p>Sua plaforma de estudos online.</p></a>
            </div>
          </Grid>
          <Grid item>
              <img src={MainImage}></img>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent='space-between' sx={{paddingTop: '70px'}}>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                  <NavLink to="/Estudar">
                  <Button class='studyButton initButtons'>
                    <Grid container alignItems="center" spacing={3.5}>
                      <Grid item>
                        <img src={EstudarIcon} width='30' height='30'></img>
                      </Grid>
                      <Grid item>
                        <a>Estudar</a>
                      </Grid>
                    </Grid>
                  </Button>
                  </NavLink>
              </Grid>
              <Grid item>
                  <NavLink to="/DarAulas">
                  <Button class='classButton initButtons'>
                    <Grid container alignItems="center" spacing={3.5}>
                      <Grid item>
                        <img src={AulasIcon} width='30' height='30'></img>
                      </Grid>
                      <Grid item>
                        <a>Dar aulas</a>
                      </Grid>
                    </Grid>
                  </Button>
                  </NavLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1} alignItems="center">
              <Grid item sx={{fontSize: '12px'}}>
                <a class='mainP'>Total de 777 conexões já realizadas</a>
              </Grid>
              <Grid item>
                <img src={HeartIcon}></img>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Routes>
      <Route path="/Estudar" element={<Estudar/>}/>
      <Route path="/DarAulas" element={<DarAulas/>}/>
      </Routes>

    </Grid>
  </BrowserRouter>
  );
}

export default App;