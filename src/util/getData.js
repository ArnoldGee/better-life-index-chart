// This async function reads the CSV file and converts it into JSON

import Papa from 'papaparse'

import importedCsvData from '../data/better_life_index_data.csv';

async function getCSV(){
  const response = await fetch(importedCsvData)
  return await response.text()
}

export default async function getData() {
  const csvString = await getCSV()
  const dataObject = Papa.parse(csvString, {header: true})
  return dataObject
}