import { Link } from 'react-router-dom';
import React from 'react';
import BuildingRentForm from './components/BuildingRentForm';
import CommonFields from '../../components/CommonFields';

import { Typography, Divider } from 'antd';

import './RentAdt.module.css';
const { Title } = Typography;

class RentAdt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextForm: '',
    };
  }

  render() {
    return (
      <>
        <Title level={2}>Аренда коммерческой недвижимости</Title>
        <CommonFields setNextForm={(nextForm) => this.setState({ nextForm })} />
        <Divider plain></Divider>
        {this.state.nextForm === 'building' && <BuildingRentForm />}
      </>
    );
  }
}

export default RentAdt;
