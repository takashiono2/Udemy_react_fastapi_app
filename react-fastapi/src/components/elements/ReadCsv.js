import React from 'react'
import Papa from 'papaparse'
import ReactFileReader from 'react-file-reader'
import { Button } from '@mui/material';
import { useCreateSales } from '../hooks/useCreateSales';

const ReadCsv = (props) => {
  const { handleDataChange } = props;
  const { onClickCreateSales } = useCreateSales();
  const uploadFile = (files) => {
    const file = files[0];
    Papa.parse(file, {
      skipEmptyLines: true,
      complete: (results) => {
        console.log(results.data);
        onClickCreateSales(results.data);
        handleDataChange(results.data)
      }
    });
  };
  return (
    <div>
      <ReactFileReader handleFiles={uploadFile} fileTypes={'.csv'}>
        <Button variant="contained">upload</Button>
      </ReactFileReader>
    </div>
  )
}

export default ReadCsv