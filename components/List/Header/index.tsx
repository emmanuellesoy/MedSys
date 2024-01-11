import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  text: string;
};

export default function Header({text}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#011222',
    borderBottomColor: '#7D2E08',
    borderWidth: 3,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    marginVertical: 12,
  },
  text: {
    color: '#FEECEB',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
