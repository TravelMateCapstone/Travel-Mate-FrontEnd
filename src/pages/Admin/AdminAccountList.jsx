import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Table, InputGroup, FormControl, Button } from 'react-bootstrap';
import '../../assets/css/Admin/AdminAccountList/AdminAccountList.css'
const accountsData = [
  // Your account data, same as before
  {
    id: 1,
    name: 'Tesco Market',
    address: 'Võ Nguyên Giáp, Phước Mỹ, Sơn Trà, Đà Nẵng 550000',
    phone: '0123456789',
    email: 'nhonvn2509@gmail.com',
    avatar: 'https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 2,
    name: 'Tesco Market',
    address: 'Võ Nguyên Giáp, Phước Mỹ, Sơn Trà, Đà Nẵng 550000',
    phone: '0123456789',
    email: 'nhonvn2509@gmail.com',
    avatar: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/449745842_1897469880717181_9200307908320214870_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEaUDrrgrhYIaAHAwrfa5X5T6gmyhL90Z5PqCbKEv3Rnio8q_4Hg4Dxcm96T30mEuFqZ3LiD29zYuLjcLNIEP26&_nc_ohc=qwS7cjYFvV0Q7kNvgFLPcGf&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AJNGT5ycWPVOnQTpNsv-UHO&oh=00_AYCd5sgh21H9KRJ8RQiOcTrjVe4CdoamXcnb05bB2638Jw&oe=6711B8D0',
  },
  {
    id: 3,
    name: 'Tesco Market',
    address: 'Võ Nguyên Giáp, Phước Mỹ, Sơn Trà, Đà Nẵng 550000',
    phone: '0123456789',
    email: 'nhonvn2509@gmail.com',
    avatar: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/422724159_3711517109169888_5660314751144490822_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF2CPhBHysBPK6uHGM7JGho75lt6mZr6GjvmW3qZmvoaORlk9rCLtxxZX4oG-eaMRiFUnlt_Z6gwSIQ8QvxIEWJ&_nc_ohc=vq2oaGEAfgYQ7kNvgG2HW8O&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&_nc_gid=A8oOqlxRwtY9TnufqIhWnNl&oh=00_AYBufY2xVoQzf2iNa45CvBrsvxdThlCHQ_ONUoMzZkDPQA&oe=6711B6AC',
  },
  {
    id: 4,
    name: 'Tesco Market',
    address: 'Võ Nguyên Giáp, Phước Mỹ, Sơn Trà, Đà Nẵng 550000',
    phone: '0123456789',
    email: 'nhonvn2509@gmail.com',
    avatar: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/450130714_2492572681133064_8520867086168985175_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=669761&_nc_eui2=AeEWqDUKdNi--RFucrIjh0hyMGrdPQh4fp8wat09CHh-nye23c59AsdI3MvZwId8BstxInOxMVLJ_M41EBwzUr_i&_nc_ohc=qNlYnfJoP-QQ7kNvgHd6aqm&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AmxnToCD4otAR62GBbDxG5N&oh=00_AYBRXC6uhyDccfVmFjyQA_7uG-C_v3ru3TI8J8EafnPNSw&oe=6711A63D',
  },
  {
    id: 5,
    name: 'Tesco Market',
    address: 'Võ Nguyên Giáp, Phước Mỹ, Sơn Trà, Đà Nẵng 550000',
    phone: '0123456789',
    email: 'nhonvn2509@gmail.com',
    avatar: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/453485791_1503043053904971_7050613698555539407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeH9dNwahuSWWMlIFaNwLtwfgpvy7Gq0Ot2Cm_LsarQ63YXL6fkNG_lyFOSLZqPVMpckM5fbx56S1CrHgNZV1_Gv&_nc_ohc=RVkYqn_4IhsQ7kNvgEDcoRw&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AuuVqlHnEOSP2nQ--h9yWVL&oh=00_AYCY4VDWbJAH5CsEu8_L84V6b87qvA6d7tgz4q7SUrQhOQ&oe=6711C84B',
  },
  {
    id: 6,
    name: 'Tesco Market',
    address: 'Võ Nguyên Giáp, Phước Mỹ, Sơn Trà, Đà Nẵng 550000',
    phone: '0123456789',
    email: 'nhonvn2509@gmail.com',
    avatar: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/296955082_1066759630866651_4964627007836899845_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE5YAMF9tySbi6-qJKc2p8bwLxjYMX1T1jAvGNgxfVPWL1IibuGuiSfH7hIpWp3-5GkFi7002Wqqz5VcW5wDNWn&_nc_ohc=rflalJVgUGoQ7kNvgFSFUwH&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=Agg5lI4tSagQzzwYqa5lgDD&oh=00_AYBGbmRKajR5Ik8wmJ6LhQ4P_H6aLOfHXZu8KooZKrceUA&oe=6711C89E',
  },
  {
    id: 7,
    name: 'Tesco Market',
    address: 'Võ Nguyên Giáp, Phước Mỹ, Sơn Trà, Đà Nẵng 550000',
    phone: '0123456789',
    email: 'nhonvn2509@gmail.com',
    avatar: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/329970312_896924391503385_2352475357586137104_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeExHK4KaM1vs-5Ki-Tyobxt00ON0BlGZTvTQ43QGUZlO-6k9NZJfEsWdo_075K3g2yh-X3zfbzgxmP3HZE-zqON&_nc_ohc=PYoQQKLYTrQQ7kNvgEtScZi&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AsNcNhL6BiTwXEdrao3ysQs&oh=00_AYA6vFmjIwYTUqlXODl92ckeZRqy8IvVOPotKrbQQVJjiA&oe=6711AA63',
  },
  // Add more accounts as needed
];

function AdminAccountList() {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const accountsPerPage = 6; // Number of accounts per page

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtered accounts based on the search term
  const filteredAccounts = accountsData.filter((account) =>
    account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    account.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    account.phone.includes(searchTerm) ||
    account.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the current displayed accounts based on the current page
  const indexOfLastAccount = (currentPage + 1) * accountsPerPage;
  const indexOfFirstAccount = indexOfLastAccount - accountsPerPage;
  const currentAccounts = filteredAccounts.slice(indexOfFirstAccount, indexOfLastAccount);

  // Handle page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="account-list-container mb-5">
      <h2 className='text-uppercase fw-bold' style={{
        
      }}>quản lí tài khoản</h2>

      <div className='table-search' style={{
        
      }}>
        <InputGroup style={{
          marginTop: '43px',
          marginBottom: '23px'
        }}>
          <input
            placeholder="Tìm kiếm"
            className='my-input-search'
            style={{
              height: '40px',
              borderRadius: '60px',
              border: '1px solid #d9d9d9',
              padding: '8px 16px',
              width: '500px'
            }}
          />
          <Button variant="" id="button-addon2">
            <ion-icon name="filter-outline" style={{
              fontSize: '30px',
            }}></ion-icon>
          </Button>
        </InputGroup>

        {/* Table */}
        <div className="table-container border-0">
          <Table borderless hover responsive>
            <thead>
              <tr >
                <th className='headingtable-user'>NGƯỜI DÙNG</th>
                <th className='headingtable'>ĐỊA CHỈ</th>
                <th className='headingtable'>SĐT</th>
                <th className='headingtable'>EMAIL</th>
                <th className='headingtable'>HÀNH ĐỘNG</th>
              </tr>
            </thead>
            <tbody>
              {currentAccounts.length > 0 ? (
                currentAccounts.map((account) => (
                  <tr key={account.id} className='account-row'>
                    <td className="traveller">
                      <img src={account.avatar} alt="avatar" className="avatar object-fit-cover" />
                      <span>{account.name}</span>
                    </td>
                    <td >{account.address}</td>
                    <td>{account.phone}</td>
                    <td >{account.email}</td>
                    <td className="actions">
                      <Button variant="" className="action-btn block-btn">
                        <ion-icon name="ban-outline"></ion-icon>
                      </Button>
                      <Button variant="" className="action-btn delete-btn text-danger">
                        <ion-icon name="trash-outline"></ion-icon>
                      </Button>
                      <Button variant="" className="action-btn info-btn text-success">
                        <ion-icon name="settings-outline"></ion-icon>
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    Không tìm thấy kết quả nào
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

          {/* React Paginate Component */}
          {filteredAccounts.length > accountsPerPage && (
            <div className="d-flex justify-content-center">
              <ReactPaginate
                previousLabel={'‹'}
                nextLabel={'›'}
                breakLabel={'...'}
                pageCount={Math.ceil(filteredAccounts.length / accountsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
              />
            </div>
          )}
        </div>
      </div>


    </div>
  );
}

export default AdminAccountList;
