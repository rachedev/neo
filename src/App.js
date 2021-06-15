import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import Footer from './components/Footer';
import './App.css';

import LocalDiningIcon from '@material-ui/icons/LocalDining';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e1667',
    },
    secondary: {
      main: '#c7d8ed',
    },
  },
  typography: {
    fontFamily: ['Roboto'],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: '65%',
    margin: 'auto',
    textAlign: 'center',
  },
  bigSpace: {
    marginTop: '5rem',
  },
  littleSpace: {
    marginTop: '2.5rem',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

function App() {
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            We are WASHINGTON STATE !
          </Typography>
          <Typography
            variant="h5"
            className={classes.littleSpace}
            color="primary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            sodales congue tristique. Cras non pretium sem. Duis interdum lorem
            sit amet ligula pretium, sed rutrum urna semper. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Phasellus egestas gravida ullamcorper.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid
            icon={
              <LocalDiningIcon
                style={{ fill: '#4360A6', height: '125', width: '125' }}
              />
            }
            title="Restaurants"
            btnTitle="Show me More"
          />
          <Grid
            icon={
              <LocalHotelIcon
                style={{ fill: '#449A76', height: '125', width: '125' }}
              />
            }
            title="Hotels"
            btnTitle="Show me More"
          />
          <Grid
            icon={
              <LocalGasStationIcon
                style={{ fill: '#D05B2D', height: '125', width: '125' }}
              />
            }
            title="Gas Stations"
            btnTitle="Show me More"
          />
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid
            icon={
              <LocalGroceryStoreIcon
                style={{ fill: '#5EA780', height: '125', width: '125' }}
              />
            }
            title="Grocery Stores"
            btnTitle="Show me More"
          />
          <Grid
            icon={
              <LocalMallIcon
                style={{ fill: '#E69426', height: '125', width: '125' }}
              />
            }
            title="Malls"
            btnTitle="Show me More"
          />
          <Grid
            icon={
              <LocalAtmIcon
                style={{ fill: '#2EA09D', height: '125', width: '125' }}
              />
            }
            title="ATM/Banks"
            btnTitle="Show me More"
          />
        </div>
        <div className={classes.bigSpace}>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
