import React, { useState } from 'react';
import '../../assets/css/Local/LocalTripHistory.css';
import { Table, InputGroup, FormControl, Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const tripsdata = [
    {
        id: 1,
        name: 'John Doe',
        location: 'QN-DN',
        date: '24-09-2024 - 24-09-2024 ',
        amount: 150.00,
    },
    {
        id: 2,
        name: 'Jane Smith',
        location: 'Hội An - Đà Nẵng',
        date: '24-09-2024 - 24-09-2024 ',
        amount: 200.50,
    },
    {
        id: 3,
        name: 'Bob Johnson',
        location: 'Đà Lạt',
        date: '24-09-2024 - 24-09-2024 ',
        amount: 300.00,
    },
    {
        id: 4,
        name: 'Alice Williams',
        location: 'Hà Nội',
        date: '24-09-2024 - 24-09-2024 ',
        amount: 120.75,
    },
    {
        id: 5,
        name: 'Charlie Brown',
        location: 'Bình Định',
        date: '24-09-2024 - 24-09-2024 ',
        amount: 500.00,
    },
    {
        id: 6,
        name: 'Diana Prince',
        location: 'Hà Nội',
        date: '24-09-2024 - 24-09-2024 ',
        amount: 250.00,
    },
    {
        id: 7,
        name: 'Bruce Wayne',
        location: 'Hà Nội',
        date: '18-09-2024',
        amount: 1000.00,
    },
    {
        id: 8,
        name: 'Clark Kent',
        location: 'Hà Nội',
        date: '17-09-2024',
        amount: 75.00,
    },
    {
        id: 9,
        name: 'Tony Stark',
        location: 'Hà Nội',
        date: '16-09-2024',
        amount: 1500.00,
    },
];

function LocalTripHistory() {
    const [currentPage, setCurrentPage] = useState(0);
    const transactionsPerPage = 6;

    // Filtered transactions based on pagination
    const indexOfLastTransaction = (currentPage + 1) * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = tripsdata.slice(indexOfFirstTransaction, indexOfLastTransaction);

    // Handle page change
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    return (
        <div className="local-wallet-management">
            <h1 className='mx-4 fw-bold'>Lịch sử các chuyến đi</h1>
            <div className='body-dashboard'>
                {/* Transaction Table */}
                <div className="table-container">
                    <div className='d-flex justify-content-between'>
                        <h1>Danh sách</h1>
                        <div>
                            <InputGroup className="mb-3" style={{ width: '400px' }}>
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
                    </div>

                    <Table borderless hover responsive>
                        <thead>
                            <tr>
                                <th>Traveller</th>
                                <th>Địa điểm</th>
                                <th>Ngày</th>
                                <th>Amount</th>
                                <th>Hành động</th>
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
                                        <td>{transaction.location}</td>
                                        <td>{transaction.date}</td>
                                        <td>${transaction.amount.toFixed(2)}</td>
                                        <td><button className='btn-detail'>Chi tiết</button></td>
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
                        pageCount={Math.ceil(tripsdata.length / transactionsPerPage)}
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

export default LocalTripHistory;
