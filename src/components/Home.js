import React from 'react';
import TwitchPlayer from './TwitchPlayer';
import { SocialIcon } from 'react-social-icons';
import Gundum from '../images/gundum.png';
import Gundum2 from '../images/gundum2.png';


export default function Home () {
    return (
        <main className="container-home">
            
            <div className="container-circle">
                <div className="gradiant-circle"></div>
            </div>

            <div className="container-gundum1">
                <img src={Gundum} alt="gundum"></img>
            </div>

            <div className="container-gundum2">
                <img src={Gundum2} alt="gundum"></img>
            </div>

            <section className="container-about">
                <h1>Kooziekami</h1>
                <h3>Twitch Affiliate</h3>
                <p>Welcome to my channel, where I love streaming games like
                    Overwatch, League of Legends & random stuff!
                </p>
                <p>Ask me to play some instruments on stream!</p>
            </section>

            <section className="container-socials">
                <SocialIcon url ="https://linkedin.com" fgColor="#eeeeee" style={{height: 50, width: 50}}/>
                <SocialIcon url ="https://twitter.com" fgColor="#eeeeee" style={{height: 50, width: 50}}/>
                <SocialIcon url ="https://github.com"  fgColor="#eeeeee" style={{height: 50, width: 50}}/>
                <SocialIcon url ="https://instagram.com"  fgColor="#eeeeee" style={{height: 50, width: 50}}/>
            </section>
            
            <TwitchPlayer />
            

            

            <footer>
                <h6>Copyright &#169 . jmachina.dev </h6>
            </footer>

        </main>
    )
}