import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const events = require('./db.json').events;
    setEvents(events);
  } , [])

  return (
    <FlatList
      data={events}
      renderItem={({item}) => <Text>{item.title}</Text>}
      keyExtractor={(item) => item.id}
    />
  );
};

export default EventList;
