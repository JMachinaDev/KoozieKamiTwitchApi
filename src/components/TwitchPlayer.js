import React from 'react';

const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";
// https://stackoverflow.com/questions/48724108/using-twitch-embedded-video-with-reactjs

class TwitchPlayer extends React.Component {

    componentDidMount() {
        let embed;
        const script = document.createElement('script');
        script.setAttribute(
          'src',
          EMBED_URL
        );
        script.addEventListener('load', () => {
          embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
        });
        document.body.appendChild(script);
      }

    render() {

        return (
            <div className='container-player'>
                <div id={this.props.targetID}></div>
            </div>
        )
    }
}

TwitchPlayer.defaultProps = {
    targetID: 'twitch-embed',
    // width: 940,
    // height: 480,
    width: '100%',
    height: '100%',
    channel: 'monstercat',
    layout: 'video-with-chat',
    autoplay: true,
    muted: false,
    theme: 'dark',
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    //     parent: ["embed.example.com", "othersite.example.com"]
}

export default TwitchPlayer;