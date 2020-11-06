import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic04 from '../images/pic04.jpg'
import pic06 from '../images/pic06.jpg'
import pic07 from '../images/pic07.jpg'
import '../assets/css/video.css'
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major"> Grave uma mensagem na </h2>
         <h2 className="major">Tabua de Pedra Uchiha</h2>

          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3> Coloque seu nick no campo nome // campo email pode deixar em branco !</h3>
          <TalkyardCommentsIframe />
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Indicação de Conteudo</h2>
        <div class="box">
          <span className="image main">
            <img src={pic02} alt="" />
          </span>

          <p>
          <a target="_blank" href="https://www.youtube.com/channel/UCYfICNe8kq9y704igFJ3wdw">Canal do Daniels</a>: Videos de dicas específicas de matchups  !
          </p>
        </div>
        <div class="box">
          <img src={pic06} alt="" />

          <p>  
          <a target="_blank" href="https://www.youtube.com/channel/UCJpr_9jq10LrXfQ2c-zXllA"> Djoko!</a>:  Análises de grandes jogos e tier list's dos melhore campeões do patch
          </p>
        </div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Elo Ranked Solo !</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <p>
            Contudo nem jogo ranked mais ahuah !
          </p>
          <p>
          <h2 className="major">Win Rate ARAM !</h2>
          Melhor Modo - <a  target="_blank" href="https://u.gg/lol/profile/br1/alison%20uchiha/champion-stats?queueType=normal_aram">Veja a lista completa</a>   
          <span className="image main">
            <img src={pic07} alt="" />
          </span>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contato</h2>
          <p><center>
            Meu Contato e links ligados !
          </center></p>
          Twitter / OP.GG
          <ul className="icons">
            <li>
              <a 
                target="_blank"
                href="https://twitter.com/alisonlp"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
              <a 
                target="_blank"
                href="https://br.op.gg/summoner/userName=Alison%20Uchiha"
                className="icon fa-user-circle"
              >
                <span className="label">Op.gg</span>
              </a>
            </li>
          </ul> 

          {close}
        </article>
      </div>
    )
  }         
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
