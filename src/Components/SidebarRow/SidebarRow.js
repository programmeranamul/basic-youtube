import React from 'react';
import './SidebarRow.css'

const SidebarRow = ({ Icon ,title, selected}) => {
    return (
        <div className={`sidebar__rows ${selected&& "secelted"}`}>
            <Icon className="sidebar__icon"/>
            <p className="sidebar__title">{title}</p>
        </div>
    );
};

export default SidebarRow;