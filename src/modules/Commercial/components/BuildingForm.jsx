import { Button, Card, Radio, Select, Space, Typography, Divider, Row, Col } from 'antd';
import { React } from 'react';
import { Component } from 'react';

import Input_ from '../../../components/Input';
import Radio_ from '../../../components/Radio';
import Select_ from '../../../components/Select';
import DatePicker_ from '../../../components/DatePicker';

const { Option } = Select;
const { Text, Title } = Typography;

class BuildingRentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealType: 'sale',
      placementType: '',

      conditionType: '',
      layout: '',
      hasFurniture: false,
      inputType: '',
      availableFrom: '',
      taxNumber: 0,
      isInHiddenBase: false,
      landArea: 0.0,
      landAreaUnitType: '',
      landType: '',
      areaPartsRentByPartsSchemaArea: 0.0,
      areaPartsRentByPartsSchemaPrice: 0.0,
      btPrice: 0.0,
      btPriceType: '',
      btCurrency: '',
      btPaymentPeriod: '',
      btVatType: '',
      btLeaseType: '',
      btIncludedOptionsEnum: '',
      btLeaseTermType: '',
      btMinLeaseTerm: 0,
      btPrepayMounths: 0,
      btHasGracePeriod: false,
      btDeposit: 0,
      btClientFee: 0,
      btSecurityDeposit: 0,
      btAgentFee: 0,
      btAgentBonusValue: 0.0,
      btAgentBonusPaymentType: '',
      btAgentBonusCurrency: '',
      btContractType: '',
      createdBy: '',
      bextinguishingSystemType: '',
      bextinguishingSystemTypeEnum: [''],
      bfloorsCount: 0,
      btotalArea: 0.0,
      bheatingType: '',
      bceilingHeight: 0.0,
      bparkingType: '',
      bparkingPlacesCount: 0,
      bparkingPriceMonthly: 0.0,
      bparkingIsFree: false,
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
    // this.setState({ categoryB: this.props.categoryB });
    return (
      <>
        <Row gutter={[16, 16]} align="stretch">
          <Col xs={this.xs} sm={this.sm} md={this.md} lg={this.lg} xl={this.xl}>
            <Card
              style={{
                borderRadius: 0,
              }}>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Select_
                  onChange={(conditionType) => {
                    this.setState({ conditionType });
                  }}
                  value={this.props.conditionType}
                  options={[
                    { value: 'cosmeticRepairsRequired', label: 'Требуется косметический ремонт' },
                    { value: 'design', label: 'Дизайнерский ремонт' },
                    { value: 'finishing', label: 'Под чистовую отделку' },
                    { value: 'majorRepairsRequired', label: 'Требуется капитальный ремонт' },
                    { value: 'typical', label: 'Типовой ремонт' },
                  ]}
                  title="Состояние"
                />

                <Select_
                  onChange={(layout) => {
                    this.setState({ layout });
                  }}
                  value={this.props.layout}
                  options={[
                    { value: 'cabinet', label: 'Кабинетная' },
                    { value: 'corridorplan', label: 'Коридорная' },
                    { value: 'finishing', label: 'Под чистовую отделку' },
                    { value: 'mixed', label: 'Смешанная' },
                    { value: 'openSpace', label: 'Открытая' },
                  ]}
                  title="Планировка"
                />

                <Radio_
                  title="Есть мебель в комнатах"
                  options={[
                    { value: true, label: 'Да' },
                    { value: false, label: 'Нет' },
                  ]}
                  onChange={(hasFurniture) => this.setState({ hasFurniture })}
                  value={this.state.hasFurniture}
                />

                <Select_
                  onChange={(inputType) => {
                    this.setState({ inputType });
                  }}
                  value={this.props.inputType}
                  options={[
                    { value: 'commonFromStreet', label: 'Общий с улицы' },
                    { value: 'commonFromYard', label: 'Общий со двора' },
                    { value: 'separateFromStreet', label: 'Отдельный с улицы' },
                    { value: 'separateFromYard', label: 'Отдельный со двора' },
                  ]}
                  title="Вход"
                />

                <DatePicker_
                  title="Дата освобождения"
                  placeholder={this.state.availableFrom}
                  onChange={(availableFrom) => this.setState({ availableFrom })}
                />

                <Input_
                  title="Номер налоговой"
                  InputNumber
                  numberType="int32"
                  onChange={(taxNumber) => this.setState({ taxNumber })}
                  value={this.state.taxNumber}
                />

                <Radio_
                  title="Размещение в закрытой базе"
                  options={[
                    { value: true, label: 'Да' },
                    { value: false, label: 'Нет' },
                  ]}
                  onChange={(isInHiddenBase) => this.setState({ isInHiddenBase })}
                  value={this.state.isInHiddenBase}
                />
              </Space>
            </Card>
          </Col>

          <Col xs={this.xs} sm={this.sm} md={this.md} lg={this.lg} xl={this.xl}>
            <Card
              style={{
                borderRadius: 0,
              }}>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Title style={{ margin: 0 }} level={5}>
                  Информация о Здании
                </Title>

                <Input_
                  title="Название"
                  onChange={(bname) => this.setState({ bname })}
                  value={this.state.bname}
                />

                <Input_
                  title="Количество этажей в здании"
                  InputNumber
                  numberType="Int64"
                  onChange={(bfloorsCount) => this.setState({ bfloorsCount })}
                  value={this.state.bfloorsCount}
                />

                <Input_
                  title="Общая площадь"
                  InputNumber
                  numberType="Double"
                  onChange={(btotalArea) => this.setState({ btotalArea })}
                  value={this.state.btotalArea}
                />

                <Select_
                  onChange={(bheatingType) => {
                    this.setState({ bheatingType });
                  }}
                  value={this.props.bheatingType}
                  options={[
                    { value: 'autonomous', label: 'Автономное' },
                    { value: 'central', label: 'Центральное' },
                    { value: 'no', label: 'Нет' },
                  ]}
                  title="Отопление"
                />

                <Input_
                  title="Высота потолков"
                  InputNumber
                  numberType="Double"
                  onChange={(bceilingHeight) => this.setState({ bceilingHeight })}
                  value={this.state.bceilingHeight}
                />

                <Divider plain>Парковка</Divider>

                <Select_
                  onChange={(bparkingType) => {
                    this.setState({ bparkingType });
                  }}
                  value={this.props.bparkingType}
                  options={[
                    { value: 'ground', label: 'Наземная' },
                    { value: 'multilevel', label: 'Многоуровневая' },
                    { value: 'open', label: 'Открытая' },
                    { value: 'roof', label: 'На крыше' },
                    { value: 'underground', label: 'Подземная' },
                  ]}
                  title="Тип парковки"
                />

                <Input_
                  title="Количество мест"
                  InputNumber
                  numberType="Int64"
                  onChange={(bparkingPlacesCount) => this.setState({ bparkingPlacesCount })}
                  value={this.state.bparkingPlacesCount}
                />

                <Input_
                  title="Стоимость в месяц за место"
                  InputNumber
                  numberType="Double"
                  onChange={(bparkingPriceMonthly) => this.setState({ bparkingPriceMonthly })}
                  value={this.state.bparkingPriceMonthly}
                />

                <Radio_
                  title="Бесплатная"
                  options={[
                    { value: true, label: 'Да' },
                    { value: false, label: 'Нет' },
                  ]}
                  onChange={(bparkingIsFree) => this.setState({ bparkingIsFree })}
                  value={this.state.bparkingIsFree}
                />

                <Select_
                  onChange={(bparkingType) => {
                    this.setState({ bparkingType });
                  }}
                  value={this.props.bparkingType}
                  options={[
                    { value: 'administrativeBuilding', label: 'Административное здание' },
                    { value: 'businessCenter', label: 'Бизнес-центр' },
                    { value: 'businessCenter2', label: 'Деловой центр' },
                    { value: 'businessHouse', label: 'Деловой дом' },
                    { value: 'businessPark', label: 'Бизнес-парк' },

                    { value: 'businessQuarter', label: 'Бизнес-квартал' },
                    { value: 'businessQuarter2', label: 'Деловой квартал' },
                    { value: 'free', label: 'Объект свободного назначения' },
                    { value: 'industrialComplex', label: 'Производственный комплекс' },
                    { value: 'industrialPark', label: 'Индустриальный парк' },
                    { value: 'industrialSite', label: 'Промплощадка' },
                    {
                      value: 'industrialWarehouseComplex',
                      label: 'Производственно-складской комплекс',
                    },
                    { value: 'logisticsCenter', label: 'Логистический центр' },
                    { value: 'logisticsComplex', label: 'Логистический комплекс' },
                    { value: 'logisticsPark', label: 'Логистический парк' },
                    { value: 'mansion', label: 'Особняк' },
                    { value: 'manufactureBuilding', label: 'Производственное здание' },
                    { value: 'manufacturingFacility', label: 'Производственный цех' },
                    { value: 'modular', label: 'Модульное здание' },
                    { value: 'multifunctionalComplex', label: 'Многофункциональный комплекс' },
                    { value: 'officeAndHotelComplex', label: 'Офисно-гостиничный комплекс' },
                    { value: 'officeAndResidentialComplex', label: 'Офисно-жилой комплекс' },
                    { value: 'officeAndWarehouse', label: 'Офисно-складское здание' },
                    { value: 'officeAndWarehouseComplex', label: 'Офисно-складской комплекс' },
                    { value: 'officeBuilding', label: 'Офисное здание' },
                    { value: 'officeCenter', label: 'Офисный центр' },
                    { value: 'officeComplex', label: 'Офисный комплекс' },
                    { value: 'officeIndustrialComplex', label: 'Офисно-производственный комплекс' },
                    { value: 'officeQuarter', label: 'Офисный квартал' },
                    { value: 'old', label: 'Старый фонд' },
                    { value: 'other', label: 'Другое' },
                    { value: 'outlet', label: 'Аутлет' },
                    { value: 'propertyComplex', label: 'Имущественный комплекс' },
                    { value: 'residentialComplex', label: 'Жилой комплекс' },
                    { value: 'residentialHouse', label: 'Жилой дом' },
                    { value: 'shoppingAndBusinessComplex', label: 'Торгово-деловой комплекс' },
                    { value: 'shoppingAndCommunityCenter', label: 'Торгово-общественный центр' },
                    {
                      value: 'shoppingAndEntertainmentCenter',
                      label: 'Торгово-развлекательный центр',
                    },
                    { value: 'shoppingAndWarehouseComplex', label: 'Торгово-складской комплекс' },
                    { value: 'shoppingCenter', label: 'Торговый центр' },
                    { value: 'shoppingComplex', label: 'Торговый комплекс' },
                    {
                      value: 'specializedShoppingCenter',
                      label: 'Специализированный торговый центр',
                    },
                    { value: 'standaloneBuilding', label: 'Отдельно стоящее здание' },
                    { value: 'technopark', label: 'Технопарк' },
                    { value: 'tradeAndExhibitionComplex', label: 'Торгово-выставочный комплекс' },
                    { value: 'tradingHouse', label: 'Торговый дом' },
                    { value: 'tradingOfficeComplex', label: 'Торгово-офисный комплекс' },
                    { value: 'warehouse', label: 'Склад' },
                    { value: 'warehouseComplex', label: 'Складской комплекс' },
                  ]}
                  title="Тип"
                />

                <Radio_
                  title="Линия домов"
                  options={[
                    { value: 'first', label: 'Первая' },
                    { value: 'other', label: 'Иная' },
                    { value: 'second', label: 'Вторая' },
                  ]}
                  onChange={(bhouseLine) => this.setState({ bhouseLine })}
                  value={this.state.bhouseLine}
                />

                <Radio_
                  title="Класс"
                  options={[
                    { value: 'a', label: 'A' },
                    { value: 'aPlus', label: 'A+' },
                    { value: 'b', label: 'B' },
                    { value: 'bMinus', label: 'B-' },
                    { value: 'bPlus', label: 'B+' },
                    { value: 'c', label: 'C' },
                  ]}
                  onChange={(bclassType) => this.setState({ bclassType })}
                  value={this.state.bclassType}
                />

                <Input_
                  title="Застройшик"
                  onChange={(bdeveloper) => this.setState({ bdeveloper })}
                  value={this.state.bdeveloper}
                />

                <Input_
                  title="Управляющая компания"
                  onChange={(bmanagementCompany) => this.setState({ bmanagementCompany })}
                  value={this.state.bmanagementCompany}
                />

                <Select_
                  onChange={(bventilationType) => {
                    this.setState({ bventilationType });
                  }}
                  value={this.props.bventilationType}
                  options={[
                    { value: 'forced', label: 'Приточная' },
                    { value: 'natural', label: 'Естественная' },
                    { value: 'no', label: 'Нет' },
                  ]}
                  title="Вентиляция"
                />

                <Select_
                  onChange={(bconditioningType) => {
                    this.setState({ bconditioningType });
                  }}
                  value={this.props.bconditioningType}
                  options={[
                    { value: 'central', label: 'Центральное' },
                    { value: 'local', label: 'Местное' },
                    { value: 'no', label: 'Нет' },
                  ]}
                  title="Кондиционирование"
                />

                <Select_
                  onChange={(bextinguishingSystemType) => {
                    this.setState({ bextinguishingSystemType });
                  }}
                  value={this.props.bextinguishingSystemType}
                  options={[
                    { value: 'alarm', label: 'Сигнализация' },
                    { value: 'gas', label: 'Газовая' },
                    { value: 'hydrant', label: 'Гидрантная' },
                    { value: 'powder', label: 'Порошковая' },
                    { value: 'sprinkler', label: 'Спринклерная' },
                    { value: 'no', label: 'Нет' },
                  ]}
                  title="Система пожаротушения"
                />
                {'добавить массив систем'}

                <Divider plain>Лифт</Divider>

                <Select_
                  onChange={(bliftType) => {
                    this.setState({ bliftType });
                  }}
                  value={this.props.bliftType}
                  options={[
                    { value: 'cargo', label: 'Грузовой' },
                    { value: 'escalator', label: 'Эскалатор' },
                    { value: 'lift', label: 'Лифт' },
                    { value: 'passenger', label: 'Пассажирский' },
                    { value: 'telpher', label: 'Тельфер' },
                    { value: 'travelator', label: 'Траволатор' },
                  ]}
                  title="Тип лифта"
                />

                <Input_
                  title="Дополнительный тип"
                  onChange={(bliftAdditionalType) => this.setState({ bliftAdditionalType })}
                  value={this.state.bliftAdditionalType}
                />

                <Input_
                  InputNumber
                  title="Количество"
                  numberType="Int64"
                  onChange={(bliftCount) => this.setState({ bliftCount })}
                  value={this.state.bliftCount}
                />

                <Select_
                  onChange={(bstatusType) => {
                    this.setState({ bstatusType });
                  }}
                  value={this.props.bstatusType}
                  options={[
                    { value: 'operational', label: 'Действующее' },
                    { value: 'project', label: 'Проект' },
                    { value: 'underConstruction', label: 'Строящееся' },
                  ]}
                  title="Категория"
                />

                <Divider plain>Информация об участке</Divider>

                <Input_
                  InputNumber
                  numberType="Double"
                  title="Площадь участка"
                  onChange={(landArea) => this.setState({ landArea })}
                  value={this.state.landArea}
                />

                <Radio_
                  title="Единица измерения"
                  options={[
                    { value: 'hectare', label: 'Гектар' },
                    { value: 'sotka', label: 'Сотка' },
                  ]}
                  onChange={(landAreaUnitType) => this.setState({ landAreaUnitType })}
                  value={this.state.landAreaUnitType}
                />

                <Radio_
                  title="Тип участка"
                  options={[
                    { value: 'owned', label: 'В собственности' },
                    { value: 'rent', label: 'В аренде' },
                  ]}
                  onChange={(landType) => this.setState({ landType })}
                  value={this.state.landType}
                />

                <Divider plain>Размещение площадей частями</Divider>

                <Input_
                  InputNumber
                  numberType="Double"
                  title="Площадь части"
                  onChange={(areaPartsRentByPartsSchemaArea) =>
                    this.setState({ areaPartsRentByPartsSchemaArea })
                  }
                  value={this.state.areaPartsRentByPartsSchemaArea}
                />

                <Input_
                  InputNumber
                  numberType="Double"
                  title="Стоимость части"
                  onChange={(areaPartsRentByPartsSchemaPrice) =>
                    this.setState({ areaPartsRentByPartsSchemaPrice })
                  }
                  value={this.state.areaPartsRentByPartsSchemaPrice}
                />
              </Space>
            </Card>
          </Col>

          <Col xs={this.xs} sm={this.sm} md={this.md} lg={this.lg} xl={this.xl}>
            <Card
              style={{
                borderRadius: 0,
                marginTop: 0,
              }}>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Title style={{ margin: 0 }} level={5}>
                  Условия сделки
                </Title>

                <Input_
                  InputNumber
                  numberType="Double"
                  title="Цена"
                  onChange={(btPrice) => this.setState({ btPrice })}
                  value={this.state.btPrice}
                />

                {this.props.categoryB === 'buildingRent' && (
                  <Select_
                    onChange={(btPriceType) => {
                      this.setState({ btPriceType });
                    }}
                    value={this.props.btPriceType}
                    options={[
                      { value: 'all', label: 'Цена за все' },
                      { value: 'hectare', label: 'Гектар' },
                      { value: 'sotka', label: 'Сотка' },
                      { value: 'squareMeter', label: 'Цена за квадратный метр' },
                    ]}
                    title="Тип цены"
                  />
                )}

                <Radio_
                  title="Валюта"
                  defaultValue={'rur'}
                  options={[
                    { value: 'eur', label: 'Евро' },
                    { value: 'rur', label: 'Рубль' },
                    { value: 'usd', label: 'Доллар' },
                  ]}
                  onChange={(btCurrency) => this.setState({ btCurrency })}
                  value={this.state.btCurrency}
                />

                {this.props.categoryB === 'buildingRent' && (
                  <Radio_
                    title="Период оплаты"
                    options={[
                      { value: 'annual', label: 'За год' },
                      { value: 'monthly', label: 'За месяц' },
                    ]}
                    onChange={(btPaymentPeriod) => this.setState({ btPaymentPeriod })}
                    value={this.state.btPaymentPeriod}
                  />
                )}

                <Select_
                  onChange={(btVatType) => {
                    this.setState({ btVatType });
                  }}
                  value={this.props.btVatType}
                  defaultValue={'included'}
                  options={[
                    { value: 'included', label: 'НДС включен' },
                    { value: 'notIncluded', label: 'НДС не облагается' },
                    { value: 'usn', label: 'УСН (упрощенная система налогообложения)' },
                  ]}
                  title="Тип НДС"
                />

                {this.props.categoryB === 'buildingSale' ? (
                  <Radio_
                    title="Тип аренды"
                    options={[
                      { value: 'direct', label: 'Прямая аренда' },
                      { value: 'sublease', label: 'Субаренда' },
                    ]}
                    onChange={(btLeaseType) => this.setState({ btLeaseType })}
                    value={this.state.btLeaseType}
                  />
                ) : (
                  <Radio_
                    title="Тип договора"
                    options={[
                      { value: 'leaseAssignment', label: 'Переуступка прав аренды' },
                      { value: 'sale', label: 'Продажа' },
                    ]}
                    onChange={(btContractType) => this.setState({ btContractType })}
                    value={this.state.btContractType}
                  />
                )}
                {this.props.categoryB === 'buildingRent' && (
                  <>
                    <Select_
                      onChange={(btIncludedOptionsEnum) => {
                        this.setState({ btIncludedOptionsEnum });
                      }}
                      value={this.props.btIncludedOptionsEnum}
                      options={[
                        { value: 'included', label: 'Операционные расходы' },
                        { value: 'utilityCharges', label: 'Коммунальные услуги' },
                      ]}
                      title="Включено в ставку"
                    />

                    <Radio_
                      title="Срок аренды"
                      options={[
                        { value: 'fewMonths', label: 'На несколько месяцев' },
                        { value: 'longTerm', label: 'Длительный' },
                      ]}
                      onChange={(btLeaseTermType) => this.setState({ btLeaseTermType })}
                      value={this.state.btLeaseTermType}
                    />

                    <Input_
                      InputNumber
                      numberType="Int64"
                      title="Минимальный срок аренды, мес"
                      onChange={(btMinLeaseTerm) => this.setState({ btMinLeaseTerm })}
                      value={this.state.btMinLeaseTerm}
                    />

                    <Input_
                      InputNumber
                      numberType="Int32"
                      title="Предоплата, от 1 до 12 месяцев"
                      onChange={(btPrepayMounths) => this.setState({ btPrepayMounths })}
                      value={this.state.btPrepayMounths}
                    />

                    <Radio_
                      title="Арендные каникулы"
                      options={[
                        { value: true, label: 'Да' },
                        { value: false, label: 'Нет' },
                      ]}
                      onChange={(btHasGracePeriod) => this.setState({ btHasGracePeriod })}
                      value={this.state.btHasGracePeriod}
                    />

                    <Input_
                      InputNumber
                      numberType="Int64"
                      title="Залог собственнику"
                      onChange={(btDeposit) => this.setState({ btDeposit })}
                      value={this.state.btDeposit}
                    />

                    <Input_
                      InputNumber
                      numberType="Int64"
                      title="Комиссия от прямого клиента, %%. По умолчанию 100%."
                      onChange={(btClientFee) => this.setState({ btClientFee })}
                      value={this.state.btClientFee}
                    />

                    <Input_
                      InputNumber
                      numberType="Int64"
                      title="Обеспечительный платеж."
                      onChange={(btSecurityDeposit) => this.setState({ btSecurityDeposit })}
                      value={this.state.btSecurityDeposit}
                    />

                    <Input_
                      InputNumber
                      numberType="Int64"
                      title="Комиссия от другого агента, %%. По умолчанию 100%."
                      onChange={(btAgentFee) => this.setState({ btAgentFee })}
                      value={this.state.btAgentFee}
                    />
                  </>
                )}

                <Divider plain>Бонус агенту</Divider>

                <Input_
                  InputNumber
                  title="Значение"
                  numberType="Double"
                  onChange={(btAgentBonusValue) => this.setState({ btAgentBonusValue })}
                  value={this.state.btAgentBonusValue}
                />

                <Radio_
                  onChange={(btAgentBonusPaymentType) => {
                    this.setState({ btAgentBonusPaymentType });
                  }}
                  value={this.props.btAgentBonusPaymentType}
                  options={[
                    { value: 'fixed', label: 'Фиксированный' },
                    { value: 'percent', label: 'Процент' },
                  ]}
                  title="Тип оплаты"
                />

                {this.state.btAgentBonusPaymentType === 'fixed' && (
                  <Radio_
                    title="Валюта"
                    defaultValue={'rur'}
                    options={[
                      { value: 'eur', label: 'Евро' },
                      { value: 'rur', label: 'Рубль' },
                      { value: 'usd', label: 'Доллар' },
                    ]}
                    onChange={(btAgentBonusCurrency) => this.setState({ btAgentBonusCurrency })}
                    value={this.state.btAgentBonusCurrency}
                  />
                )}
              </Space>
            </Card>

            {/* </Space> */}
          </Col>
        </Row>
      </>
    );
  }
}
export default BuildingRentForm;
