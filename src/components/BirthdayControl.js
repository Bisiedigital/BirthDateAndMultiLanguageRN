import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BirthdayControl = () => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [monthError, setMonthError] = useState('');
  const [dayError, setDayError] = useState('');
  const [yearError, setYearError] = useState('');
  const monthOptions = [
    {label: 'January', value: 'January'},
    {label: 'February', value: 'February'},
    {label: 'March', value: 'March'},
    {label: 'April', value: 'April'},
    {label: 'May', value: 'May'},
    {label: 'June', value: 'June'},
    {label: 'July', value: 'July'},
    {label: 'August', value: 'August'},
    {label: 'Sepetember', value: 'Sepetember'},
    {label: 'October', value: 'October'},
    {label: 'November', value: 'November'},
    {label: 'December', value: 'December'},
  ];

  const handleMonthChange = text => {
    setMonth(text);
    if (text.length === 0) {
      setMonthError('Please select your birth month.');
    } else {
      setMonthError('');
    }
  };
  const handleDayChange = text => {
    setDay(text);
    if (
      text.length > 0 &&
      (isNaN(text) || parseInt(text) < 1 || parseInt(text) > 31)
    ) {
      setDayError('Please enter a valid Birthday');
    } else {
      setDayError('');
    }
  };

  const handleYearChange = text => {
    setYear(text);
    if (text.length !== 4 || isNaN(text)) {
      setYearError('Please enter a four digit year');
    } else if (
      (text.length === 4 && parseInt(text) < 1900) ||
      parseInt(text) > 2023
    ) {
      setYearError('Enter a valid Birthday');
    } else {
      setYearError('');
    }
  };

  return (
    <View>
      <View>
        <Text style={{color: 'blue', fontSize: 16}}>Birthday:</Text>
      </View>
      <View style={styles.container}>
        <View
          style={{
            borderRadius: 5,
            width: '45%',
            borderWidth: 0,
            backgroundColor: '#EFF4F8',
            borderColor: 'gray',
          }}>
          <Picker
            style={[
              styles.inputPicker,
              {borderColor: monthError ? 'red' : 'gray'},
              {borderWidth: monthError ? 2 : 0},
            ]}
            selectedValue={month}
            itemStyle={{borderColor: 'gray'}}
            onValueChange={itemValue => {
              setMonth(itemValue);
              setMonthError(true);
            }}>
            <Picker.Item label="Month" value="" />
            {monthOptions.map(option => (
              <Picker.Item
                style={{height: 50}}
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>
        </View>
        <TextInput
          style={[
            styles.input,
            styles.customSTyle,
            {borderColor: dayError ? 'red' : 'gray'},
            {borderWidth: dayError ? 2 : 0},
          ]}
          placeholder="Day"
          value={day}
          onChangeText={handleDayChange}
        />
        <TextInput
          style={[
            styles.input,
            {borderColor: yearError ? 'red' : 'gray'},
            {borderWidth: yearError ? 2 : 0},
          ]}
          placeholder="Year"
          value={year}
          onChangeText={handleYearChange}
        />
      </View>
      {monthError ? <Text style={styles.errorText}>{monthError}</Text> : null}
      {dayError ? <Text style={styles.errorText}>{dayError}</Text> : null}
      {yearError ? <Text style={styles.errorText}>{yearError}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  inputPicker: {
    width: '100%',
    height: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'grey',
    backgroundColor: '#EFF4F8',
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 3,
    padding: 10,
    width: 80,
    height: 55,
    backgroundColor: '#EFF4F8',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default BirthdayControl;
