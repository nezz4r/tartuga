import React from "react";

//Bootstrap
import { Container, Col, Row, Table } from "react-bootstrap";

import {
  Wrapper,
  Header,
  HeaderContent,
  Logo,
  Nav,
  Content,
  File,
  ListItem,
} from "./styles";

import CSVReader from "react-csv-reader";
import { Chart } from "react-charts";

import GoogleMapReact from "google-map-react";

function Form() {
  const [data, setData] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState({});

  const [mapInfo] = React.useState({
    center: {
      lat: -23.43,
      lng: -46.73,
    },
  });

  const [chart, setChart] = React.useState([
    {
      label: "Series 1",
      data: [
        [0, 1],
        [1, 2],
        [2, 4],
        [3, 2],
        [4, 7],
        [5, 1],
        [6, 1],
        [7, 1],
        [8, 1],
        [9, 1],
        [10, 1],
        [11, 1],
        [12, 1],
        [13, 1],
        [14, 1],
        [15, 1],
      ],
    },
  ]);

  React.useEffect(() => {
    console.log(selectedItem);

    let arr = [];

    data.map((item) => {
      arr.push([item[4], item[8]]);
    });

    setChart({});

    console.log(arr);

    // var lat = selectedItem[0];
    // var lng = selectedItem[1];
    // setMapInfo({
    //     center: {
    //         lat,
    //         lng
    //     }
    // });
  }, [data, selectedItem]);

  const dados = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
          [5, 1],
          [6, 1],
          [7, 1],
          [8, 1],
          [9, 1],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  // const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const info = () => {
    if (data) {
      return (
        <Col xs={12} md={4}>
          <div
            style={{
              height: "300px",
              margin: "0 0 30px 0",
            }}
          >
            <Chart data={chart} axes={axes} />
          </div>
          <div
            style={{
              height: "300px",
            }}
          >
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyCyupVMzswub4m5NO4EZ6erhyHzYRrM0Ao",
              }}
              defaultCenter={mapInfo.center}
              defaultZoom={17}
            ></GoogleMapReact>
          </div>
        </Col>
      );
    } else {
      return <span>Nada</span>;
    }
  };

  return (
    <Wrapper>
      <Header>
        <Container>
          <HeaderContent>
            <Logo src="/assets/images/logo.png" />
            <Nav>
              <a href="/">Início</a>
              <a href="/">Dados</a>
              <a href="/">Sobre</a>
              <a href="/">Contato</a>
            </Nav>
          </HeaderContent>
        </Container>
      </Header>
      <Content>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <File>
                <h4>Escolha um arquivo:</h4>
                <CSVReader onFileLoaded={(data, fileInfo) => setData(data)} />
              </File>
            </Col>
            <Col xs={12} md={8}>
              <div
                style={{ overflowX: "auto", maxHeight: "calc(100vh - 250px)" }}
              >
                <Table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Lat. / Long.</th>
                      <th>Data</th>
                      <th>Hora</th>
                      <th>Temp.</th>
                      <th>Umidade</th>
                      <th>Contador</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((row, index) => (
                        <ListItem
                          onClick={() => setSelectedItem(row)}
                          key={index}
                        >
                          <td>{index}</td>
                          <td>{row[0] + " / " + row[1]}</td>
                          <td>{row[4] + "/" + row[3] + "/" + row[2]}</td>
                          <td>{row[5] + ":" + row[6] + "." + row[7]}</td>
                          <td>{row[8] + "ºC"}</td>
                          <td>{row[9]}</td>
                          <td>{row[10]}</td>
                        </ListItem>
                      ))}
                  </tbody>
                </Table>
              </div>
            </Col>
            {info}
          </Row>
        </Container>
      </Content>
    </Wrapper>
  );
}

export default Form;
