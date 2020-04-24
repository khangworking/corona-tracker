import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { countries as fetchCountries } from '../../api';

const CountryPicker = ({ onCountryChanged }) => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries())
    }
    fetchAPI()
  }, [])
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={e => onCountryChanged(e.target.value)}>
        <option value=''>Global</option>
        { !!countries.length && countries.map((country, i) => (<option key={i} value={country.iso3}>{country.name}</option>)) }
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker