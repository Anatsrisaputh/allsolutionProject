import React, { useState } from 'react';
import axios from "../../config/axios";
import "../../style/checkwarranty.css";
import { Input, Row, Col } from 'antd';

const { Search } = Input;



function CheckWarranty() {
  return (
    <Row >
      <Row></Row>
      <Row  justify="middle">
        
        <Col span={12} offset={6}>
        
    
      <Search style={{width: 500}}
      label="Check Product warraty"
      placeholder="Serial Number" 
      onSearch={value => {}}
      enterButton />
     
      </Col>
      </Row>
      <Row></Row>
    </Row>
  )
}

export default CheckWarranty;

