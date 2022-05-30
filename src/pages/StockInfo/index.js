import {Col, Container, Row, Spinner} from "react-bootstrap";
// import Jumbotron from "react-bootstrap/Jumbotron";
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import axios from "axios";
import {useParams} from "react-router-dom";
import {fetchStocks} from "../../redux/actions";

export const StockInfo = () => {
  const {page, data} = useSelector((state) => state);
  const dispatch = useDispatch();
  const {stockId} = useParams();
  const [symbolState, setSymbolState] = useState({});

  const loaderStyles = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  useEffect(() => {
    let mounted = true;

    if (Object.keys(data.stockInfo.response).length === 0) {
      dispatch(fetchStocks(mounted, stockId));
    }

    return function cleanup() {
      mounted = false;
    };
  }, [data.stockInfo.response, dispatch, stockId]);

  if (page.status.loading) {
    return (
      <div style={loaderStyles}>
        <Container>
          <Row style={{textAlign: "center"}}>
            <Col>
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div className="StockInfo">
      <Container className="container">
        <Row>
          <Col>
            <h1>{stockId}</h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};
