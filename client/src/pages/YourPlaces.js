import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import background from "../pages/images/tower.png";

const Home = () => {
  return (
    <div className="container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "90vh",
        width: "1000vw",
        left: "0",
        // backgroundPosition: "bottom"  
        // width: "150%"
        // marginLeft: "10%"
      }}>
      <Card
        style={{
          marginRight: "1.5%",
          marginBottom: "1.5%",
          // marginTop: "2%",
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
              Hello
            >
              Attraction Name: Eiffel Tower
            </Typography>
            <Typography variant="p" component="p">
              Attraction Description: Completed in 1889, this colossal landmark, although initially hated by many Parisians, is now a famous symbol of French civic pride
            </Typography>
            <Typography variant="p" component="p">
              Attraction Address: 5 Avenue, 75007 Paris France
            </Typography>
            <Typography variant="p" component="p">
              Fee: Yes
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
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
              Hello
            >
              Location name: Paris, France
            </Typography>
            <Typography variant="p" component="p">
              Date: 2022-06-10
            </Typography>
            <Typography variant="p" component="p">
              Average-temp-f: 72.6
            </Typography>
            <Typography variant="p" component="p">
              Wind-Speed mph: 8.3
            </Typography>
            {/* <Typography variant="p"  component="p">
            Attraction Hours: {things.hours.week_ranges.close_time}
          </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
      <Card style={{
        marginRight: "1.5%",
        marginBottom: "1.5%",
        boxShadow: "0px 0px 10px 2px black",
        maxWidth: "45%",
      }}>
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
              Hello
            >
              Restaurant name: Cafe Francais
            </Typography>
            <Typography variant="p" component="p">
              Description: French standards, plus salads and sandwiches, in a glass-paneled dining room with opera house views
            </Typography>
            <Typography variant="p" component="p">
              Address: 1-3 Pl. de la Bastille, 75004 Paris, France
            </Typography>
            <Typography variant="p" component="p">
              Restaurant Hours: Open Now
            </Typography>
            {/* <Typography variant="p"  component="p">
            Attraction Hours: {things.hours.week_ranges.close_time}
          </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};


export default Home;