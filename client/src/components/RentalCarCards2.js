import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function RentalCarCards2() {
  const [rentalCarData, setVal] = useState();

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
      dropoff_code: 'MSP'
    },
    headers: {
      'X-RapidAPI-Key': '93a1ef52a6mshd5c29301cc4b0c5p1661bfjsn291d78c08c50',
      'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    }
  };

  const getRequest = async () => {
    const { data } = await axios(options);
    setVal(data);
    console.log("bla", data)
};

useEffect(() => {
    getRequest();
    console.log("test", rentalCarData)
}, []);

return <div>{AddPetForm(rentalCarData)}</div>;
function AddPetForm (data) {
    console.log("junk", data)
    return (
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
                <img src={data.getCarResultsV3.results.result_list.result_0.car.imageurl} alt="Image Not Available" width="150" height="100" />
                 </div>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="b"
                    // key={rentalCar.id}
                  >
                    {/* {rentalCarData.getCarResultsV3.results.result_list.result_0.car.example} */}
                  </Typography>
                  {/* <Typography variant="p"  component="p">
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
                  </Typography> */}
                  
                </CardContent>
              </CardActionArea>
            </Card>
    )
  }


// const rentalCarData = 
}
//   return (
//     <Card
//       style={{
//         marginRight: "1.5%",
//         marginBottom: "1.5%",
//         boxShadow: "0px 0px 10px 2px black",
//         minWidth: "47.5%",
//         maxWidth: "47.5%"
//       }}
//     >
//       <CardActionArea>
//         <CardContent>
//           <div>
//         <img src={rentalCarData.getCarResultsV3.results.result_list.result_0.car.imageurl} alt="Image Not Available" width="150" height="100" />
//          </div>
//           <Typography
//             gutterBottom
//             variant="h6"
//             component="b"
//             // key={rentalCar.id}
//           >
//             {/* {rentalCarData.getCarResultsV3.results.result_list.result_0.car.example} */}
//           </Typography>
//           {/* <Typography variant="p"  component="p">
//             {hotel.location.address.addressLine1}
//           </Typography>
//             </div>
//           <Typography variant="p"  component="p">
//             {hotel.location.address.cityName}, {hotel.location.address.provinceCode}
//           </Typography>
//           <Typography variant="p"  component="p">
//             Features: {hotel.keyFeatures}
//           </Typography>
//           <Typography variant="p"  component="p">
//             ${hotel.ratesSummary.minPrice}/night
//           </Typography>
//           <Typography variant="p"  component="p">
//             Number of Reviews: {hotel.totalReviewCount}
//           </Typography>
//           <Typography variant="p"  component="p">
//             {hotel.starRating} ⭐
//           </Typography> */}
          
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };