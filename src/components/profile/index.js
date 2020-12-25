import React from 'react'
import { Table } from 'reactstrap';

class Profile extends React.Component {

    render() {

        return (
            <div className="profile">
                <div style={{ textAlign: 'center' }}>
                    <h2>Thông tin chi tiết tài khoản</h2>
                    <div style={{
                        textAlign: 'left', width: '350px',
                        margin: '0 auto'
                    }}>
                        <div className="borderInfo">
                            <label style={{ fontSize: 16, fontWeight: 600 }}>Mã số sinh viên </label>
                            <span>17110384</span>
                        </div>
                        <div className="borderInfo">
                            <label style={{ fontSize: 16, fontWeight: 600 }}>Chức vụ </label>
                            <span>Student</span>
                        </div>
                        <div className="borderInfo">
                            <label style={{ fontSize: 16, fontWeight: 600 }}>Email </label>

                            <span>huynhthetong1999999@gmail.com</span>
                        </div>
                        <div className="borderInfo">
                            <label style={{ fontSize: 16, fontWeight: 600 }}>Họ và tên  </label>

                            <span>Huỳnh Thế Tông</span>
                        </div>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th style={{ textAlign: 'left' }}>17110384</th>
                                <td style={{ textAlign: 'left' }}>Student</td>
                                <td style={{ textAlign: 'left' }}>17110384@student.hcmute.edu.vn</td>
                                <td style={{ textAlign: 'left' }}>Huỳnh</td>
                                <td style={{ textAlign: 'left' }}>Thế Tông</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Profile