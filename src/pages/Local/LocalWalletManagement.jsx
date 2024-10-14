import React, { useState } from 'react';
import { Table, InputGroup, FormControl, Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/Local/LocalWallet.css';


const transactionData = [
  {
    id: 1,
    name: 'John Doe',
    status: 'Thành công',
    date: '24-09-2024',
    amount: 150.00,
  },
  {
    id: 2,
    name: 'Jane Smith',
    status: 'Kiểm định',
    date: '23-09-2024',
    amount: 200.50,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    status: 'Thất bại',
    date: '22-09-2024',
    amount: 300.00,
  },
  {
    id: 4,
    name: 'Alice Williams',
    status: 'Thành công',
    date: '21-09-2024',
    amount: 120.75,
  },
  {
    id: 5,
    name: 'Charlie Brown',
    status: 'Thành công',
    date: '20-09-2024',
    amount: 500.00,
  },
  {
    id: 6,
    name: 'Diana Prince',
    status: 'Thành công',
    date: '19-09-2024',
    amount: 250.00,
  },
  {
    id: 7,
    name: 'Bruce Wayne',
    status: 'Thành công',
    date: '18-09-2024',
    amount: 1000.00,
  },
  {
    id: 8,
    name: 'Clark Kent',
    status: 'Thành công',
    date: '17-09-2024',
    amount: 75.00,
  },
  {
    id: 9,
    name: 'Tony Stark',
    status: 'Thành công',
    date: '16-09-2024',
    amount: 1500.00,
  },
];

function LocalWalletManagement() {
  const [currentPage, setCurrentPage] = useState(0);
  const transactionsPerPage = 6;

  // Filtered transactions based on pagination
  const indexOfLastTransaction = (currentPage + 1) * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactionData.slice(indexOfFirstTransaction, indexOfLastTransaction);

  // Handle page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // Function to get status color
  const getStatusClass = (status) => {
    if (status === 'Thành công') return 'text-success'; // Green for success
    if (status === 'Kiểm định') return 'text-warning'; // Yellow for pending
    if (status === 'Thất bại') return 'text-danger'; // Red for failed
    return '';
  };

  return (
    <div className="local-wallet-management">
      <h1 className='mx-3 fw-bold wallet'>Ví tiền</h1>

      <div className='body-dashboard'>
        {/* Overview Cards */}
        <div className="wallet-overview d-flex">
          <div className="overview-card-wallet balance">
            <div className='d-flex justify-content-between align-items-center my-2'>
              <h4>Số dư của bạn</h4>
            </div>
            <p className="value">3.250.000 <span className=''>VND</span></p>
            <div className='d-flex justify-content-between align-items-center'>
              <button className='button-custom mx-3'>Nạp tiền <i class="bi bi-arrow-down-left"></i></button>
              <button className='button-custom mx-3'>Rút tiền <i class="bi bi-arrow-up-right"></i></button>
            </div>
          </div>
          <div className="overview-card-wallet">
            <div className='d-flex justify-content-between align-items-center my-2'>
              <h4>Phương pháp rút tiền</h4>
              <i class="bi bi-plus-circle"></i>
            </div>
            <div className='d-flex bank-number'>
              <i className="bi bi-bank icon-bank"></i>
              <p className="bank mx-2"> 1502********4832</p>
              <div className='mx-3'><i className="bi bi-copy"></i> <i class="bi bi-trash3"></i></div>
            </div>
            <div className='d-flex bank_number'>
              <i className="bi bi-bank icon-bank"></i>
              <p className="bank mx-2"> 1502********4832 </p>
              <div className='mx-3'><i class="bi bi-copy"></i> <i class="bi bi-trash3"></i></div>
            </div>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="table-container my-5">
          {/* <div className='d-flex justify-content-between'> */}
          <h1>Lịch sử giao dịch</h1>
          <div>
            <InputGroup className="mb-3" style={{ width: '50%' }}>
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                id='search-input'
                className='rounded-5'
              />
              <Button variant="" id="button-addon2">
                <i className="bi bi-funnel fs-3"></i> {/* Bootstrap icon for search */}
              </Button>
            </InputGroup>
          </div>
          {/* </div> */}

          <Table borderless hover responsive>
            <thead>
              <tr>
                <th>Khách giao dịch</th>
                <th>Trạng thái</th>
                <th>Thời gian giao dịch</th>
                <th>Số tiền</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.length > 0 ? (
                currentTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="traveller">
                      <img src="https://via.placeholder.com/40" alt="avatar" className="avatar" />
                      <span>{transaction.name}</span>
                    </td>
                    <td className={getStatusClass(transaction.status)}><i class="bi bi-dot"></i>{transaction.status}</td>
                    <td>{transaction.date}</td>
                    <td>${transaction.amount.toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>

        {/* React Paginate Component */}
        <div className="pagination-container">
          <ReactPaginate
            previousLabel={'‹'}
            nextLabel={'›'}
            breakLabel={'...'}
            pageCount={Math.ceil(transactionData.length / transactionsPerPage)}
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
      </div>
    </div>
  );
}

export default LocalWalletManagement;
