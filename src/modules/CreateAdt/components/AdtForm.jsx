import { Button, Card, Radio, Select, Space, Typography, Divider, Row, Col } from 'antd';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import { React } from 'react';
import { Component } from 'react';

import Input_ from './Input';
import Radio_ from './Radio';
import Select_ from './Select';

const { Option } = Select;
const { Text, Title } = Typography;

class AdtForm extends Component {
  constructor(props) {
    super(props);
    this.state = { dealType: 'sale', placementType: '' };
    // this.mapRef = () => {};
  }

  componentDidMount() {
    // const map = this.mapRef;
    // console.log(map);
    // this.setState({ mapHeight: document.getElementsByClassName('mapCard')[0].clientHeight });
  }

  render() {
    return (
      <>
        <Divider />
        <Row gutter={[16, 24]} align="top">
          <Col span={12}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Card
                style={{
                  borderRadius: 0,
                }}>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Radio_
                    options={[{ value: 'agent', label: 'Агент' }]}
                    title="Тип аренды"
                    defaultValue="agent"
                    buttonStyle="solid"
                  />

                  <Radio_
                    options={[
                      { value: 'sale', label: 'Продажа' },
                      { value: 'rent', label: 'Аренда' },
                    ]}
                    onChange={(e) => {
                      console.log(e);
                      this.setState({ dealType: e.target.value });
                    }}
                    title="Тип сделки"
                    defaultValue="sale"
                    buttonStyle="solid"
                  />

                  {this.state.dealType === 'rent' && (
                    <Radio_
                      options={[
                        { value: 'living', label: 'Длительно' },
                        { value: 'commers', label: 'Несколько месяцев' },
                      ]}
                      title="Тип аренды"
                      buttonStyle="solid"
                    />
                  )}

                  <Radio_
                    options={[
                      { value: 'living', label: 'Жилая' },
                      { value: 'commers', label: 'Коммерческая' },
                    ]}
                    title="Тип недвижимости"
                    buttonStyle="solid"
                  />

                  <Select_
                    title="Тип помещения"
                    onChange={(value) => {
                      this.setState({ placementType: value });
                    }}
                    options={[
                      { value: 'office', label: 'Офис' },
                      { value: '1', label: 'Здание' },
                      { value: '2', label: 'Торговая площадь' },
                      { value: '3', label: 'Помещение свободного назначения' },
                      { value: '4', label: 'Производство' },
                      { value: '5', label: 'Склад' },
                      { value: '6', label: 'Гараж' },
                      { value: '7', label: 'Бизнес' },
                      { value: '8', label: 'Коммерческая земля' },
                    ]}
                  />
                </Space>
              </Card>

              {this.state.placementType === 'office' && (
                <Card
                  style={{
                    borderRadius: 0,
                  }}>
                  <Title level={3}>Об объекте</Title>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Input_ title="Кадастровый номер" />
                    <Input_ title="Номер налоговой" />
                    <Input_ title="Общая площадь" />
                    <Input_ title="Этаж" />

                    <Select_
                      title="Юридический адрес"
                      options={[
                        { value: 'office', label: 'Предоставляется' },
                        { value: '1', label: 'Не предоставляется' },
                      ]}
                    />

                    <Input_ title="Высота потолков" />

                    <Radio_
                      options={[
                        { value: '1', label: 'Да' },
                        { value: '2', label: 'Нет' },
                      ]}
                      title="Помещение занято"
                      buttonStyle="solid"
                    />

                    <Radio_
                      options={[
                        { value: '1', label: 'Кабинетная' },
                        { value: '2', label: 'Открытая' },
                        { value: '2', label: 'Коридорная' },
                        { value: '2', label: 'Смешанная' },
                      ]}
                      title="Планировка"
                      buttonStyle="solid"
                    />

                    <Select_
                      title="Кол-во мокрых точек"
                      options={[
                        { value: 'office', label: 'нет' },
                        { value: '1', label: '1' },
                        { value: '2', label: '2' },
                        { value: '3', label: '3' },
                        { value: '4', label: '4' },
                      ]}
                    />

                    <Input_ title="Электрическая мощность" />

                    <Select_
                      title="Состояние"
                      options={[
                        { value: 'office', label: 'Офисная отделка' },
                        { value: '1', label: 'Под чистовую отделку' },
                        { value: '2', label: 'Требуется капитальный ремонт' },
                        { value: '3', label: 'Требуется косметический ремонт' },
                      ]}
                    />

                    <Radio_
                      options={[
                        { value: '1', label: 'Есть' },
                        { value: '2', label: 'Нет' },
                      ]}
                      title="Мебель"
                      buttonStyle="solid"
                    />

                    <Radio_
                      options={[
                        { value: '1', label: 'Свободный' },
                        { value: '2', label: 'Пропускная система' },
                      ]}
                      title="Доступ"
                      buttonStyle="solid"
                    />

                    <Radio_
                      options={[
                        { value: '1', label: 'Наземная' },
                        { value: '2', label: 'Многоуровневая' },
                        { value: '2', label: 'Подземная' },
                        { value: '2', label: 'На крыше' },
                      ]}
                      title="Парковка"
                      buttonStyle="solid"
                    />

                    <Input_ title="Кличество мест" />

                    <Input_ title="Стоймость (доделать)" />
                  </Space>
                </Card>
              )}

              <Card
                style={{
                  borderRadius: 0,
                  marginTop: 0,
                }}>
                <Title level={3}>О здании</Title>

                <Space direction="vertical" style={{ width: '100%' }}>
                  <Input_ title="Название" />

                  <Input_ title="Год постройки" />

                  <Select_
                    title="Тип сделки"
                    options={[
                      { value: '1', label: 'Административное здание' },
                      { value: '2', label: 'Бизнес-центр' },
                      { value: '3', label: 'Деловой центр' },
                      { value: '4', label: 'Деловой квартал' },
                      { value: '5', label: 'Деловой дом' },
                      { value: '6', label: '...' },
                    ]}
                  />

                  <Radio_
                    options={[
                      { value: 'living', label: 'А+' },
                      { value: '1', label: 'А' },
                      { value: '2', label: 'В+' },
                      { value: '3', label: 'В' },
                      { value: '4', label: 'С+' },
                      { value: '5', label: 'C' },
                    ]}
                    title="Класс здания"
                    buttonStyle="solid"
                  />

                  <Row>
                    <Input_ title="Участок" />
                    <Radio.Group onChange={null}>
                      <Radio value={1}>в собстенности</Radio>
                      <Radio value={2}>в аренде</Radio>
                    </Radio.Group>
                  </Row>

                  <Radio_
                    options={[
                      { value: '1', label: 'Действующее' },
                      { value: '2', label: 'Проект' },
                      { value: '3', label: 'Строящееся' },
                    ]}
                    title="Категория"
                    buttonStyle="solid"
                  />

                  <Input_ title="Девелопер" />

                  <Input_ title="Управляющая компания" />

                  <Radio_
                    options={[
                      { value: '1', label: 'Длительно' },
                      { value: '2', label: 'Несколько месяцев' },
                    ]}
                    title="Категория"
                    buttonStyle="solid"
                  />
                </Space>
              </Card>
            </Space>
          </Col>

          <Col className="gutter-row" span={12}>
            <Card className="mapCard" style={{ margin: 0, borderRadius: 0 }}>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Input_ title="Адрес или название бизнес-центра" />
                <YMaps>
                  <Map
                    style={{
                      minHeight: 492,
                      borderRadius: '10px',
                    }}
                    defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                  />
                </YMaps>
              </Space>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
export default AdtForm;
