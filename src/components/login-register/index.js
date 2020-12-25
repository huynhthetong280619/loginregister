import React from 'react'

class FormLoginRegister extends React.Component {

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
                        <div style={{
                            display: 'block',
                            marginTop: '0em'
                        }}>
                            <h2>Sign In</h2>
                            <input type="text" name="" placeholder="Enter your code" />
                            <input type="password" name="" placeholder="Enter your password" />
                            <div>
                                <button>Login</button>
                            </div>
                            <p className="signup">Don't have an account ? <a style={{ cursor: 'pointer' }} onClick={e => this.handleEvent(e)}>Sign Up</a></p>

                            <div>
                                <button style={{ marginRight: '25px' }}>Login with Facebook</button>
                                <button>Login with Google</button>
                            </div>                        </div>

                    </div>
                </div>

                <div className="user signupBx">
                    <div className="formBx">
                    <div style={{
                            display: 'block',
                            marginTop: '0em'
                        }}>
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

                        </div>
                    </div>
                    <div className="imgBx" style={{ width: 400, height: 500, background: '#cacaca' }}></div>
                </div>
            </div>
        </section>
    }
}

export default FormLoginRegister