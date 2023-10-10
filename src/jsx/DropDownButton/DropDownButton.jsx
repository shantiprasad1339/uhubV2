import React, { useState } from 'react';
import { Button, Dropdown, Space } from 'antd';
import Placement from '../placement/placement';
import './DropDownButton.css'

function DropdownBtn(props) {
  function btnNaviGate (){
Navigate('/Placement')
  }
  return (
    <>
    
    <Space direction="vertical">
    <Space wrap>
     
        <Button onClick={btnNaviGate}>{props.name}</Button>
     
      
        
        
       
    </Space>
  </Space>
    
    </>
  );
}


export default DropdownBtn;
