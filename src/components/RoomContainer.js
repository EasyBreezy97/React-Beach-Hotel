/* eslint-disable no-lone-blocks */
import React from 'react'
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import {withRoomConsumer} from '../context';
import Loading from '../components/Loading'


const RoomContainer = ({context}) => {

    const {loading,sortedRooms,rooms} = context;
    {/*reach state from context*/}

        if(loading){
          return <Loading/>
        }
        return (
            <>
              <RoomsFilter rooms = {rooms}/>
              <RoomsList rooms = {sortedRooms}/>
            </>
            );

        }

export default withRoomConsumer(RoomContainer);
