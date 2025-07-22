import React, { useEffect } from 'react'
import useReadSales from '../hooks/useReadSales';

const ReadDatabase = (props) => {
  const { year, handleDataChange } = props;
  const { onClickReadSales } = useReadSales();
  useEffect(() => {
    if (year === "") return;
    const promise = onClickReadSales(year)

    let array = [];
    let arrayDepartment = [];
    let arrayYear = [];
    let arraySales = [];

    promise.then((data) => {
      if (data.length > 0) {

        for (let i = 0; i < data.length; i++) {
          arrayDepartment.push(data[i].department);
          arrayYear.push(data[i].year);
          arraySales.push(data[i].sales);
        }
        array.push(arrayDepartment);
        array.push(arrayYear);
        array.push(arraySales);
        handleDataChange(array);
      }
      else {
        console.log("データがありません");
        handleDataChange(array);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);

  return (
    <div></div>
  )
}

export default ReadDatabase;