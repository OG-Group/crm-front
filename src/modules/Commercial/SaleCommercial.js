import { Link } from 'react-router-dom';
import React from 'react';
import BuildingForm from './components/BuildingForm';

import CommonFields from '../../components/CommonFields';

import { Typography, Divider } from 'antd';

import './Commercial.module.css';
const { Title } = Typography;

class SaleCommercial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextForm: '',
    };
  }

  render() {
    return (
      <>
        <Title level={2}>Продажа коммерческой недвижимости</Title>
        <CommonFields setNextForm={(nextForm) => this.setState({ nextForm })} />
        <Divider plain></Divider>
        {this.state.nextForm === 'building' && <BuildingForm categoryB={'buildingSale'} />}
      </>
    );
  }
}

export default SaleCommercial;
