import React from "react";
import { Container, Row, Col } from 'reactstrap';
import vis from "vis-network";

import SocialGraph from "./SocialGraph";
import InfoBox from "./InfoBox";
import People from "./People";

import graph_data from './data.json';
import Messages from "./Messages";

class SocialApp extends React.Component {
  constructor(props){
    super(props);

    let title = "Isambard's Social Network";
    let image = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Robert_Howlett_-_Isambard_Kingdom_Brunel_and_the_launching_chains_of_the_Great_Eastern_-_Google_Art_Project.jpg/256px-Robert_Howlett_-_Isambard_Kingdom_Brunel_and_the_launching_chains_of_the_Great_Eastern_-_Google_Art_Project.jpg";
    let text = "This is an interactive viewer of Isambard Kingdom Brunel's social network. Please click on the nodes and have fun!";

    var nodes = new vis.DataSet({});
    nodes.add(graph_data.nodes);

    var edges = new vis.DataSet({});
    edges.add(graph_data.edges);

    let graph = {"nodes": nodes, "edges": edges};

    let people = new People(graph_data.nodes);
    let messages = new Messages(graph_data.edges, people);

    this.state = {
      default_data: {"title": title, "image": image, "text": text},
      infobox_data: {"title": title, "image": image, "text": text},
      graph: graph,
      people: people,
      messages: messages,
    };
  }

  setInfoBoxData(data){
    let newdata = {...this.state.default_data};

    if (data.text)
    {
      newdata.text = data.text;
    }

    if (data.image)
    {
      newdata.image = data.image;
    }

    if (data.title)
    {
      newdata.title = data.title;
    }

    this.setState({infobox_data:newdata});
  }

  render(){
    let data = this.state.infobox_data;

    return (
      <div>
        <Container>
          <Row>
            <Col>
              <SocialGraph graph={this.state.graph}
                           getClickedData={(data)=>this.setInfoBoxData(data)} />
            </Col>
            <Col xs="4">
              <InfoBox title={data.title}
                       image={data.image}
                       text={data.text} />
            </Col>
          </Row>
          <Row>
            <Col>
              <p align="center">
                See the source <a href="https://github.com/chryswoods/brunel">on GitHub</a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default SocialApp;