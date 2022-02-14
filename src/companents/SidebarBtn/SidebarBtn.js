import { Component } from 'react';
import '../SidebarBtn/main.scss'

class SidebarBtn extends Component {
    render() {

        const {title, icon, active} = this.props

        return (
            <button className={`sidebar-btn ${active ? 'active' : ''}`}>
                <div className="btn-icon">{icon}</div>
                <span>{title}</span>
            </button>
        )
    }
}

export default SidebarBtn;