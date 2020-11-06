import PropTypes from 'prop-types'
import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from "./css/styles.scss";
import AnimationStyles from './css/fold-out-animation.scss';
import ReactPlayer from 'react-player/youtube';
//import "./css/styles.css";
// import 'react-awesome-slider/dist/styles.css';



const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">

        <h2>Alison Uchiha - Stream</h2>
<div class="box">
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
          Highlights
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
                 Ninja        
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
           JORNAL AKATSKU
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contato   
          </button>
        </li>
      </ul>
    </nav>
    </div>
<div class="box">

            <iframe src="https://player.twitch.tv/?video=780696746&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
<iframe frameborder="0"
        scrolling="yes"
        src="https://www.twitch.tv/embed/alisonuchiha88/chat?parent=localhost"
        height="378"
        width="620">
</iframe>
</div>
    </div> 
    <div class="box">
  <AwesomeSlider
    animation="foldOutAnimation"
    cssModule={[CoreStyles, AnimationStyles]}
    bullets={true}
  >
  <div>
    <ReactPlayer
            url='https://www.youtube.com/watch?v=JTohBYvnhPY'
            muted
            width='720px'
            height='480px'
            playing={true}
            controls='true'
          /></div>
          <div>
    <ReactPlayer
            url='https://www.youtube.com/embed/cAG9lPHzWWM'
            width='720px'
            height='480px'

            controls='true' 
          /></div>
<div>
    <ReactPlayer
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            width='720px'
            height='480px' 
            controls='true'
          /></div>

  </AwesomeSlider>
</div>
    </div>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}



export default Header
