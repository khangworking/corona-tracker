import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country = '') => {
  try {
    let changedUrl = url
    if (!!country) changedUrl = `${url}/countries/${country}`
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changedUrl);
    const modifiredData = { confirmed, recovered, deaths, lastUpdate };
    return modifiredData;
  } catch (error) {

  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiredData = data.map(item => ({
      confirmed: item.confirmed.total,
      deaths: item.deaths.total,
      date: item.reportDate
    }))
    return modifiredData
  } catch (error) {

  }
}

export const countries = async () => {
  try {
    const { data: {countries} } = await axios.get(`${url}/countries`);
    return countries
  } catch (error) {
    console.log(error)
  }
}