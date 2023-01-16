import "./timerSection.scss";
import {Link} from 'react-router-dom';
import { useEffect } from "react";
import points from './resources/pointsProduct.svg';

import womanBlond from "./resources/woman__blond.jpg"

const TimerSection = () => {

    function timer(id, endtime){

        function getTimeRemaining(endtime) {
            const t = Date.parse(endtime) - Date.parse(new Date()),
                days = Math.floor((t / (1000 * 60 * 60 * 24))),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / (1000 * 60 * 60) % 24));
    
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
            };
        }
    
        function getZero(num) {
            if (num >= 0 && num < 10) {
                return '0' + num;
            } else {
                return num;
            }
        }
    
        function setClock(selector, endtime) {
    
            const days = document.querySelector("#days"),
                hours = document.querySelector('#hours'),
                minutes = document.querySelector('#minutes'),
                timeInterval = setInterval(updateClock, 1000);
    
            updateClock();
    
            function updateClock() {
                const t = getTimeRemaining(endtime);
    
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
    
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }
    
        setClock(id, endtime);
    }

    useEffect(() => {
        timer('.timer__count', '2023-09-12')
    }, []);

    return (
        <section className="timer">
            <div className="timer__wrapper">
                <div className="timer__info">
                    <h2 className="timer__title title_64">Deal Of The Day</h2>
                    <div className="timer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis.</div>
                    <div className="timer__сount">
                        <div className="timer__block">
                            <span id="days">12</span>
                            Day
                        </div>
                        <div className="timer__block">
                            <span id="hours">20</span>
                            Hour
                        </div>
                        <div className="timer__block">
                            <span id="minutes">56</span>
                            Minute
                        </div>
                    </div>
                    <Link to="/product"><button className="btn">shop now</button></Link>
                </div>
                <div className="timer__img">
                    <img className="timer__card" src={womanBlond} alt="woman"/>
                    <img className="timer__points" src={points} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default TimerSection;