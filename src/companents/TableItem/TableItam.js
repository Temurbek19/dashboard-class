import {Component} from 'react';
import '../TableItem/TableItem.scss';

class TableItem extends Component {
    render() {
        const {
            id,
            subject,
            updateDay,
            customerName,
            customerDate,
            dateDay,
            dateHour,
            status,
            image
        } = this.props;
        return (
            <div className="table-item">
                <div className="item-left">
                    <img src={image} alt=""/>
                    <div className="left-info">
                        <h5>{subject}</h5>
                        <h6>{updateDay}</h6>
                    </div>
                </div>
                <div className="item-right">
                    <div className="customer-name">
                        <h5>{customerName}</h5>
                        <h6>{customerDate}</h6>
                    </div>
                    <div className="customer-name">
                        <h5>{dateDay}</h5>
                        <h6>{dateHour}</h6>
                    </div>
                    <div className="table-div">
                        <h3 className={`table-tag ${status.toLowerCase()}`}>{status}</h3>
                    </div>
                    <button className="item-toggle">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#C5C7CD"/>
                    </svg>
                    </button>
                </div>
            </div>
        )
    }
}

export default TableItem;