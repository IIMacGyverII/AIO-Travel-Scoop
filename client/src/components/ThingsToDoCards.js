import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { responsiveFontSizes } from "@mui/material";
import { mergeBreakpointsInOrder } from "@mui/system";

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

const ThingsToDoCards = () => {
  const [tableData, setTableData] = useState([]);
  const classes = useStyles();
  const [thingsToDoData, setThingsToDoData] = useState([]);
//   const [segmentData, setSegmentData] = useState([]);
  const [attractionItineraryData, setAttractionItineraryData] = useState([]);
//   const [deletedRows, setDeletedRows] = useState([]);
  // const [airlineData, setAirlineData] = useState([])

  useEffect(() => {
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/attractions/list',
  params: {
    location_id: '43323',
    currency: 'USD',
    lang: 'en_US',
    lunit: 'km',
    sort: 'recommended'
  },
  headers: {
    'X-RapidAPI-Key': '396d8cd4a6mshabfd5a11b5442e3p1d8c01jsn4e0470110df5',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log("fullData", response.data);
    setTableData(response.data);
}).catch(function (error) {
	console.error(error);
});
        // setThingsToDoData(response.data.thingsToDo);
        // setSegmentData(response.data.segment);
        // setAttractionItineraryData(response.data.attractionItinerary);
        // console.log("airline1", response.data.airline[0].name)
      
  }, []);
//   reycels console stuff
// console.log("table", tableData.data)
//   console.log("tableDataCards", tableData);
  

  const thingsData = tableData.data?.map((things) => {
    console.log("things", things)
    return {
      name: things?.name,
    //   description: things?.attractionDescription,
    //   address: things?.attractionAddress,
    //   ranking_position: things?.attractionRankingPosition,
    //   hours: things?.attractionHours,
    };
  });

//   const rowData3 = attractionItineraryData?.map((attractionItinerary) => {
    // console.log("pricedItinerary", pricedItinerary.pricingInfo.totalFare)
    // return {
        // website: attractionItinerary?.websiteInfo.websiteURL,
    // };
//   });

//   const merged = [...rowData2, ...rowData3];
  // console.log("totalfaretest", merged.totalFare);
  // console.log("merged", merged);
  // console.log("rowData1", rowData1[0]);


//     return (
//       <form>
//         <fieldset>
//           <legend>Add New Pet</legend>
//           <input placeholder="Name" />
//           <input placeholder="species" />
//           <input placeholder="age in years" />
//           <button>Add Pet</button>
//         </fieldset>
//       </form>
//     )
//   }
  
  return tableData.data.map((things) => (
    <Card
      style={{
        marginRight: "1.5%",
        marginBottom: "1.5%",
        boxShadow: "0px 0px 10px 2px black",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="b"
            key={things.name}
          >
            Attraction Name: {things.name}
          </Typography>
          <Typography variant="p"  component="p">
            Attraction Description: {things.description}
          </Typography>
          <Typography variant="p"  component="p">
            Attraction Address: {things.address}
          </Typography>
          <Typography variant="p"  component="p">
            Attraction Ranking Position: {things.ranking_position} Minutes
          </Typography>
          <Typography variant="p"  component="p">
            Attraction Hours: {things.hours}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
};

export default ThingsToDoCards;
