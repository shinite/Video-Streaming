import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export  default class Thumbnails extends React.Component{

  render(){
    // const self=this;
    // const titleNo="Video "+{self.props.index};
  return (
    <Card style={{width:50, }}>
    <CardHeader
    title= "Video"
    subtitle={this.props.index}
    />
    <CardText>
        {this.props.myFiles}
    </CardText>
  </Card>

  )}
};
