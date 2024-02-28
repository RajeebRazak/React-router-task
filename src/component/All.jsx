import React from 'react';
import { CourseData } from './Product';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function All() {
  return (
    <section className="py-1 ">
      <div className="container-fluid px-0">
        <div className="row mx-0 justify-content-center">
          {CourseData.map((course) => (
            <div key={course.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Card>
              <div style={{ overflow: "hidden", height: "200px" }}>
                  {" "}
                  {/* Adjust the height as needed */}
                  <Card.Img
                    variant="top"
                    src={course.img}
                    alt={course.title}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>
                    {course.content}
                  </Card.Text>
                  <Button variant="primary" >Join Now</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default All;
