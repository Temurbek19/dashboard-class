import {Component} from 'react';
import Image0 from '../../assets/images/images/image0.png';

import './TicketsTop.scss'

class TicketsTop extends Component{
    render() {

        const { title } = this.props;

        return (
            <div className="ticket-top">
                <h1 className="yozuv">{title}</h1>
                <div className="ticket-top-right">
                    <div className="lupa">
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.5" cy="6.5" r="5.75" stroke="#C5C7CD" stroke-width="1.5"/>
                        <path d="M11 11L15 15" stroke="#C5C7CD" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    </div>
                    <div className="sub">
                    <svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99999 19C9.10374 19 9.99905 18.1047 9.99905 17H6.00093C6.00093 18.1047 6.89624 19 7.99999 19ZM14.7309 14.3216C14.1272 13.6728 12.9975 12.6969 12.9975 9.5C12.9975 7.07188 11.295 5.12812 8.99937 4.65125V4C8.99937 3.44781 8.55187 3 7.99999 3C7.44812 3 7.00062 3.44781 7.00062 4V4.65125C4.70499 5.12812 3.00249 7.07188 3.00249 9.5C3.00249 12.6969 1.8728 13.6728 1.26905 14.3216C1.08155 14.5231 0.998429 14.7641 0.999991 15C1.00343 15.5125 1.40562 16 2.00312 16H13.9969C14.5944 16 14.9969 15.5125 15 15C15.0016 14.7641 14.9184 14.5228 14.7309 14.3216Z"/>
                        <circle cx="13" cy="5" r="3.75" fill="#3751FF" stroke="#F7F8FC" stroke-width="1.5"/>
                    </svg>
                    </div>
                    <span>Jones Ferdinand</span>
                    <img src={Image0} alt=""/>
                </div>
            </div>
        )
    }
}

export default TicketsTop;