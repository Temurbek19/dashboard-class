import {Component} from 'react';

import TableItem from '../../companents/TableItem/TableItam';
import TopItem from '../../companents/TopItem/TopItem';

import Image1 from '../../assets/images/images/image1.png';
import Image2 from '../../assets/images/images/image2.png';
import Image3 from '../../assets/images/images/image3.png';
import Image4 from '../../assets/images/images/image4.png';
import Image5 from '../../assets/images/images/image5.png';
import Image6 from '../../assets/images/images/image6.png';
import Image7 from '../../assets/images/images/image7.png';
import Image8 from '../../assets/images/images/image8.png';

import '../Table/Table.scss';

const tableInfoArr = [
        {
            id: 1,
            image: Image1,
            subject: 'Contact Email not Linked',
            updateDay: 'Updated 1 day ago',
            customerName: 'Tom Cruise',
            customerDate: 'on 24.05.2019',
            dateDay: 'May 26, 2019',
            dateHour: '6:30 PM',
            status: 'high'
        },
        {
            id: 2,
            image: Image2,
            subject: 'Adding Images to Featured Posts',
            updateDay: 'Updated 1 day ago',
            customerName: 'Matt Damon',
            customerDate: 'on 24.05.2019',
            dateDay: 'May 26, 2019',
            dateHour: '8:00 AM',
            status: 'low'
        },
        {
            id: 3,
            image: Image3,
            subject: 'When will I be charged this month?',
            updateDay: 'Updated 1 day ago',
            customerName: 'Robert Downey',
            customerDate: 'on 24.05.2019',
            dateDay: 'May 26, 2019',
            dateHour: '7:30 PM',
            status: 'high'
        },
        {
            id: 4,
            image: Image4,
            subject: 'Payment not going through',
            updateDay: 'Updated 2 day ago',
            customerName: 'Christian Bale',
            customerDate: 'on 24.05.2019',
            dateDay: 'May 25, 2019',
            dateHour: '5:00 PM',
            status: 'normal'
        },
        {
            id: 5,
            image: Image5,
            subject: 'Unable to add replies',
            updateDay: 'Updated 2 day ago',
            customerName: 'Henry Cavil',
            customerDate: 'on 24.05.2019',
            dateDay: 'May 25, 2019',
            dateHour: '4:00 PM',
            status: 'high'
        },
        {
            id: 6,
            image: Image6,
            subject: 'Downtime since last week',
            updateDay: 'Updated 3 day ago',
            customerName: 'Chris Evans',
            customerDate: 'on 23.05.2019',
            dateDay: 'May 25, 2019',
            dateHour: '2:00 PM',
            status: 'normal'
        },
        {
            id: 7,
            image: Image7,
            subject: 'Referral Bonus',
            updateDay: 'Updated 4 day ago',
            customerName: 'Sam Smith',
            customerDate: 'on 22.05.2019',
            dateDay: 'May 25, 2019',
            dateHour: '11:30 PM',
            status: 'low'
        },
        {
            id: 8,
            image: Image8,
            subject: 'How do I change my password?',
            updateDay: 'Updated 6 day ago',
            customerName: 'Steve Rogers',
            customerDate: 'on 21.05.2019',
            dateDay: 'May 24, 2019',
            dateHour: '1:00 PM',
            status: 'normal'
        }
]

class Table extends Component {
    render() {
        return (
            <div className="table">
                <TopItem/>
                <div className="table-top">
                    <span className="span1">Ticket details</span>
                    <span className="span2">Customer name</span>
                    <span className="span3">Date</span>
                    <span className="span4">Priority</span>
                </div>
                {
                    tableInfoArr.map((item) => (
                       <TableItem
                        id={item.id}
                        subject={item.subject}
                        updateDay={item.updateDay}
                        customerName={item.customerName}
                        customerDate={item.customerDate}
                        dateDay={item.dateDay}
                        dateHour={item.dateHour}
                        status={item.status}
                        image={item.image}
                       /> 
                    ))
                }
            </div>
        )
    }
};

export default Table;