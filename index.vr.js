import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';


class TextBoxes extends React.Component {
  render() {
    return (
      <View>
          <VrButton onClick={() => this.props.stateClicked(1)}>
              <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#719dc3ba'}}>
                  <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.DiagonAlley}</Text>
              </View>
          </VrButton>
          <VrButton onClick={() => this.props.stateClicked(2)}>
              <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#719dc3ba'}}>
                  <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.FantasyLand}</Text>
              </View>
          </VrButton>
          <VrButton onClick={() => this.props.stateClicked(3)}>
              <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#719dc3ba'}}>
                  <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.NorthernLights}</Text>
              </View>
          </VrButton>
          <VrButton onClick={() => this.props.stateClicked(4)}>
              <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#719dc3ba'}}>
                  <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.Pandora}</Text>
              </View>
          </VrButton>
      </View>
    )
  }
};


class Title extends React.Component {
    constructor() {
      super();
      this.state = {title: "Choose a Portkey"};
    }
  render() {
    return (
      <View>
          <Text 
            style={{
                fontSize: 0.2, 
                textAlign: 'center', 
                color: "#fff"
              }}
          >
            {this.state.title}
          </Text>
      </View>
    )
  }
};

export default class PortKey extends React.Component {
    constructor() {
        super();
        this.state = {selectedState: ""};
        
        this.componentDidMount = function () {
            const random = Math.floor((Math.random() * 4) + 1);
            let randState;
            switch(random) {
              case 1:
                randState = "Diagon Alley";
                break;
              case 2:
                randState = "FantasyLand";
                break;
              case 3:
                randState = "Northern Lights";
                break;
              case 4:
                randState = "Pandora";
                break;
            }
            this.setState({ selectedState: randState});
        };
        
        this.stateClicked = function (selection) {
            let newState;
            switch(selection) {
                case 1:
                  newState = "Diagon Alley";
                  break;
                case 2:
                  newState = "FantasyLand";
                  break;
                case 3:
                  newState = "Northern Lights";
                  break;
                case 4:
                  newState = "Pandora";
                  break;
            }
            this.setState({ selectedState: newState});
        }
    }
  render() {
      const states = {
          DiagonAlley: "Diagon Alley", 
          FantasyLand: "FantasyLand",
          NorthernLights: "Northern Lights",
          Pandora: "Pandora"
      }
    return (
      <View>
        <Pano source={asset(this.state.selectedState + '.jpg')}/>
        <View
          style={{
            width: 2,
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            transform: [{translate: [0, 0, -4]}],
            layoutOrigin: [0.5,0.5]
          }}
        >
            <Title/>
            <TextBoxes 
                stateClicked={this.stateClicked.bind(this)}
                states={states}
            />
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('PortKey', () => PortKey);
