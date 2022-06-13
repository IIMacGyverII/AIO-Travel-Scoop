import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default  function OutsideUsageExample() {
  const [data, dataSet] = useState(null)
  const options = {
    method: 'GET',
    url: 'https://priceline-com-provider.p.rapidapi.com/v2/cars/resultsVer',
    params: {
      pickup_time: '10:00',
      dropoff_time: '10:00',
      pickup_date: '11/15/2022',
      dropoff_date: '11/16/2022',
      pickup_code: 'MSP',
      prepaid_rates: 'true',
      dropoff_code: 'JFK'
    },
    headers: {
      'X-RapidAPI-Key': '93a1ef52a6mshd5c29301cc4b0c5p1661bfjsn291d78c08c50',
      'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    }
  };

  const fetchMyAPI = useCallback(async () => {
    let response = await axios.request(options)
    response = await response.json()
    dataSet(response)
  }, [])

  useEffect(() => {
    fetchMyAPI()
  }, [fetchMyAPI])

  return (
    <div>
      <div>data: {JSON.stringify(data)}</div>
      <div>
        <button onClick={fetchMyAPI}>manual fetch</button>
      </div>
    </div>
  )
}