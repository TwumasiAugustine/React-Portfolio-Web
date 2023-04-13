import React from 'react';

export class About extends React.Component {
  handleClick = () => {
    const more = document.getElementById('more');
    const readBtn = document.getElementById('readMoreBtn')
    const dots = document.getElementById('dots')
    if(more.style.display === 'none') {
      more.style.display = 'inline'; 
      readBtn.innerHTML = 'Read Less';
      dots.style.display = 'none';
    }else{
      more.style.display = 'none';
      readBtn.innerHTML = 'Read More';
      dots.style.display = 'inline';
    }
  }
  render() {
    const style = {
      display: "none"
    }
    return (
      <section id="about">
        <div id="about-container">
          <div id="about-text">
            <h2>About Me</h2>
            <p>
              I am a self-taught <strong>Web Developer</strong> living in
              City Name, USA. I've been coding since December 2021. My primary
              focus is on the front end, and I am proficient in
              <strong> CSS</strong>,
              <strong> JavaScript</strong>, <strong> React JS </strong>, and
              <strong> HTML</strong>. I'm currently honing my skills by delving
              deeper into the world of Android development with Kotlin. I'm
              constantly learning<span id="dots">... </span>
              <span id="more" style={style}> new techniques and best practices to improve my skills and
                provide even better solutions to my clients. I'm also a student
                of <strong>Offinso College of Education </strong>
                (University of Example affiliate) where I'm pursuing a
                four-year degree programme in Education. I'm passionate about
                creating beautiful, functional, and accessible websites and
                applications. I'm always looking for new opportunities to learn
                and grow as a developer. I've created some projects in HTML,
                CSS, and JavaScript that are hosted on <strong>
                  GitHub </strong> and
                <strong> CodePen</strong>.
              </span>
            </p>
            <button id="readMoreBtn" onClick={this.handleClick}>Read More</button>
            <p>Now you can find me on</p>
          </div>
        </div>
        <div id="social-links">
          <a
            href="#"
            target="_blank"
            title="LinkedIn"
          > 
            <i class="fab fa-linkedin" />
          </a>
          <a
            href="#"
            target="_blank"
            title="CodePen"
          >
            <i class="fab fa-codepen" />
          </a>
          <a
            href="#"
            target="_blank"
            title="Github"
          >
            <i class="fab fa-github" />
          </a>
          <a
            href="#"
            target="_blank"
            title="Twitter"
          >
            <i class="fab fa-twitter" />
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-facebook" />
          </a>
        </div>
      </section>
    );
  }
}
