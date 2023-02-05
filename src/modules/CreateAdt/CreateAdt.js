import { Link } from 'react-router-dom';
import React from 'react';
import AdtForm from './components/AdtForm';
import { Typography } from 'antd';

import './CreateAdt.module.css';
const { Title } = Typography;

class CreateAdt extends React.Component {
  render() {
    return (
      <>
        <Title level={2}>Новое объявление</Title>
        <AdtForm />
      </>
    );
  }
}

export default CreateAdt;
