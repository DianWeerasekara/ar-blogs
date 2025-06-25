import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './blogpost.css'
import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const blogData = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post #${i + 1}`,
  text: `This is content for blog post #${i + 1}`,
}));

function BlogPosts() {

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage; 
    const currentItems = blogData.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        }
    };

    return(
        <div>
            <div className="bpost-container">
                {currentItems.map((blog) => (
                <Card key={blog.id} style={{ width: '18rem' }}>
                    <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/286x180.png?text=Image+Cap"
                    />
                    <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.text}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item>Sample item 1</ListGroup.Item>
                    <ListGroup.Item>Sample item 2</ListGroup.Item>
                    <ListGroup.Item>Sample item 3</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                    <Card.Link href="#">Read More</Card.Link>
                    </Card.Body>
                </Card>
                ))}
            </div>
            <br />
            <div className="pagination-container">
                <Pagination>
                <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />
                {[...Array(totalPages)].map((_, idx) => (
                    <Pagination.Item
                    key={idx + 1}
                    active={currentPage === idx + 1}
                    onClick={() => handlePageChange(idx + 1)}
                    >
                    {idx + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />
                </Pagination>
            </div>
        </div>
    )
}

export default BlogPosts;