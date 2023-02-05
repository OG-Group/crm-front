import { Component } from 'react';
import { Input, Row, Col, Typography } from 'antd';
const { Text } = Typography;

class Input_ extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col span={12}>
          <Text>{this.props.title}</Text>
        </Col>
        <Col span={12}>
          <Input />
        </Col>
      </Row>
    );
  }
}

export default Input_;
