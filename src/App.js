import logo from './logo.svg';
import './App.css';
import CRMmain from './layout/CRMmain/CRMmain.jsx';
import Auth from './layout/Auth';
import Registration from './layout/Registration';
import { Tabs, Card } from 'antd';
import { Component } from 'react';
import ApiDiContainer from './service/apiDiContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: false,
      loading: false,
      errorCode: '',
      errorString: '',
      logged: false,
      firstName: '',
      idUser: '',
      fatherName: '',
      lastName: '',
      login: '',
      types: [],
    };
  }

  loginUser = (pass, log) => {
    // this.setState({ loading: true });
    ApiDiContainer.ProxyApiAuth.getAuth(pass, log)
      .then((res) => {
        console.log(`data`, res);
        localStorage.setItem('authenticatedToken', res.data.accessToken);
        this.setState({
          logged: true,
          idUser: '0',
          login: res.data.login,
          status: res.status,
          errorString: 'res.errorString',
        });
      })
      .catch((er) => {
        // console.log("CURRENT ERR",er,er.response.data)
        // this.setState({
        //   logged: true,
        // });
        // if (er.response.status !== 200) {
        //   this.setState({ status: er.response.status });
        // } else {
        //   this.setState({ status: 200, loading: false });
        // }
        // if (er.response.data.errorString) {
        //   this.setState({ errorString: er.response.data.errorString });
        // }
      });
  };

  registerUser = (email, login, pass) => {
    this.setState({ loading: true });

    ApiDiContainer.ProxyApiAuth.getReg(email, login, pass)
      .then((res) => {
        console.log(`data`, res);
        // await localStorage.setItem('authenticatedToken', res.data.token);
        this.setState({
          // logged: true,
          status: res.status,
          errorString: res.errorString,
        });
      })
      .catch((er) => {
        // console.log("CURRENT ERR",er,er.response.data)
        if (er.response.status !== 200) {
          this.setState({ status: er.response.status });
        } else {
          this.setState({ status: 200, loading: false });
        }
        if (er.response.data.errorString) {
          this.setState({ errorString: er.response.data.errorString });
        }
      });
  };
  exitUser = () => {
    this.setState({
      logged: false,
    });
    localStorage.removeItem('authenticatedToken');
  };

  render() {
    // return <CRMmain />;

    const items = [
      {
        key: '1',
        label: `Войти`,
        children: (
          <Auth
            loginUser={this.loginUser}
            // status={this.state.status}
          />
        ),
      },
      {
        key: '2',
        label: `Регистрация`,
        children: (
          <Registration registerUser={this.registerUser} status={this.state.status} />
          // getListOfTypes={this.getListOfTypes}
        ),
      },
    ];
    return (
      <>
        {/* {!this.state.logged && false ? ( */}
        {!this.state.logged ? (
          <div
            style={{
              backgroundColor: '#f0f0f0',
              width: '100vw',
              height: '100vh',
              display: 'flex',
            }}>
            <Card style={{ margin: 'auto', width: '350px', height: 'auto' }}>
              <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={() => this.setState({ status: 0 })}
              />
            </Card>
          </div>
        ) : (
          // <EPDMain idUser={this.state.idUser} login={this.state.login} exitUser={this.exitUser} />
          <CRMmain />
        )}
      </>
    );
  }
}

export default App;
