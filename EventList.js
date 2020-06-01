import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import EventCard from './EventCard';

const renderEventCard = ({item}) => <EventCard event={item} />;

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setEvents(event => event.map( evt => ({
        ...evt,
        timer: Date.now(),
      })))
    }, 1000);

    const events = require('./db.json').events.map((e) => ({
      ...e,
      date: new Date(e.date),
    }));
    setEvents(events);

    return () => clearInterval(intervalID);
  } , []);

  const styles = StyleSheet.create({
    list: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: '#F3F3F3'
    },
  });

  return (
    <FlatList
      data={events}
      style={styles.list}
      renderItem={renderEventCard}
      keyExtractor={(item) => item.id}
    />
  );
};

export default EventList;
