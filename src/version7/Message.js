
import Dry from "json-dry";

function setState(val, def=null){
  if (val){
    return val;
  } else {
    return def;
  }
}

class Message {
  constructor(props){
    this.state = {
      name: null,
      id: null,
      date: null,
      sender: null,
      receiver: null,
      scores: {},
    };

    this.setState(props);
    this._getHook = null;
  }

  _updateHooks(hook){
    this._getHook = hook;
  }

  getID(){
    return this.state.id;
  }

  setState(state){
    if (state){
      this.state.name = setState(state.name);
      this.state.id = setState(state.id);
      this.state.date = setState(state.date);
      this.state.sender = setState(state.sender);
      this.state.receiver = setState(state.receiver);
      this.state.scores = setState(state.scores, {});
    }
  }

  toString(){
    return `Message(name=${this.state.name} ` +
           `${this.state.sender}=>${this.state.receiver})`;
  }

  toEdge(){
    let weight = 1.0;

    if (this.state.scores){
      weight = this.state.scores.weight;

      if (!weight){
        weight = 1.0;
      }
    }

    let color = 'red';

    if (weight > 10.0){
      weight = 10.0;
    }
    else if (weight >= 4){
      color = 'black';
    }
    else if (weight > 1.0){
      color = 'gray';
    }
    else{
      color = 'gray';
      weight = 1.0;
    }

    let edge = {
      id:this.getID(),
      from:this.state.sender,
      to:this.state.receiver,
      size:weight,
      color:color,
    };

    return edge;
  }

  toDry(){
    return {value: this.state};
  }
};

Message.unDry = function(value){
  return new Message(value);
}

Message.load = function(data, people=null){
  return new Message({name: data.name});
}

Dry.registerClass("Message", Message);

export default Message;