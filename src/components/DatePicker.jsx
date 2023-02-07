import { Component } from 'react';
import { DatePicker, Row, Col, Typography } from 'antd';
const { Text } = Typography;

class DatePicker_ extends Component {
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
          <DatePicker
            placeholder={this.props.placeholder}
            onChange={(date, dateString) => this.props.onChange(dateString)}
          />
        </Col>
      </Row>
    );
  }
}

export default DatePicker_;
