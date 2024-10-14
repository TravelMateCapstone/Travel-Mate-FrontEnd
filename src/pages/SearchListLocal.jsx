import React, { useState } from 'react';
import SearchListCard from '../components/SearchList/SearchListCard';
import { Col, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import '../assets/css/SearchList/SearchListLocal.css';
import '../assets/css/Shared/Pagination.css';

// Dữ liệu ví dụ cho các thẻ (giả định rằng bạn có sẵn một array dữ liệu)
const cardData = [
    {
        id: 1,
        title: "Card Title 1",
        connections: 35,
        description: "Went from a computer science intern to the head of a $2 billion company.",
        imageUrl: "https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: 2,
        title: "Card Title 2",
        connections: 40,
        description: "Has worked in the tech industry for over a decade.",
        imageUrl: "https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 3,
      title: "Card Title 1",
      connections: 35,
      description: "Went from a computer science intern to the head of a $2 billion company.",
      imageUrl: "https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj"
  },
  {
      id: 4,
      title: "Card Title 2",
      connections: 40,
      description: "Has worked in the tech industry for over a decade.",
      imageUrl: "https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 5,
    title: "Card Title 1",
    connections: 35,
    description: "Went from a computer science intern to the head of a $2 billion company.",
    imageUrl: "https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj"
},
{
    id: 6,
    title: "Card Title 2",
    connections: 40,
    description: "Has worked in the tech industry for over a decade.",
    imageUrl: "https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj"
},
{
  id: 7,
  title: "Card Title 1",
  connections: 35,
  description: "Went from a computer science intern to the head of a $2 billion company.",
  imageUrl: "https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj"
},
{
  id: 8,
  title: "Card Title 2",
  connections: 40,
  description: "Has worked in the tech industry for over a decade.",
  imageUrl: "https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj"
},
    // Add more data here...
];

const itemsPerPage = 6; // Số thẻ hiển thị trên mỗi trang

function SearchListLocal() {
    const [currentPage, setCurrentPage] = useState(0);

    // Tính toán dữ liệu sẽ hiển thị dựa trên trang hiện tại
    const offset = currentPage * itemsPerPage;
    const currentItems = cardData.slice(offset, offset + itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className='search-list-local-container'>
            <Row className='m-0 p-0'>
                {currentItems.map((item) => (
                    <Col lg={4} key={item.id}>
                        <SearchListCard 
                            title={item.title}
                            connections={item.connections}
                            description={item.description}
                            imageUrl={item.imageUrl}
                        />
                    </Col>
                ))}
            </Row>

            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(cardData.length / itemsPerPage)} // Tổng số trang
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active-pagination'}
                previousClassName={'previous'}
                nextClassName={'next'}
            />
        </div>
    );
}

export default SearchListLocal;
