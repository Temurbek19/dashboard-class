import {Component} from 'react';
import { Helmet } from 'react-helmet';

import TicketsTop from '../../companents/TicketsTop/TicketsTop';

import './Ideas.scss';

class Ideas extends Component {
    render() {
        return (
            <div className="ideas">
                <Helmet>
                    <title>Ideas</title>
                </Helmet>
                <TicketsTop title="Ideas"/>
                <h1>Idealarni biri shotta</h1>
            </div>
        )
    }
}

export default Ideas;