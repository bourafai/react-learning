import React from 'react';
import {Container, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <Container>
            <Jumbotron className="jumbotron text-center text-monospace m-5">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions ">
                    <Link to="/" className="btn btn-primary btn-lg m-2"><span
                        className="glyphicon glyphicon-home"></span>
                        Take Me Home </Link>
                    <Link to="/contact" className="btn btn-secondary btn-lg m-2"><span
                        className="glyphicon glyphicon-envelope"></span> Contact Support </Link>
                </div>
            </Jumbotron>
        </Container>
    );
};

export default PageNotFound;