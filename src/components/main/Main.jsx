import React from 'react';
import google from '../../assets/images/googlelogo.png';
import './main.css';
import search from '../../assets/images/search.svg';
import camera from '../../assets/images/camera.svg'


const Main = () => {
    return (
        <main>
            <img src={google} alt="google" />
            <form>
                <fieldset>
                    <img src={search} alt="search" />
                    <input type="search" name="" id="" />
                    <img src={camera} alt="camera" />
                </fieldset>
                <fieldset>
                    <button>Google Search</button>
                    <button>I'm Feeling Lucky</button>
                </fieldset>
            </form>
        </main>
    );
};

export default Main;