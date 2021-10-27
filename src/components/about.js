import React from 'react';
import girl from '../assets/girl.jpg'

function About() {
    return (
        <section id="about">
            <div>
                <img src={girl} alt="girl" />
            </div>
            <div>
                <h2>Who am I?</h2>
                <p>My name is Lily Sperber and I'm a fullstack developer currently taking the UNCC Fullstack development bootcamp. I took CATA's cybersecurity track in highschool and I've been making websites and games since I was 12. I work primarily with python, javascript, html, and css.</p>
            </div>
        </section>
    )
}

export default About;