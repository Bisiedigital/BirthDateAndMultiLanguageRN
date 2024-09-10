import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import BirthdayControl from './BirthdayControl';
import CustomButton from './CustomButton';
import Bisiedigital from './bisiedigital';
import {useTranslation} from 'react-i18next';


function Register() {
  const {t} = useTranslation();

  const [firstName, setFirstName] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleFirstNameChange = text => {
    setFirstName(text);
    setErrorText('');
  };

  const handleSubmit = () => {
    if (!firstName) {
      setErrorText('Enter Your First Name');
    } else if (!month) {
      setErrorText('Select Birth Month');
    } else if (!day) {
      setErrorText('Enter Birth Day');
    } else if (!year) {
      setErrorText('Enter Birth Year');
    } else {
      setErrorText('');
      console.log('Form submitted!');
    }
  };

  return (
    <View>
      <Bisiedigital />
      <View style={{margin: 20}}>
        <Text style={{color: 'blue'}}>{t('FirstName')}:</Text>
        <TextInput
          style={{
            borderWidth: errorText ? 3 : 0,
            backgroundColor: '#EFF4F8',
            borderColor: errorText ? 'red' : 'black',
          }}
          placeholder="Enter Your First Name"
          value={firstName}
          onChangeText={handleFirstNameChange}
        />
        <Text style={{color: 'red'}}>{errorText}</Text>
      </View>
      <View style={{margin: 20, marginTop: -20}}>
        <BirthdayControl />
      </View>

      <CustomButton title="Submit Info" onPress={handleSubmit} />
    </View>
  );
}

export default Register;
