import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  //const [newCount, setNewCount] = useState(0);

  useEffect(() => {
    console.log('count changed');
    return () => {
      console.log('use effect cleanup');
    };
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Count: ${count}`}</Text>
      <Button
        color={'blue'}
        title={'Increase the count'}
        onPress={() => setCount(count + 1)}
      />
      <Button
        color={'red'}
        title={'Decrease the count'}
        onPress={() => setCount(count - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 25
  }
});

export default Counter;
