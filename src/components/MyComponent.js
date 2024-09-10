import React from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const MyComponent = () => {
  const {t} = useTranslation();

  return (
    <View style={{margin:20}}>
      <LanguageSwitcher />
      <Text>{t('HelloWorldddd')}</Text>
    </View>
  );
};

export default MyComponent;
