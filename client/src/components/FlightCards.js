import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { responsiveFontSizes } from "@mui/material";
import { mergeBreakpointsInOrder } from "@mui/system";
import Loading from "react-loading-components";


const loadingWheel = () => (
  <Loading type="ball_triangle" width={800} height={800} fill="#f44242" />
);

// card JS
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
    flexGrow: 1,
    color: "green",

    // padding: theme.spacing(2),
  },
});

// export default function ImgMediaCard() {
// const classes = useStyles();
// end card JS

const FlightCards = () => {
  const [tableData, setTableData] = useState(false);
  const classes = useStyles();
  // const [airlineData, setAirlineData] = useState([]);
  const [segmentData, setSegmentData] = useState([]);
  const [pricedItineraryData, setPricedItineraryData] = useState([]);
  // const [deletedRows, setDeletedRows] = useState([]);
  // const [airlineData, setAirlineData] = useState([])

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://priceline-com-provider.p.rapidapi.com/v1/flights/search",
      params: {
        itinerary_type: "ONE_WAY",
        class_type: "ECO",
        location_arrival: "MSP",
        date_departure: "2022-11-15",
        location_departure: "JFK",
        sort_order: "PRICE",
        number_of_stops: "0",
        price_max: "20000",
        number_of_passengers: "1",
        duration_max: "2051",
        price_min: "100",
        date_departure_return: "2022-11-16",
      },
      headers: {
        "X-RapidAPI-Key": "93a1ef52a6mshd5c29301cc4b0c5p1661bfjsn291d78c08c50",
        "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log("tableDataAxios response.data", response.data);
        // console.log("tableDataAxios axios", [response.data.airline[0].name]);
        // console.log("tableDataAxios airline array", [response.data.airline])
        // can use this to get the info if we have to but need a way to get it out of here
        // ask how to get it out
        // let airline1 = [response.data.airline];
        // console.log("tableDataAxios airline1 axios", airline1);
        //
        // console.log("tableDataAxios attempted array", [response.data]);
        setTableData(response.data);
        // setAirlineData(response.data.airline);
        setSegmentData(response.data.segment);
        setPricedItineraryData(response.data.pricedItinerary);
        // console.log("airline1", response.data.airline[0].name)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  // console.log("tableDataCards", tableData);
  // console.log("andrewaxios", airlineData)

  // let rowData1 = airlineData?.map((airline) => {
  //     // console.log("airlineData", airline)
  //     return {
  //       airlineName: airline?.name,
  //     };
  //   });

  const rowData2 = segmentData?.map((segmented) => {
    // console.log("segmented", segmented)
    return {
      arrival: segmented?.arrivalDateTime,
      departure: segmented?.departDateTime,
      flightNumber: segmented?.flightNumber,
      marketingAirline: segmented?.marketingAirline,
      duration: segmented?.duration,
      planeType: segmented?.equipmentCode,
      destAirport: segmented?.destAirport,
      origAirport: segmented?.origAirport,
    };
  });

  const rowData3 = pricedItineraryData?.map((pricedItinerary) => {
    // console.log("pricedItinerary", pricedItinerary.pricingInfo.totalFare)
    return {
      totalFare: pricedItinerary?.pricingInfo.totalFare,
    };
  });

  const merged = [...rowData2, ...rowData3];
  // console.log("totalfaretest", merged.totalFare);
  // console.log("merged", merged);
  // console.log("rowData1", rowData1[0]);
  console.log(tableData)
  if (tableData === false) {
    console.log("tableDataundefined");
    return (
      <div>
        {loadingWheel()}
        <>Still loading...</>;
      </div>
    );
  } else {
  return rowData2.map((segment) => (
    <Card
      style={{
        marginRight: "1.5%",
        marginBottom: "1.5%",
        boxShadow: "0px 0px 10px 2px black",
        marginTop: "2%",
      }}
    >
      <CardActionArea href="https://www.delta.com">
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="b"
            key={segment.flightNumber}
          >
            Flight Number: {segment.marketingAirline}{segment.flightNumber}
          </Typography>
          {/* <Typography variant="h6"  component="p">
            Airline: {segment.marketingAirline}
          </Typography> */}
          <Typography variant="p"  component="p">
            Departure Time: {segment.departure}
          </Typography>
          <Typography variant="p"  component="p">
            Arrival Time: {segment.arrival}
          </Typography>
          <Typography variant="p"  component="p">
            Flight Time: {segment.duration} Minutes
          </Typography>
          <Typography variant="p"  component="p">
            Type of Aircraft: {segment.planeType}
          </Typography>
          <Typography variant="p"  component="p">
            Arriving Airport: {segment.destAirport}
          </Typography>
          <Typography variant="p"  component="p">
            Departure Airport: {segment.origAirport}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
};
}
export default FlightCards;
