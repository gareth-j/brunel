import React from 'react';
import Modal from 'react-modal';
import { Container, Row, Col } from 'reactstrap';
import SlidingPane from 'react-sliding-pane';

import Dry from 'json-dry';
import SocialGraph from "./SocialGraph";
import InfoBox from "./InfoBox";
import TimeLineBox from './TimeLineBox';

import graph_data from './data.json';
import Social from './Social';
import Person from './Person';
import Business from './Business';
import Message from './Message';

function ConnectionList(props){
  const connections = props.connections;
  const title = props.title;
  const emitClicked = props.emitClicked;
  if (!connections || connections.length === 0){
    return null;
  }

  const listitems = connections.map((item) =>{
    let i = item;
    let name = item.getName();

    if (emitClicked){
      return (<li key={name}>
                <button href="#" onClick={()=>{emitClicked(i);}}>
                  {name}</button></li>);
    }
    else{
      return (<li key={name}>{name}</li>);
    }
  });

  return (<div>{title}<br/><ul>{listitems}</ul></div>);
}

function GroupsList(props){
  const groups = props.groups;
  const title = props.title;
  const emitClicked = props.emitClicked;
  if (!groups || groups.length === 0){
    return null;
  }

  const listitems = groups.map((item) => {
    let i = item;
    let name = item;

    if (item.getName){
      name = item.getName();
    }
    else if (item.getID){
      name = item.getID();
    }

    if (emitClicked){
      return (<li key={name}>
                <button href="#" onClick={()=>{emitClicked(i);}}>
                  {name}</button></li>);
    }
    else{
      return (<li key={name}>{name}</li>);
    }
  });

  return (<div>{title}<br/><ul>{listitems}</ul></div>);
}

class SocialApp extends React.Component {
  constructor(props){
    super(props);

    let title = "Isambard's Social Network";
    let image = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Robert_Howlett_-_Isambard_Kingdom_Brunel_and_the_launching_chains_of_the_Great_Eastern_-_Google_Art_Project.jpg/256px-Robert_Howlett_-_Isambard_Kingdom_Brunel_and_the_launching_chains_of_the_Great_Eastern_-_Google_Art_Project.jpg";
    let text = (<div><div>This is an interactive viewer of Isambard Kingdom Brunel's
                     social network. Please click in the nodes and have fun!</div>
                     <button href="#" onClick={()=>{this.resetFilters()}}>Reset Filters</button>
                </div>);

    let social = Dry.parse(graph_data);
    console.log(social);

    if (!(social instanceof Social )){
      console.log("Could not parse!");
      social = new Social();
    }

    let group_filter = null;
    let person_filter = null;
    let anchor = "Brunel";

    this.state = {
      default_data: {"title": title, "image": image, "text": text},
      infobox_data: {"title": title, "image": image, "text": text},
      social: social,
      graph: social.getGraph({anchor:anchor, group_filter:group_filter,
                              person_filter: person_filter}),
      group_filter: group_filter,
      person_filter: person_filter,
      anchor: anchor,
      isInfoPaneOpen: false,
      isTimeLinePaneOpen: false,
      timeline: new TimeLineBox(),
    };
  }

  componentDidMount(){
    Modal.setAppElement(this.el);
  }

  resetFilters(node){
    let node_filter = null;
    let group_filter = null;
    let anchor = this.state.anchor;
    let social = this.state.social;

    let graph = social.getGraph({anchor:anchor, node_filter:node_filter,
                                 group_filter:group_filter});

    this.setState({graph:graph, node_filter:node_filter,
                   group_filter:group_filter});
  }

  selectNode(node){
    let group_filter = this.state.group_filter;
    let node_filter = this.state.node_filter;
    let anchor = this.state.anchor;
    let social = this.state.social;

    if (node === node_filter){
      // switch off the current filter
      node_filter = null;
    }
    else{
      node_filter = node;
    }

    //create a new graph with this filter
    let graph = social.getGraph({anchor:anchor,
                                 group_filter:group_filter,
                                 node_filter: node_filter});

    this.setState({node_filter: node_filter, graph: graph});
  }

  selectGroup(group){
    let group_filter = this.state.group_filter;
    let node_filter = this.state.node_filter;
    let anchor = this.state.anchor;
    let social = this.state.social;

    if (group === group_filter){
      // switch off the current filter
      group_filter = null;
    }
    else{
      group_filter = group;
    }

    //create a new graph with this filter
    let graph = social.getGraph({anchor:anchor,
                                 group_filter:group_filter,
                                 node_filter: node_filter});

    this.setState({group_filter: group_filter, graph: graph});
  }

  getBiography(item){
    let name = "unknown";
    let affiliations = [];
    let positions = [];

    let social = this.state.social;
    let connections = social.getConnectionsTo(item);

    if (item.getAffiliations){
      let a = item.getAffiliations();
      for (let val in a){
        affiliations.push(a[val][0]);
      }
    }

    if (item.getPositions){
      let p = item.getPositions();
      for (let val in p){
        positions.push(p[val][0]);
      }
    }

    if (item.getName){
      name = item.getName();
    }

    return (
      <div>
        <button href="#" onClick={()=>{this.selectNode(item);}}>
          {name}
        </button>
        <GroupsList title="Affiliations"
                    groups={affiliations}
                    emitClicked={(item)=>{this.selectGroup(item);}}/>
        <GroupsList title="Positions"
                    groups={positions}
                    emitClicked={(item)=>{this.selectGroup(item);}}/>
        <ConnectionList title="Connections"
                  connections={connections}
                  emitClicked={(item)=>{this.showInfo(item);}}/>
      </div>
    );
  }

  showInfo(item){
    console.log("showInfo");
    console.log(item);
    let newdata = {...this.state.default_data};

    if (item instanceof Person){
      newdata.title = "Person";
      newdata.text = this.getBiography(item);
      newdata.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Illustrirte_Zeitung_%281843%29_21_332_1_Das_vom_Stapellaufen_des_Great-Britain.PNG/640px-Illustrirte_Zeitung_%281843%29_21_332_1_Das_vom_Stapellaufen_des_Great-Britain.PNG";
    }
    else if (item instanceof Business){
      newdata.title = "Business";
      newdata.text = this.getBiography(item);
      newdata.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/SS_Great_Britain_diagram.jpg/320px-SS_Great_Britain_diagram.jpg";
    }
    else if (item instanceof Message){
      newdata.title = "Message";

      let sender = item.getSender();
      if (sender.getName){
        let node = sender;
        sender = <button href="#" onClick={()=>this.showInfo(node)}>
                    {sender.getName()}
                 </button>;
      }

      let receiver = item.getReceiver();
      if (receiver.getName){
        let node = receiver;
        receiver = <button href="#" onClick={()=>this.showInfo(node)}>
                     {receiver.getName()}
                   </button>;
      }

      newdata.text = <span>Message from {sender} to {receiver}</span>;
      newdata.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/SS_Great_Britain_transverse_section.jpg/320px-SS_Great_Britain_transverse_section.jpg";
    }

    this.setState({infobox_data:newdata,
                   isInfoPaneOpen:true});
  }

  slotClicked(id){
    if (!id){
      this.setState({infobox_data:this.state.default_data});
      return;
    }

    const social = this.state.social;

    const item = social.get(id);

    this.showInfo(item);
  }

  render(){
    let data = this.state.infobox_data;
    let node_filter = this.state.node_filter;
    let group_filter = this.state.group_filter;

    let filter_text = null;

    if (node_filter){
      filter_text = `${node_filter}`;
    }

    if (group_filter){
      let text = `${group_filter}`;
      if (filter_text){
        filter_text = `${filter_text} and ${text}`;
      }
      else{
        filter_text = text;
      }
    }

    if (filter_text){
      filter_text = `Filtered by ${filter_text}.`;
    }

    return (
      <div ref={ref => this.el = ref}
           style={{position:"absolute", "left": 0, "bottom": 0}}>
        <SlidingPane
          isOpen={ this.state.isInfoPaneOpen }
          from="right"
          title='Information'
          width="300px"
          onRequestClose={()=>{this.setState({ isInfoPaneOpen: false });} }>
          <InfoBox title={data.title} text={data.text}
                   image={data.image} />
        </SlidingPane>
        <SlidingPane
          isOpen={ this.state.isTimeLinePaneOpen }
          title='Timeline'
          from='bottom'
          width="100%"
          onRequestClose={() => this.setState({isTimeLinePaneOpen: false})}>
          {this.state.timeline.render()}
        </SlidingPane>
        <Container>
          <Row>
            <Col>
              <span>
                <button onClick={() => this.setState({ isInfoPaneOpen: true })}>
                  Info
                </button> | <button onClick={ () => this.setState({ isTimeLinePaneOpen: true }) }>
                  Timeline
                </button> | <button onClick={ () => this.resetFilters() }>
                  Reset Filters
                </button>
              </span>
              <span style={{position:"absolute", "right": 0}}>
                {filter_text} See the
                source <a href="https://github.com/chryswoods/brunel">
                on GitHub</a>
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <SocialGraph graph={this.state.graph}
                           emitClicked={(id)=>this.slotClicked(id)}
                           anchor={this.state.anchor} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default SocialApp;