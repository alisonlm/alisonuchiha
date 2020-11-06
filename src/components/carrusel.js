import React from "react";
import "./css/styles.css";
import ReactPlayer from 'react-player/youtube'

class Carrusel extends React.Component {
  render() {
    return (
      <div className="container container-1360 py-4">
        <div className="px-20 py-20 bg-negro bradius-15">
          <div
            id="carouselRiotGames"
            class="carousel slide"
            data-ride="carousel"
          >
           <div class="carousel-inner">
              <div class="carousel-item active" align='center'>
                 <ReactPlayer
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            volume='1'
            muted
            width='800px'
            controls='true'
            playing={false}
          />
              </div>
              <div class="carousel-item" align='center'>
                <ReactPlayer
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            volume='1'
            muted
            width='800px'
            controls='true'
            playing={false}
          />
              </div>
              <div class="carousel-item" align='center'>
                <ReactPlayer
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            volume='1'
            muted
            width='800px'
            playing={false}
          />
              </div>
              <div class="carousel-item" align='center'>
                <ReactPlayer
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            volume='1'
            muted
            width='800px'
            playing={false}
          />
              </div>
              <div class="carousel-item" align='center'>
                <ReactPlayer
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            volume='1'
            muted
            width='800px' 
            playing={false}
          />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselRiotGames"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Atras</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselRiotGames"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Siguiente</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Carrusel;
