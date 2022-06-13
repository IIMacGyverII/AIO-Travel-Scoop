import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        firstName: props.firstName,
        lastName: props.lastName,
        status: props.status,
      },
    };
  }

  handleFirstNameChanged(event) {
    var customer = this.state.customer;
    customer.firstName = event.target.value;

    this.setState({ customer: customer });
  }

  handleLastNameChanged(event) {
    var customer = this.state.customer;
    customer.lastName = event.target.value;

    this.setState({ customer: customer });
  }

  handleStatusChanged(event) {
    var customer = this.state.customer;
    customer.status = event.target.value;

    this.setState({ customer: customer });
  }

  handleButtonClicked() {
    console.log(this.state.customer);
  }
  render() {
    return (
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            height: "60%",
            marginTop: "15px",
            marginRight: "20px",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Where are you?"
            inputProps={{ "aria-label": "Where are you?" }}
            value={this.state.customer.firstName}
            onChange={this.handleFirstNameChanged.bind(this)}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search" onClick={this.handleButtonClicked.bind(this)}>
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
      <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Where are you?"
            inputProps={{ "aria-label": "Where are you?" }}
            value={this.state.customer.lastName}
            onChange={this.handleLastNameChanged.bind(this)}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search" onClick={this.handleButtonClicked.bind(this)}>
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
      <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Where are you?"
            inputProps={{ "aria-label": "Where are you?" }}
            value={this.state.customer.status}
            onChange={this.handleStatusChanged.bind(this)}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search" onClick={this.handleButtonClicked.bind(this)}>
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
        </Paper>
    );
  }
}
