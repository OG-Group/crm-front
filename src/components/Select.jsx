import { Component } from 'react';
import { Select, Row, Col, Typography } from 'antd';
const { Text } = Typography;

const { Option } = Select;

class Select_ extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col xs={24} sm={6} md={6} lg={6} xl={6}>
          <Text>{this.props.title}</Text>
        </Col>
        <Col xs={24} sm={18} md={18} lg={18} xl={18}>
          <Select
            style={{ width: '100%' }}
            onChange={this.props.onChange}
            defaultValue={this.props.defaultValue}>
            value={this.props.value}
            {this.props.options.map((elem, index) => (
              <Option key={index} value={elem.value}>
                {elem.label}
              </Option>
            ))}
            {/* <Option value="office">Офис</Option>
            <Option value="1">Здание</Option>
            <Option value="2">Торговая площадь</Option>
            <Option value="3">Помещение свободного назначения</Option>
            <Option value="4">Производство</Option>
            <Option value="5">Склад</Option>
            <Option value="6">Гараж</Option>
            <Option value="7">Бизнес</Option>
            <Option value="8">Коммерческая земля</Option> */}
          </Select>
        </Col>
      </Row>
    );
  }
}

export default Select_;
