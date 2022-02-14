import {Component} from 'react';
import './OverviewTable.scss';

class OverviewTable extends Component {
    render() {
        const {title, number} = this.props;
        return (
            <button className="tableButton">
                <h3>{title}</h3>
                <h1>{number}</h1>
            </button>
        )
    }
}

export default OverviewTable;