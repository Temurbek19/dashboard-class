import {Component} from 'react';
import { Helmet } from 'react-helmet';

import TicketsTop from '../../companents/TicketsTop/TicketsTop';
import OverviewTable from '../../containers/OverviewTable/OverviewTable';

import './Overview.scss';

class Overview extends Component {
    render() {
        return (
            <div className="overview">
                <Helmet>
                    <title>Overview</title>
                </Helmet>
                <TicketsTop title="Overview"/>
                <div className="overview-table">
                    <OverviewTable title="Unresolved" number="60"/>
                    <OverviewTable title="Overdue" number="16"/>
                    <OverviewTable title="Open" number="43"/>
                    <OverviewTable title="On hold" number="64"/>
                </div>
            </div>
        )
    }
}

export default Overview;