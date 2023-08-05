import React, { useState } from 'react';

const NonStringList = () => {
  const [listData, setListData] = useState([1, 2, 3, 4, 5, 6]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
    console.log('Clicked index:', index);
  };

  return (
    <div>
      {listData.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{
            padding: '10px',
            border: index === selectedIndex ? '2px solid blue' : '1px solid black',
            backgroundColor: index === selectedIndex ? 'lightblue' : 'transparent',
            cursor: 'pointer',
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default NonStringList;
