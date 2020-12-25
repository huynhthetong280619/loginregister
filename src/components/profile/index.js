import React from 'react'
import { Table } from 'reactstrap';

class Profile extends React.Component {

    state = {
        disabled: true,
        isInsert: false
    }


    deleteStudent = () => {

    }

    updateInfo = () => {


    }

    handleClose = () => this.setState({ isInsert: false });
    handleOnInsert = () => this.setState({ isInsert: true });
    saveStudent = () => {
        this.setState({
            isInsert: false
        })
    }
    render() {


        return (<>

            <div className="profile">

                <div style={{ textAlign: 'center' }}>
                    <h2>Thông tin chi tiết tài khoản</h2>
                    <div style={{
                        textAlign: 'left', width: '350px',
                        margin: '0 auto'
                    }}>
                        <div className="borderInfo">
                            <label style={{ fontSize: 16, fontWeight: 600 }}>Mã số sinh viên </label>
                            {this.state.isInsert ? <input type="text" value="Nhâp mã số sinh viên..." /> : <span>17110384</span>}
                        </div>
                        <div className="borderInfo">
                            <label style={{ fontSize: 16, fontWeight: 600 }}>Chức vụ </label>
                            {this.state.isInsert ? <input type="text" value="Nhâp chức vụ..." /> : <span>Student</span>}


                        </div>
                        <div className="borderInfo">
                            <label style={{ fontSize: 16, fontWeight: 600 }}>Email </label>
                            {this.state.isInsert ? <input type="email" value="huynhthetong1999999@gmail.com" /> : <input type="email" value="huynhthetong1999999@gmail.com" disabled={this.state.disabled} />}
                        </div>
                        <div className="borderInfo">
                            <label style={{ fontSize: 16, fontWeight: 600 }}>Họ  </label>

                            {this.state.isInsert ? <input type="text" value="Nhập họ..." /> : <input type="text" value="Huỳnh" disabled={this.state.disabled} />}

                        </div>
                        <div className="borderInfo">
                            <label style={{ fontSize: 16, fontWeight: 600 }}>Tên  </label>
                            {this.state.isInsert ? <input type="text" value="Nhập tên..." /> : <input type="text" value="Thế Tông" disabled={this.state.disabled} />}


                        </div>
                    </div>
                    <div>
                        {
                            this.state.isInsert ? <button className="action" onClick={() => this.saveStudent()}>Lưu lại</button> : <button className="action" onClick={() => this.handleOnInsert()} disabled={!this.state.disabled}>Thêm</button>
                        }
                        
                        {
                            this.state.disabled ? <button className="action" onClick={() => this.setState({ disabled: false })}>Sửa</button>
                                :
                                <button className="action" onClick={() => { this.updateInfo(); this.setState({ disabled: true }) }}>Cập nhật</button>
                        }

                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h2>Bảng thông tin</h2>
                    <Table bordered style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'left' }}>Code</th>
                                <th style={{ textAlign: 'left' }}>ID-Priviledge</th>
                                <th style={{ textAlign: 'left' }}>Email</th>
                                <th style={{ textAlign: 'left' }}>Fist Name</th>
                                <th style={{ textAlign: 'left' }}>Sure Name</th>
                                <th style={{ textAlign: 'left' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th style={{ textAlign: 'left' }}>17110384</th>
                                <td style={{ textAlign: 'left' }}>Student</td>
                                <td style={{ textAlign: 'left' }}>17110384@student.hcmute.edu.vn</td>
                                <td style={{ textAlign: 'left' }}>Huỳnh</td>
                                <td style={{ textAlign: 'left' }}>Thế Tông</td>
                                <td style={{ textAlign: 'left', color: '#ff4000', cursor: 'pointer' }} onClick={() => this.deleteStudent()}>Delete</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div></>
        )
    }
}

export default Profile