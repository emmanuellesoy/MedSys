import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

type Props = {
  text: string;
  onPress(): void;
  onPressText(): void;
};

export default function Item({text, onPress, onPressText}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableWithoutFeedback onPress={onPressText}>
          <View style={styles.textBox}>
            <Text style={styles.text}>{text}</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.iconBox}>
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>-</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#011222',
    borderBottomColor: '#7D2E08',
    borderWidth: 1,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
  },
  iconBox: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  textBox: {
    flex: 3,
  },
  text: {
    color: '#FEECEB',
    fontSize: 20,
    fontWeight: '400',
  },
  iconContainer: {
    backgroundColor: '#FBFFF4',
    width: 48,
    height: 48,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },
  iconText: {
    color: '#011222',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
