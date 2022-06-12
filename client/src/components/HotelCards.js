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

const HotelCards = () => {
  // const [tableData, setTableData] = useState([]);
  const classes = useStyles();
  // const [airlineData, setAirlineData] = useState([]);
  const [hotelData, setHotelData] = useState([]);
  // const [pricedItineraryData, setPricedItineraryData] = useState([]);
  // const [deletedRows, setDeletedRows] = useState([]);
  // const [airlineData, setAirlineData] = useState([])

  useEffect(() => {
   
const options = {
  method: 'GET',
  url: 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/search',
  params: {
    sort_order: 'HDR',
    location_id: '3000010974',
    date_checkout: '2022-11-16',
    date_checkin: '2022-11-15',
    star_rating_ids: '3.0,3.5,4.0,4.5,5.0',
    rooms_number: '1',
    amenities_ids: 'FINTRNT,FBRKFST'
  },
  headers: {
    'X-RapidAPI-Key': '93a1ef52a6mshd5c29301cc4b0c5p1661bfjsn291d78c08c50',
    'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log("hotelData", response.data.hotels);
  setHotelData(response.data.hotels);
  // console.log("hotels", response.data.hotels)
}).catch(function (error) {
	console.error(error);
});
}, []);
  
  let rowData1 = hotelData?.map((hotels) => {
      // console.log("airlineData", airline)
      return {
        name: hotels?.name,
        media: hotels?.thumbnailUrl,
      };
    });

  
  return hotelData.map((hotel) => (
    <Card
      style={{
        marginRight: "1.5%",
        marginBottom: "1.5%",
        boxShadow: "0px 0px 10px 2px black",
        minWidth: "47.5%",
        maxWidth: "47.5%"
      }}
    >
      <CardActionArea>
        <CardContent>
          <div>
        <img src={hotel.thumbnailUrl} alt="Image Not Available" width="150" height="100" />
         </div>
          <Typography
            gutterBottom
            variant="h6"
            component="b"
            key={hotel.name}
          >
            {hotel.name}
          </Typography>
            <div>
          <Typography variant="p"  component="p">
            {hotel.location.address.addressLine1}
          </Typography>
            </div>
          <Typography variant="p"  component="p">
            {hotel.location.address.cityName}, {hotel.location.address.provinceCode}
          </Typography>
          <Typography variant="p"  component="p">
            Features: {hotel.keyFeatures}
          </Typography>
          <Typography variant="p"  component="p">
            ${hotel.ratesSummary.minPrice}/night
          </Typography>
          <Typography variant="p"  component="p">
            Number of Reviews: {hotel.totalReviewCount}
          </Typography>
          <Typography variant="p"  component="p">
            {hotel.starRating} ⭐
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  ));
};

export default HotelCards;
