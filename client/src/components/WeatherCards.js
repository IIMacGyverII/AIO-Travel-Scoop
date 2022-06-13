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



const WeatherCards = () => {
    const [tableData, setTableData] = useState(false);
    const classes = useStyles();
    //   const [placesToEatData, setPlacesToEatData] = useState([]);

    //   const [restaurantData, setrestaurantData] = useState([]);
    useEffect(() => {

        const axios = require("axios");

        const options = {
          method: 'GET',
          url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
          params: {q: 'Minneapolis', days: '3'},
          headers: {
            'X-RapidAPI-Key': '396d8cd4a6mshabfd5a11b5442e3p1d8c01jsn4e0470110df5',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
            console.log(response.data);
            setTableData(response.data);
        }).catch(function (error) {
            console.error(error);
        });
}, []);


if (tableData === false) {
    console.log("undefined")
    return (
        <div>
            <>Still loading...</>;
        </div>
    );
} else {


    return tableData.data.map((weather) => (
        <Card
            style={{
                marginRight: "1.5%",
                marginBottom: "1.5%",
                boxShadow: "0px 0px 10px 2px black",
                maxWidth: "45%",
            }}
        >
            <CardActionArea>
                <CardContent>
                    {/* <div>
              <img
                src={
                    
                  things.photo.images.small.url
                }
                alt="Image Not Available"
                width="150"
                height="100"
              />
            </div> */}

                    <Typography
                        gutterBottom
                        variant="h4"
                        component="b"
                        key={weather.name}
                    >
                        Location Name: {weather.name}
                    </Typography>
                    <Typography variant="p" component="p">
                        Location Temperature: {weather.temp_f}
                    </Typography>
                    <Typography variant="p" component="p">
                        Location Wind Speed: {weather.wind_mph}
                    </Typography>
                    <Typography variant="p" component="p">
                        Location Humidity: {weather.humidity}
                    </Typography>
                    <Typography variant="p" component="p">
                        Location Hours: {weather.feelslike_f}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    ));
        };
    }

export default WeatherCards;
