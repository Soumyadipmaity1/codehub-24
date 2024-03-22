import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { useForm } from 'react-hook-form';
import GroupCodeForm from './GroupCode'; 

const GroupsLogin = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: 'Group Alloted 1',
      form: true,
      updateTime: '10:00 AM', 
      content: (
        <GroupCodeForm />
      ),
    },
    {
      title: 'Group Alloted 2',
      form: true,
      updateTime: '12:00 PM', 
      content: (
        <GroupCodeForm />
      ),
    },
  ];

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionStyle = {
    margin: '20px', 
    background: '#2B2B2B', 
    color: 'white',
    padding: '10px',
    borderTopLeftRadius: '12px', 
    borderTopRightRadius: '12px',
    borderBottom: '4px solid white',
    fontSize: '20px',
    width: '97%'
  };

  const pageStyle = {
    background: '#0D0D0D', 
    width: '100%'
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex ? 'active' : '';

    return (
      <div key={item.title} style={accordionStyle}>
        <div 
          className={`title ${isActive}`}
          onClick={() => onTitleClick(index)}
          style={{ color: 'white' }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div
          className={`content ${isActive}`}
          style={{ color: 'white' }}
        >
          {item.content}
        </div>
        {isActive ? null : (
          <div className="pl-[50px] text-base">
            <span>Last Updated: {item.updateTime}</span> 
          </div>
        )}
      </div>
    );
  });

  return <div className="ui styled accordion" style={pageStyle}>{renderedItems}</div>;
};

export default GroupsLogin;
