import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SearchListCard({ title, connections, description, imageUrl }) {
    return (
        <Card style={{ width: '300px', height: '385px', borderRadius: '20px', padding: '22px', marginBottom: '30px' }}>
            <Card.Img variant="top" src={imageUrl} style={{
                borderRadius: '10px',
                marginBottom: '20px',
                width: '100%',
                height: '208px',
                objectFit: 'cover'
            }} />
            <Card.Body className='p-0'>
                <Card.Title style={{
                    fontSize: '16px',
                    marginBottom: '5px'
                }}>{title}</Card.Title>
                
                <Card.Text className='d-flex align-items-center gap-1' style={{
                    fontSize: '12px',
                    marginBottom: '5px'
                 }}>
                 <ion-icon name="people-outline"></ion-icon> 
                 <span className='p-0 m-0'>{connections} kết nối</span>
                </Card.Text>
                
                <Card.Text style={{
                    fontSize: '16px',
                    lineHeight: '1.5',
                    maxHeight: '4.5em',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SearchListCard;
