import React,{useEffect} from 'react';
import Header from './header/Header';
import Inputs from './inputs/Inputs';
import axios from 'axios';

const Main = () => {
    useEffect(() => {
        axios
        .get(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_KEY}&steamids=${process.env.MY_STEAM_ID}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    })
    return (
        <div>
            <Header />
            <Inputs />
            results
            footer
        </div>
    );
}

export default Main;
