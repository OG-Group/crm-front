import { Component } from 'react';
import { Card, Space, Row, Col, Typography, Divider } from 'antd';
import { YMaps, Map, Placemark, FullscreenControl, SearchControl } from '@pbe/react-yandex-maps';

import Input_ from './Input';
import Radio_ from './Radio';
import Select_ from './Select';

const { Text } = Typography;

class CommonFields extends Component {
  constructor(props) {
    super(props);
    this.xs = { span: 24 };
    this.sm = { span: 24 };
    this.md = { span: 24 };
    this.lg = { span: 24 };
    this.xl = { span: 12 };

    this.state = {
      mainPropertyType: '',
      mainDescription: '',
      mainGuestsCount: 0,
      mainAddress: '',
      mainCoordinatesLat: 0.0,
      mainCoordinatesLng: 0.0,
      mainCadastralNumber: 0,
      mainPhoneSchemaCountryCode: '',
      mainPhoneSchemaCountryNumber: '',
      mainHighwayDistance: 0.0,
      mainHigwayId: 0,
      mainHighwayscheamDistace: 0.0,
      mainHighwayscheamId: 0,
      mainUndegroundsTransportType: '',
      mainUndegroundsTime: 0,
      mainUndegroundsId: 0,
      mainBookingStatus: '',
      mainSubagentEmail: '',
      mainSubagentPhone: '',
      mainSubagentFirstName: '',
      mainSubagentLastName: '',
      mainSubagentAvatar: '',
      mainLayoutphotoUrl: '',
      mainLayoutphotoIsDefault: true,
      mainLayoutphotoPhotoType: '',
      mainPhotosFullurl: '',
      mainPhotosIsDefault: true,
      mainPhotosType: '',
      mainVideosUrl: '',
      mainPremiumTitle: '',
      mainIsRentByParts: true,
      mainRentByPartsDesc: '',
      mainPublishTermsServices: '',
      mainPublishTermsExcludedservices: '',
      mainPublishTermsIgnore: true,
      mainExtraDataHomeOwnerName: '',
      mainExtraDataHomeOwnerPhone: '',
      mainExtraDataExacAddres: '',
      mainAuctionBet: 0.0,
    };
  }

  render() {
    return (
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" xs={this.xs} sm={this.sm} md={this.md} lg={this.lg} xl={24}>
          <Card className="mapCard" style={{ margin: 0, borderRadius: 0 }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input_ title="Адрес или название бизнес-центра" />
              <YMaps>
                <Map
                  style={{
                    minHeight: 492,
                    borderRadius: '10px',
                  }}
                  defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
                  <Placemark geometry={[55.75, 37.57]} />
                  {/* <FullscreenControl /> */}
                  <SearchControl
                    options={{
                      float: 'left',
                    }}
                  />
                </Map>
              </YMaps>
            </Space>
          </Card>
        </Col>

        <Col xs={this.xs} sm={this.sm} md={this.md} lg={this.lg} xl={this.xl}>
          <Card
            style={{
              borderRadius: 0,
            }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Select_
                onChange={(mainPropertyType) => {
                  this.setState({ mainPropertyType });
                  this.props.setNextForm(mainPropertyType);
                }}
                options={[
                  { value: 'building', label: 'Здание' },
                  { value: 'freeAppointment', label: 'помещение свободного назначения' },
                  { value: 'garage', label: 'гараж' },
                  { value: 'industry', label: 'производство' },
                  { value: 'land', label: 'земля' },
                  { value: 'office', label: 'офис' },
                  { value: 'shoppingArea', label: 'торговая площадь' },
                  { value: 'warehouse', label: 'склад' },
                ]}
                title="Тип недвижимости"
              />
              <Input_
                title="Текст объявления"
                TextArea
                onChange={(mainDescription) => this.setState({ mainDescription })}
                value={this.state.mainDescription}
              />
              <Input_
                title="Количество гостей"
                InputNumber
                onChange={(mainGuestsCount) => this.setState({ mainGuestsCount })}
                value={this.state.mainGuestsCount}
              />
              {/* //TODO добавить координаты по карте */}
              {/* <Input_
                title="Координаты местоположения"
                onChange={(mainAddress) => this.setState({ mainAddress })}
                value={this.state.mainAddress}
              /> */}

              <Divider plain>Координаты местоположения</Divider>
              <Input_
                title="Широта"
                InputNumber
                onChange={(mainCoordinatesLat) => this.setState({ mainCoordinatesLat })}
                value={this.state.mainCoordinatesLat}
              />
              <Input_
                title="Долгота"
                InputNumber
                onChange={(mainCoordinatesLng) => this.setState({ mainCoordinatesLng })}
                value={this.state.mainCoordinatesLng}
              />
              <Divider />

              <Input_
                title="Кадастровый номер"
                InputNumber
                onChange={(mainCadastralNumber) => this.setState({ mainCadastralNumber })}
                value={this.state.mainCadastralNumber}
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
              {/* <Text>{'->Телефон'}</Text> */}
              <Divider plain>Телефон</Divider>

              <Input_
                title="Код страны"
                onChange={(mainPhoneSchemaCountryCode) =>
                  this.setState({ mainPhoneSchemaCountryCode })
                }
                value={this.state.mainPhoneSchemaCountryCode}
              />
              <Input_
                title="Номер"
                onChange={(mainPhoneSchemaCountryNumber) =>
                  this.setState({ mainPhoneSchemaCountryNumber })
                }
                value={this.state.mainPhoneSchemaCountryNumber}
              />
              <Divider />

              <Select_
                // onChange={(Undergrounds) => {
                //   this.setState({ Undergrounds: {...this.state.Undergrounds} });
                // }} //TODO доделать метро
                options={[
                  { value: 'transport', label: 'На транспорте' },
                  { value: 'walk', label: 'Пешком' },
                ]}
                title="Способ передвижения до метро"
              />
              <Radio_
                title="Бронирование"
                options={[
                  { value: 'free', label: 'Свободна' },
                  { value: 'booked', label: 'Забронировано' },
                ]}
                onChange={(mainBookingStatus) => this.setState({ mainBookingStatus })}
                value={this.state.mainBookingStatus}
              />

              <Divider plain>Информация о субагенте</Divider>

              <Input_
                title="Email"
                onChange={(mainSubagentEmail) => this.setState({ mainSubagentEmail })}
                value={this.state.mainSubagentEmail}
              />
              <Input_
                title="Телефон"
                onChange={(mainSubagentPhone) => this.setState({ mainSubagentPhone })}
                value={this.state.mainSubagentPhone}
              />
              <Input_
                title="Имя"
                onChange={(mainSubagentFirstName) => this.setState({ mainSubagentFirstName })}
                value={this.state.mainSubagentFirstName}
              />
              <Input_
                title="Фамилия"
                onChange={(mainSubagentLastName) => this.setState({ mainSubagentLastName })}
                value={this.state.mainSubagentLastName}
              />
              <Input_
                title="Ссылка на аватар агента"
                onChange={(mainSubagentAvatar) => this.setState({ mainSubagentAvatar })}
                value={this.state.mainSubagentAvatar}
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
              <Divider plain>Планировка</Divider>

              <Input_
                title="URL исходного изображения"
                onChange={(mainLayoutphotoUrl) => this.setState({ mainLayoutphotoUrl })}
                value={this.state.mainLayoutphotoUrl}
              />
              <Radio_
                title="Является ли фото по-умолчанию"
                options={[
                  { value: true, label: 'Да' },
                  { value: false, label: 'Нет' },
                ]}
                onChange={(mainLayoutphotoIsDefault) => this.setState({ mainLayoutphotoIsDefault })}
                value={this.state.mainLayoutphotoIsDefault}
              />
              <Select_
                onChange={(mainLayoutphotoPhotoType) => {
                  this.setState({ mainLayoutphotoPhotoType });
                }}
                options={[
                  { value: 'realtyObject', label: 'Объект недвижимости' },
                  { value: 'realtyObjectLayout', label: 'Планировка объекта' },
                  { value: 'realtyFloorLayout', label: 'План этажа на котором находится объект' },
                ]}
                title="Тип фото"
              />

              <Divider plain>Фотографии объекта</Divider>

              <Input_
                title="URL исходного изображения"
                onChange={(mainPhotosFullurl) => this.setState({ mainPhotosFullurl })}
                value={this.state.mainPhotosFullurl}
              />
              <Radio_
                title="Является ли фото по-умолчанию"
                options={[
                  { value: true, label: 'Да' },
                  { value: false, label: 'Нет' },
                ]}
                onChange={(mainPhotosIsDefault) => this.setState({ mainPhotosIsDefault })}
                value={this.state.mainPhotosIsDefault}
              />
              <Select_
                onChange={(mainPhotosType) => {
                  this.setState({ mainPhotosType });
                }}
                value={this.state.mainPhotosIsDefault}
                options={[
                  { value: 'realtyObject', label: 'Объект недвижимости' },
                  { value: 'realtyObjectLayout', label: 'Планировка объекта' },
                  { value: 'realtyFloorLayout', label: 'План этажа на котором находится объект' },
                ]}
                title="Тип фото"
              />

              <Divider plain>Видео объекта</Divider>

              <Input_
                title="Ссылка на видео"
                onChange={(mainVideosUrl) => this.setState({ mainVideosUrl })}
                value={this.state.mainVideosUrl}
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
              <Input_
                title="Заголовок объявления"
                onChange={(mainPremiumTitle) => this.setState({ mainPremiumTitle })}
                value={this.state.mainPremiumTitle}
              />
              <Radio_
                title="Сдается ли в аренду частями"
                options={[
                  { value: true, label: 'Да' },
                  { value: false, label: 'Нет' },
                ]}
                onChange={(mainIsRentByParts) => this.setState({ mainIsRentByParts })}
                value={this.state.mainIsRentByParts}
              />

              {this.state.mainIsRentByParts && (
                <Input_
                  title="Описание сдачи части в аренду"
                  TextArea
                  onChange={(mainRentByPartsDesc) => this.setState({ mainRentByPartsDesc })}
                  value={this.state.mainRentByPartsDesc}
                />
              )}

              <Divider plain>Условия размещения в аренду</Divider>

              <Select_
                onChange={(mainPublishTermsServices) => {
                  this.setState({ mainPublishTermsServices });
                }}
                value={this.state.mainPublishTermsServices}
                options={[
                  { value: 'free', label: 'Бесплатное' },
                  { value: 'highlight', label: 'Выделение цветом' },
                  { value: 'paid', label: 'Платное' },
                  { value: 'premium', label: 'Премиум-объявление' },
                  { value: 'top3', label: 'Топ' },
                ]}
                title="Список размещений"
              />
              <Select_
                onChange={(mainPublishTermsExcludedservices) => {
                  this.setState({ mainPublishTermsExcludedservices });
                }}
                value={this.state.mainPublishTermsExcludedservices}
                options={[
                  { value: 'highlight', label: 'Выделение цветом' },
                  { value: 'premium', label: 'Премиум-объявление' },
                  { value: 'top3', label: 'Топ' },
                ]}
                title="Условия размещения, которые нельзя применять к объявлению"
              />
              <Radio_
                title="Не использовать пакет размещений при публикации объявления"
                options={[
                  { value: true, label: 'Да' },
                  { value: false, label: 'Нет' },
                ]}
                onChange={(mainPublishTermsIgnore) => this.setState({ mainPublishTermsIgnore })}
                value={this.state.mainPublishTermsIgnore}
              />

              <Divider plain>Дополнительные данные для модератора</Divider>

              <Input_
                title="ФИО собственника"
                onChange={(mainExtraDataHomeOwnerName) =>
                  this.setState({ mainExtraDataHomeOwnerName })
                }
                value={this.state.mainExtraDataHomeOwnerName}
              />
              <Input_
                title="Телефон собственника"
                onChange={(mainExtraDataHomeOwnerPhone) =>
                  this.setState({ mainExtraDataHomeOwnerPhone })
                }
                value={this.state.mainExtraDataHomeOwnerPhone}
              />
              <Input_
                title="Точный адрес объекта"
                onChange={(mainExtraDataExacAddres) => this.setState({ mainExtraDataExacAddres })}
                value={this.state.mainExtraDataExacAddres}
              />
              <Input_
                title="Ставка на объявление в аукционе"
                InputNumber
                onChange={(mainAuctionBet) => this.setState({ mainAuctionBet })}
                value={this.state.mainAuctionBet}
              />
            </Space>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default CommonFields;
