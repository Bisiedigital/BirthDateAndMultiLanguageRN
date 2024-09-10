import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

const LanguageSwitcher = () => {
  const {i18n} = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const changeLanguage = language => {
    i18n.changeLanguage(language);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.touchable}>
        <Text style={styles.languageText}>{i18n.t('Language')}</Text>
      </TouchableOpacity>
      {showDropdown && (
        <View style={styles.dropdown}>
          <TouchableOpacity
            onPress={() => changeLanguage('en')}
            style={styles.option}>
            <Text style={styles.optionText}>{i18n.t('English')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeLanguage('am')}
            style={styles.option}>
            <Text style={styles.optionText}>{i18n.t('Amharic')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeLanguage('fr')}
            style={styles.option}>
            <Text style={styles.optionText}>{i18n.t('French')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeLanguage('or')}
            style={styles.option}>
            <Text style={styles.optionText}>{i18n.t('Oromo')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  touchable: {
    padding: 10,
  },
  languageText: {
    color: 'blue',
    fontSize: 16,
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: 'white',
    padding: 10,
    zIndex: 1,
  },
  option: {
    paddingVertical: 5,
  },
  optionText: {
    fontSize: 14,
  },
});

export default LanguageSwitcher;
