import { Component } from 'react';
import { Radio, Row, Col, Typography } from 'antd';
const { Text } = Typography;

class Radio_ extends Component {
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
          <Radio.Group
            onChange={(e) => this.props.onChange(e.target.value)}
            defaultValue={this.props.defaultValue}
            buttonStyle={this.props.buttonStyle}>
            value={this.props.value}
            {this.props.options.map((elem, index) => (
              <Radio.Button key={index} value={elem.value}>
                {elem.label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Col>
      </Row>
    );
  }
}

export default Radio_;
