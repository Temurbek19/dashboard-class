import {Component} from 'react';
import { Link } from 'react-router-dom';

import SidebarBtn from '../../companents/SidebarBtn/SidebarBtn';
import {
    OverviewIcon,
    TicketsIcon,
    IdeasIcon,
    ContactsIcon,
    AgentsIcon,
    ArticlesIcon,
    SettingsIcon,
    SubIcon
} from '../../assets/icons/Icons';

import MainLogo from '../../assets/images/icon/logo.svg';

import './main.scss';

class Sidebar extends Component {

    render() {
        const {setActivePage, activePage} = this.props;
        return (
            <div className="sidebar">
                <a href="javascript:void(0)" className="logo-holder">
                    <img src={MainLogo} alt="" className="sidebar-logo"/>
                    <span>Dashboard Kit</span>
                </a>
    
                <Link to="/overview" onClick={() => setActivePage('overview')} className="button-link">
                    <SidebarBtn
                        title="Overview"
                        icon={<OverviewIcon/>}
                        active={activePage == 'overview'}
                    />
                </Link>
                <Link to="/tickets" onClick={() => setActivePage('tickets')} className="button-link">
                    <SidebarBtn
                        title="Tickets"
                        icon={<TicketsIcon/>}
                        active={activePage == 'tickets'}
                    />
                </Link>
                <Link to="/ideas" onClick={() => setActivePage('ideas')} className="button-link">
                    <SidebarBtn
                        title="Ideas"
                        icon={<IdeasIcon/>}
                        active={activePage == 'ideas'}
                    />
                </Link>
                
                <SidebarBtn title="Contacts" icon={<ContactsIcon/>}/>
                <SidebarBtn title="Agents" icon={<AgentsIcon/>}/>
                <SidebarBtn title="Articles" icon={<ArticlesIcon/>}/>
                <div className="sidebar-border"></div>
                <SidebarBtn title="Settings" icon={<SettingsIcon/>}/>
                <SidebarBtn title="Subscription" icon={<SubIcon/>}/>
            </div>
        )
    }
}

export default Sidebar;