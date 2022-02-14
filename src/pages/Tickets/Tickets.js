import { Component } from 'react';
import { Helmet } from 'react-helmet';

import TicketsTop from '../../companents/TicketsTop/TicketsTop';
import Table from '../../containers/Table/Table';

import '../Tickets/main.scss'

class Tickets extends Component {
    render() {
        return (
            <div className="tickets">
                <Helmet>
                    <title>
                        Tickets
                    </title>
                </Helmet>
                <TicketsTop title="Tickets"/>
                <Table/>
            </div>
        )
    }
}

export default Tickets;
