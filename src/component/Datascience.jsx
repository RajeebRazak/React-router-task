import React from "react";
import { Card, Button } from "react-bootstrap";
import { CourseData, Product } from "./Product";

function Datascience() {
  const DatascienceCourses = CourseData.filter(
    (course) => course.category === "Data Science"
  );

  return (
    <section className="py-1 bg-white">
      <div className="container-fluid">
        <h2>DATA SCIENCE COURSES</h2>
        <div className="row mx-0 justify-content-center">
          {DatascienceCourses.map((course) => (
            <div key={course.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Card>
                <div style={{ overflow: "hidden", height: "150px" }}>
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
                  <Card.Text>{course.content}</Card.Text>
                  <Button variant="primary">Join Now</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Datascience;
