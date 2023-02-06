import { Button, Card, Radio, Select, Space, Typography, Divider, Row, Col } from 'antd';
import { React } from 'react';
import { Component } from 'react';

import Input_ from '../../../components/Input';
import Radio_ from '../../../components/Radio';
import Select_ from '../../../components/Select';

const { Option } = Select;
const { Text, Title } = Typography;

class BuildingRentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealType: 'sale',
      placementType: '',

      categoryB: '',
      conditionType: '',
      layout: '',
      hasFurniture: true,
      inputType: '',
      availableFrom: '',
      taxNumber: 0,
      isInHiddenBase: true,
      landArea: 0.0,
      landAreaUnitType: '',
      landType: '',
      areaPartsRentByPartsSchemaArea: 0.0,
      areaPartsRentByPartsSchemaPrice: 0.0,
      btPrice: 0.0,
      btPriceType: '',
      btCurrency: '',
      btPaymentPeriod: '',
      btValType: '',
      btLeaseType: '',
      btIncludedOptionsEnum: '',
      btLeaseTermType: '',
      btMinLeaseTerm: 0,
      btPrepayMounths: 0,
      btHasGracePeriod: true,
      btDeposit: 0,
      btClientFee: 0,
      btSecurityDeposit: 0,
      btAgentFee: 0,
      btAgentBonusValue: 0.0,
      btAgentBonusPaymentType: '',
      btAgentBonusCurrency: '',
      createdBy: '',
      bextinguishingSystemTypeEnum: '',
      bfloorsCount: 0,
      btotalArea: 0.0,
      bheatingType: '',
      bceilingHeight: 0.0,
      bparkingType: '',
      bparkingPlacesCount: 0,
      bparkingPriceMonthly: 0.0,
      bparkingIsFree: true,
      bhouseLine: '',
      bclassType: '',
      bdeveloper: '',
      bmanagementCompany: '',
      bventilationType: '',
      bconditioningType: '',
      bliftType: '',
      bliftAdditionalType: '',
      bliftCount: 0,
      bstatusType: '',
      bname: '',
      btype: '',
    };

    this.xs = { span: 24 };
    this.sm = { span: 24 };
    this.md = { span: 24 };
    this.lg = { span: 24 };
    this.xl = { span: 12 };
    // this.mapRef = () => {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Row gutter={[16, 16]} align="top">
          <Col xs={this.xs} sm={this.sm} md={this.md} lg={this.lg} xl={this.xl}>
            <Card
              style={{
                borderRadius: 0,
              }}>
              <Space direction="vertical" style={{ width: '100%' }}></Space>
            </Card>
          </Col>

          {this.state.placementType === 'office' && (
            <Col xs={this.xs} sm={this.sm} md={this.md} lg={this.lg} xl={this.xl}>
              <Card
                style={{
                  borderRadius: 0,
                }}>
                <Space direction="vertical" style={{ width: '100%' }}></Space>
              </Card>
            </Col>
          )}

          <Col xs={this.xs} sm={this.sm} md={this.md} lg={this.lg} xl={this.xl}>
            <Card
              style={{
                borderRadius: 0,
                marginTop: 0,
              }}>
              <Space direction="vertical" style={{ width: '100%' }}></Space>
            </Card>

            {/* </Space> */}
          </Col>
        </Row>
      </>
    );
  }
}
export default BuildingRentForm;
