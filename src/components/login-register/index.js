import React from 'react'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import config from '../../config/config';
import restClient from '../../services/restClient';

class FormLoginRegister extends React.Component {

    state = {
        username: '',
        password: ''
    };

    handleLogin = async (e) => {
        e.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
        const data = {
            code: this.state.username,
            password: this.state.password
        }
        await restClient.asyncPost(`/user/authenticate`, data, null)
            .then(res => {
                localStorage.setItem('access_token', res.data.token);
                localStorage.setItem('privilege', res.data.idPrivilege);
                localStorage.setItem('type', res.data.type);
                console.log(res.data);
            })
    }

    handleOnChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;

        this.setState({
            [key]: value
        })
    }

    responseGoogle = async (response) => {
        const token = response.tokenId;
        const data = {
            token: token
        }

        await restClient.asyncPost(`/user/auth/google`, data, null)
            .then(res => {
                localStorage.setItem('access_token', res.data.token);
                localStorage.setItem('privilege', res.data.idPrivilege);
                localStorage.setItem('type', res.data.type);

            })
    }

    responseFacebook = async (response) => {
        const token = response.accessToken;
        const data = {
            token: token
        }

        await restClient.asyncPost(`/user/auth/facebook`, data, null)
            .then(res => {
                localStorage.setItem('access_token', res.data.token);
                localStorage.setItem('privilege', res.data.idPrivilege);
                localStorage.setItem('type', res.data.type);
            })
    }

    handleEvent = e => {
        var container = document.querySelector('.container');
        container.classList.toggle('active')
    }
    render() {

        return <section>
            <div className="container">
                <div className="user signinBx">
                    <div className="imgBx" style={{ width: 400, height: 500, background: '#ff4000' }}></div>
                    <div className="formBx">
                        <form>
                            <h2>Sign In</h2>
                            <input type="text" name="username" onChange={this.handleOnChange} placeholder="Enter your code" />
                            <input type="password" name="password" onChange={this.handleOnChange} placeholder="Enter your password" />
                            <div>
                                <button onClick={this.handleLogin}>Login</button>
                            </div>
                            <p className="signup">Don't have an account ? <a style={{ cursor: 'pointer' }} onClick={e => this.handleEvent(e)}>Sign Up</a></p>
                        </form>
                        <div>
                            <GoogleLogin
                                clientId={config.GOOGLE_CLIENT_ID}
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={{ marginRight: '25px' }} >Login with Google</button>

                                )}
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                            <FacebookLogin
                                appId={config.FACEBOOK_CLIENT_ID}
                                callback={this.responseFacebook}
                                render={renderProps => (
                                    <button onClick={renderProps.onClick}> Login with Facebook</button>
                                )}
                            />
                        </div>
                    </div>
                </div>

                <div className="user signupBx">
                    <div className="formBx">
                        <form>
                            <h2>Create an account</h2>
                            <input type="text" name="" placeholder="Enter your code" />
                            <input type="email" name="" placeholder="Enter your email" />
                            <input type="text" name="" placeholder="Enter your first name" />
                            <input type="text" name="" placeholder="Enter your surname" />
                            <input type="password" name="" placeholder="Enter your password" />
                            <div>
                                <button>Sign up</button>
                            </div>
                            <p className="signup">Already have an account ? <a style={{ cursor: 'pointer' }} onClick={e => this.handleEvent(e)}>Sign In</a></p>

                        </form>
                    </div>
                    <div className="imgBx" style={{ width: 400, height: 500, background: '#cacaca' }}></div>

                </div>
            </div>
        </section>
    }
}

export default FormLoginRegister