import React, { Component } from 'react';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';
import {RoomContext} from '../context'; //context class

export default class FeaturedRooms extends Component {

  static contextType = RoomContext; //contextType can be rached by this.context
  render() {
    let {loading,featuredRooms:rooms} = this.context;
    rooms = rooms.map(room => {
      return <Room key = {room.id} room = {room}/> //prop room. we'll use destructuring in  Room.js {room}
    })

    return (
      <section className = "featured-rooms">
        <Title title ="featured rooms"/>
        <div className="featured-rooms-center">
        {loading ? <Loading/> : rooms}
        </div>
      </section>
    )
  }
}
