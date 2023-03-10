import { Component } from 'react';
import { Input, InputNumber, Row, Col, Typography } from 'antd';
const { Text } = Typography;

class Input_ extends Component {
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
          {this.props.TextArea ? (
            <Input.TextArea
              rows={4}
              onChange={(e) => this.props.onChange(e.target.value)}
              value={this.props.value}
            />
          ) : this.props.InputNumber ? (
            <InputNumber
              defaultValue={this.props.value}
              min={0}
              max={
                this.props.numberType === 'Int32'
                  ? 10000
                  : this.props.numberType === 'Int64'
                  ? 10000
                  : this.props.numberType === 'Double'
                  ? 10000.0
                  : 10000
              }
              value={this.props.value}
              onChange={(value) => this.props.onChange(value)}
              stringMode={this.props.numberType === 'Double' ? true : false}
            />
          ) : (
            <Input onChange={(e) => this.props.onChange(e.target.value)} value={this.props.value} />
          )}
        </Col>
      </Row>
    );
  }
}

export default Input_;
