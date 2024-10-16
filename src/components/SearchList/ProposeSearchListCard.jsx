import React from 'react'
import SearchListCard from './SearchListCard'
import { Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import RoutePath from '../../routes/RoutePath';

function ProposeSearchListCard() {
    // Dữ liệu ví dụ cho các thẻ (giả định rằng bạn có sẵn một array dữ liệu)
    const currentItems = [
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
        // Add more data here...
    ];

    const currentItemsTraveller = [
        {
            id: 3,
            title: "Card Title traveller",
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
    ];

    const location = useLocation();
    let itemsToDisplay = currentItems;
    if (location.pathname === RoutePath.SEARCHLISTTRAVELLER) {
        itemsToDisplay = currentItemsTraveller;
    }

    return (
        <div className='d-flex flex-column'>
            <Row className='m-0 p-0'>
                {itemsToDisplay.map((item) => (
                    <SearchListCard
                    key={item.id}
                        title={item.title}
                        connections={item.connections}
                        description={item.description}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </Row>
        </div>
    )
}

export default ProposeSearchListCard