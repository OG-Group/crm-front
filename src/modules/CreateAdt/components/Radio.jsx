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
        <Col span={12}>
          <Text>{this.props.title}</Text>
        </Col>
        <Col span={12}>
          <Radio.Group
            onChange={this.props.onChange}
            defaultValue={this.props.defaultValue}
            buttonStyle={this.props.buttonStyle}>
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
