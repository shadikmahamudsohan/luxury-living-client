import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CustomSpinner from "../../components/CustomSpinner";
import OverlayBg from "../../components/OverlayBg/OverlayBg";
import useOneHouseData from "../../hooks/useOneHouseData";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();
  const [validated, setValidated] = useState(false);
  const [house, loading] = useOneHouseData(id);
  if (loading) {
    return <CustomSpinner />;
  }

  const handelSubmit = (event) => {
    event.preventDefault();
    // -----------validation---------
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(false);
    } else {
      // finding input data
      const name = event.target.Name.value;
      const members = event.target.Members.value;
      const Email = event.target.Email.value;
      const Location = event.target.Location.value;
    }
    setValidated(true);
    // ---------validation end---------
  };
  return (
    <>
      <OverlayBg id={id} house={house} loading={loading}>
        <Form
          onSubmit={handelSubmit}
          noValidate
          validated={validated}
          className="m-5"
        >
          <h3 className="text-main-primary text-center fw-bold mb-4">
            Please Fill The Forms
          </h3>
          <div className="row mb-4">
            <div className="col-12 col-md-6">
              <Form.Group>
                <FloatingLabel controlId="name" label="Name">
                  <Form.Control
                    type="text"
                    required
                    placeholder="Name"
                    name="Name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </div>
            <div className="col-12 col-md-6">
              <FloatingLabel controlId="members" label="Members">
                <Form.Control
                  type="number"
                  required
                  placeholder="Members"
                  name="Members"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </FloatingLabel>
            </div>
          </div>

          <FloatingLabel controlId="Email" className="mb-4" label="Your Email">
            <Form.Control
              type="email"
              required
              placeholder="Email"
              name="Email"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            controlId="Location"
            className="mb-4"
            label="Your Location"
          >
            <Form.Control
              type="text"
              required
              placeholder="Location"
              name="Location"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </FloatingLabel>
          <button
            className="btn btn-main-primary my-4 py-3"
            type="submit"
            style={{ width: "100%" }}
          >
            Book Now
          </button>
        </Form>
      </OverlayBg>
    </>
  );
};

export default Booking;
