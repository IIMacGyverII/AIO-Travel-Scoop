import React, { useState, useEffect, setState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { responsiveFontSizes } from "@mui/material";
import { mergeBreakpointsInOrder } from "@mui/system";
import Loading from "react-loading-components";
import background from "../pages/images/VdgG.gif";

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

const RentalCarCards = () => {
  // const [tableData, setTableData] = useState([]);
  // const classes = useStyles();
  // const [airlineData, setAirlineData] = useState([]);
  const [rentalCarData, setRentalCarData] = useState(false);
  // const [pricedItineraryData, setPricedItineraryData] = useState([]);
  // const [deletedRows, setDeletedRows] = useState([]);
  // const [airlineData, setAirlineData] = useState([])

  useEffect(() => {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '93a1ef52a6mshd5c29301cc4b0c5p1661bfjsn291d78c08c50',
    //     'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    //   }
    // };

    // fetch('https://priceline-com-provider.p.rapidapi.com/v2/cars/resultsVer?pickup_time=10%3A00&dropoff_time=10%3A00&pickup_date=11%2F15%2F2022&dropoff_date=11%2F16%2F2022&pickup_code=MSP&prepaid_rates=true&dropoff_code=MSP', options)
    //   .then(response => response.json()).then(data => console.log(data))

    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    //   setRentalCarData(response.data)
    // }).catch(function (error) {
    //   console.error(error);
    // });
    // console.log("dataTablefetch", data.airline.name)

    const options = {
      method: "GET",
      url: "https://priceline-com-provider.p.rapidapi.com/v2/cars/resultsVer",
      params: {
        pickup_time: "10:00",
        dropoff_time: "10:00",
        pickup_date: "11/15/2022",
        dropoff_date: "11/16/2022",
        pickup_code: "MSP",
        prepaid_rates: "true",
        dropoff_code: "JFK",
      },
      headers: {
        "X-RapidAPI-Key": "93a1ef52a6mshd5c29301cc4b0c5p1661bfjsn291d78c08c50",
        "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(({ data }) => {
        console.log("data", data);
        setRentalCarData(data);
        // use your data here
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // var allProducts = rentalCarData.results.map(function (item) {
  //   return new getData(item);
  // let rentalCar = rentalCarData;
  // console.log("rental", rentalCar)
  // console.log("rentalCarResults", rentalCarData.getCarResultsV3.results.result_list.result_0.car.example)
  // let carResults1 = rentalCarData?.getCarResultsV3.map((rentalCar) => {
  // return {
  // carExample1: rentalCar?.result_0.car.description,
  // media: rentalCar?.result_1.inventory,
  // };
  // });
  // console.log("carResults1", carResults1)

  //   return (
  //     <form>
  //       <fieldset>
  //         <legend>Add New Pet</legend>
  //         <input placeholder="Name" />
  //         <input placeholder="species" />
  //         <input placeholder="age in years" />
  //         <button>Add Pet</button>
  //       </fieldset>
  //     </form>
  //   )
  // }
  console.log("rental", rentalCarData);
  // return rentalCarData.map((rentalCar) => (
  if (rentalCarData === false) {
    console.log("undefined");
    return (
      <div>
        {loadingWheel()}
        <></>;
      </div>
    );
  } else {
    return (
      <div
        style={{
          // width: "100vw",
          display: "flex",
          // flex: "flex",
          flexWrap: "wrap",
          // flexDirection: "row",
          // border: "2px solid black",
          marginTop: "1%",
          marginLeft: "5%",
          // position: "relative",
        }}
      >
        <Card
          style={{
            marginRight: "1.5%",
            marginBottom: "1.5%",
            boxShadow: "0px 0px 10px 2px black",
            minWidth: "30.5%",
            maxWidth: "30.5%",
            // border: "2px solid black",
          }}
        >
          <CardActionArea href="https://www.enterprise.com">
            <CardContent>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_0
                      .car.imageurl
                  }
                  alt="Image Not Available"
                  width="200"
                  height="100"
                />
              </div>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_0
                      .partner.logo
                  }
                  alt="Image Not Available"
                  width="150"
                  height="50"
                />
              </div>
              <Typography
                gutterBottom
                variant="h6"
                component="b"
                // key={rentalCar.id}
              >
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_0.car
                    .example
                }
              </Typography>
              <Typography variant="p" component="p">
                Type:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_0.car
                    .type
                }
              </Typography>

              <Typography variant="p" component="p">
                Passengers:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_0.car
                    .passengers
                }
              </Typography>
              <Typography variant="p" component="p">
                Total Price: $
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_0
                    .price_details.total_price
                }
                /day
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          style={{
            marginRight: "1.5%",
            marginBottom: "1.5%",
            boxShadow: "0px 0px 10px 2px black",
            minWidth: "30.5%",
            maxWidth: "30.5%",
          }}
        >
          <CardActionArea
            href={
              rentalCarData.getCarResultsV3.results.result_list.result_1.car
                .contract_page_url
            }
          >
            <CardContent>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_1
                      .car.imageurl
                  }
                  alt="Image Not Available"
                  width="200"
                  height="100"
                />
              </div>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_1
                      .partner.logo
                  }
                  alt="Image Not Available"
                  width="150"
                  height="50"
                />
              </div>
              <Typography
                gutterBottom
                variant="h6"
                component="b"
                // key={rentalCar.id}
              >
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_1.car
                    .example
                }
              </Typography>
              <Typography variant="p" component="p">
                Type:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_1.car
                    .type
                }
              </Typography>

              <Typography variant="p" component="p">
                Passengers:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_1.car
                    .passengers
                }
              </Typography>
              <Typography variant="p" component="p">
                Total Price: $
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_1
                    .price_details.total_price
                }
                /day
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          style={{
            marginRight: "1.5%",
            marginBottom: "1.5%",
            boxShadow: "0px 0px 10px 2px black",
            minWidth: "30.5%",
            maxWidth: "30.5%",
          }}
        >
          <CardActionArea
            href={
              rentalCarData.getCarResultsV3.results.result_list.result_2.car
                .contract_page_url
            }
          >
            <CardContent>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_2
                      .car.imageurl
                  }
                  alt="Image Not Available"
                  width="200"
                  height="100"
                />
              </div>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_2
                      .partner.logo
                  }
                  alt="Image Not Available"
                  width="150"
                  height="50"
                />
              </div>
              <Typography
                gutterBottom
                variant="h6"
                component="b"
                // key={rentalCar.id}
              >
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_2.car
                    .example
                }
              </Typography>
              <Typography variant="p" component="p">
                Type:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_2.car
                    .type
                }
              </Typography>

              <Typography variant="p" component="p">
                Passengers:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_2.car
                    .passengers
                }
              </Typography>
              <Typography variant="p" component="p">
                Total Price: $
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_2
                    .price_details.total_price
                }
                /day
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card
          style={{
            marginRight: "1.5%",
            marginBottom: "1.5%",
            boxShadow: "0px 0px 10px 2px black",
            minWidth: "30.5%",
            maxWidth: "30.5%",
          }}
        >
          <CardActionArea
            href={
              rentalCarData.getCarResultsV3.results.result_list.result_3.car
                .contract_page_url
            }
          >
            <CardContent>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_3
                      .car.imageurl
                  }
                  alt="Image Not Available"
                  width="200"
                  height="100"
                />
              </div>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_3
                      .partner.logo
                  }
                  alt="Image Not Available"
                  width="150"
                  height="50"
                />
              </div>
              <Typography
                gutterBottom
                variant="h6"
                component="b"
                // key={rentalCar.id}
              >
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_3.car
                    .example
                }
              </Typography>
              <Typography variant="p" component="p">
                Type:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_3.car
                    .type
                }
              </Typography>

              <Typography variant="p" component="p">
                Passengers:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_3.car
                    .passengers
                }
              </Typography>
              <Typography variant="p" component="p">
                Total Price: $
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_3
                    .price_details.total_price
                }
                /day
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          style={{
            marginRight: "1.5%",
            marginBottom: "1.5%",
            boxShadow: "0px 0px 10px 2px black",
            minWidth: "30.5%",
            maxWidth: "30.5%",
          }}
        >
          <CardActionArea
            href={
              rentalCarData.getCarResultsV3.results.result_list.result_4.car
                .contract_page_url
            }
          >
            <CardContent>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_4
                      .car.imageurl
                  }
                  alt="Image Not Available"
                  width="200"
                  height="100"
                />
              </div>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_4
                      .partner.logo
                  }
                  alt="Image Not Available"
                  width="150"
                  height="50"
                />
              </div>
              <Typography
                gutterBottom
                variant="h6"
                component="b"
                // key={rentalCar.id}
              >
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_4.car
                    .example
                }
              </Typography>
              <Typography variant="p" component="p">
                Type:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_4.car
                    .type
                }
              </Typography>

              <Typography variant="p" component="p">
                Passengers:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_4.car
                    .passengers
                }
              </Typography>
              <Typography variant="p" component="p">
                Total Price: $
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_4
                    .price_details.total_price
                }
                /day
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          style={{
            marginRight: "1.5%",
            marginBottom: "1.5%",
            boxShadow: "0px 0px 10px 2px black",
            minWidth: "30.5%",
            maxWidth: "30.5%",
          }}
        >
          <CardActionArea
            href={
              rentalCarData.getCarResultsV3.results.result_list.result_5.car
                .contract_page_url
            }
          >
            <CardContent>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_5
                      .car.imageurl
                  }
                  alt="Image Not Available"
                  width="200"
                  height="100"
                />
              </div>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_5
                      .partner.logo
                  }
                  alt="Image Not Available"
                  width="150"
                  height="50"
                />
              </div>
              <Typography
                gutterBottom
                variant="h6"
                component="b"
                // key={rentalCar.id}
              >
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_5.car
                    .example
                }
              </Typography>
              <Typography variant="p" component="p">
                Type:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_5.car
                    .type
                }
              </Typography>

              <Typography variant="p" component="p">
                Passengers:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_5.car
                    .passengers
                }
              </Typography>
              <Typography variant="p" component="p">
                Total Price: $
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_5
                    .price_details.total_price
                }
                /day
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          style={{
            marginRight: "1.5%",
            marginBottom: "1.5%",
            boxShadow: "0px 0px 10px 2px black",
            minWidth: "30.5%",
            maxWidth: "30.5%",
          }}
        >
          <CardActionArea
            href={
              rentalCarData.getCarResultsV3.results.result_list.result_6.car
                .contract_page_url
            }
          >
            <CardContent>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_6
                      .car.imageurl
                  }
                  alt="Image Not Available"
                  width="200"
                  height="100"
                />
              </div>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_6
                      .partner.logo
                  }
                  alt="Image Not Available"
                  width="150"
                  height="50"
                />
              </div>
              <Typography
                gutterBottom
                variant="h6"
                component="b"
                // key={rentalCar.id}
              >
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_6.car
                    .example
                }
              </Typography>
              <Typography variant="p" component="p">
                Type:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_6.car
                    .type
                }
              </Typography>

              <Typography variant="p" component="p">
                Passengers:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_6.car
                    .passengers
                }
              </Typography>
              <Typography variant="p" component="p">
                Total Price: $
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_6
                    .price_details.total_price
                }
                /day
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          style={{
            marginRight: "1.5%",
            marginBottom: "1.5%",
            boxShadow: "0px 0px 10px 2px black",
            minWidth: "30.5%",
            maxWidth: "30.5%",
          }}
        >
          <CardActionArea
            href={
              rentalCarData.getCarResultsV3.results.result_list.result_7.car
                .contract_page_url
            }
          >
            <CardContent>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_7
                      .car.imageurl
                  }
                  alt="Image Not Available"
                  width="200"
                  height="100"
                />
              </div>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_7
                      .partner.logo
                  }
                  alt="Image Not Available"
                  width="150"
                  height="50"
                />
              </div>
              <Typography
                gutterBottom
                variant="h6"
                component="b"
                // key={rentalCar.id}
              >
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_7.car
                    .example
                }
              </Typography>
              <Typography variant="p" component="p">
                Type:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_7.car
                    .type
                }
              </Typography>

              <Typography variant="p" component="p">
                Passengers:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_7.car
                    .passengers
                }
              </Typography>
              <Typography variant="p" component="p">
                Total Price: $
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_7
                    .price_details.total_price
                }
                /day
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          style={{
            marginRight: "1.5%",
            marginBottom: "1.5%",
            boxShadow: "0px 0px 10px 2px black",
            minWidth: "30.5%",
            maxWidth: "30.5%",
          }}
        >
          <CardActionArea
            href={
              rentalCarData.getCarResultsV3.results.result_list.result_8.car
                .contract_page_url
            }
          >
            <CardContent>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_8
                      .car.imageurl
                  }
                  alt="Image Not Available"
                  width="200"
                  height="100"
                />
              </div>
              <div>
                <img
                  src={
                    rentalCarData.getCarResultsV3.results.result_list.result_8
                      .partner.logo
                  }
                  alt="Image Not Available"
                  width="150"
                  height="50"
                />
              </div>
              <Typography
                gutterBottom
                variant="h6"
                component="b"
                // key={rentalCar.id}
              >
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_8.car
                    .example
                }
              </Typography>
              <Typography variant="p" component="p">
                Type:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_8.car
                    .type
                }
              </Typography>

              <Typography variant="p" component="p">
                Passengers:{" "}
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_8.car
                    .passengers
                }
              </Typography>
              <Typography variant="p" component="p">
                Total Price: $
                {
                  rentalCarData.getCarResultsV3.results.result_list.result_8
                    .price_details.total_price
                }
                /day
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
};
export default RentalCarCards;
