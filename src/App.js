import React from "react";
import Card from "@material-ui/core/Card";
import tid from "./images.png";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form1 from "./form1";
import Form2 from "./form2";
import Contact from "./iletisim";
import header from "./header";
import kosullar from "./kosullar";
const form = {
  margin: 20
};
const baslik = {
  color: "orange",
  textAlign: "center"
};

export default function index() {
  return (
    <Router>
      <Switch>
        <Route exact path="/form" component={Form1} />
        <Route exact path="/form2" component={Form2} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/header" component={header} />
        <Route exact path="/kosullar" component={kosullar} />
        <Route>
          <header className="App-header">
            <img src={tid} className="App-logo" alt="logo" />
            <div className="example2">
              <h3>Hoşgeldiniz!!</h3>
              <p>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </p>
            </div>
          </header>

          <div className="kutu">
            <div className="form1">
              <Card style={form}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={baslik}
                  >
                    1.Grup
                  </Typography>
                  <Typography variant="body2" component="p">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>

                <CardActions>
                  <div className="butici">
                    <Link to={"/form"} className="buykay">
                      <button className="butkay">
                        <AddIcon className="kayit1" />
                        <span className="kayit1">KAYIT OL!</span>
                      </button>
                    </Link>
                  </div>
                </CardActions>
              </Card>
            </div>
            <div className="form2">
              <Card style={form}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={baslik}
                  >
                    2.Grup
                  </Typography>
                  <Typography variant="body2" component="p">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>

                <CardActions>
                  <div className="butici">
                    <Link to={"/form2"} className="buykay">
                      <button className="butkay2">
                        <AddIcon className="kayit2" />
                        <span className="kayit2">KAYIT OL!</span>
                      </button>
                    </Link>
                  </div>
                </CardActions>
              </Card>
            </div>
          </div>
          <div className="email">
            <Link to={"/contact"}>
              <button className="iletisim">
                <span className="mail">SORUN VARSA BİZE ULAŞIN!</span>
              </button>
            </Link>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
