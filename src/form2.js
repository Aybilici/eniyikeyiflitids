import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./App";
import Contact from "./iletisim";
import Form1 from "./form1";
import kosullar from "./kosullar";
import "./App.css";
import "./css/util.css";
import "./css/mainf2.css";
import Background from "./isaret.jpg";

var imagesection = {
  backgroundImage: `url(${Background})`
};

export default function form2() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form1} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/kosullar" component={kosullar} />
        <Route>
          <div className="App3">
            <div className="menu">
              <Link to={"/"}>
                <button className="butlar">Geri dön</button>
              </Link>
              <Link to={"/form"}>
                <button className="butlar">1.Gruba katıl!</button>
              </Link>
            </div>
            <div className="container-contact100">
              <div className="wrap-contact100">
                <div
                  className="contact100-more flex-col-c-m"
                  style={imagesection}
                >
                  <div className="dis-flex size1 p-b-47">
                    <div className="flex-col size2">
                      <span className="txt1 p-b-20">Kayıt ol!</span>

                      <span className="txt3">
                        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan
                        mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                        matbaacının bir hurufat numune kitabı oluşturmak üzere
                        bir yazı galerisini alarak karıştırdığı 1500'lerden beri
                        endüstri standardı sahte metinler olarak kullanılmıştır.
                        Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı
                        zamanda pek değişmeden elektronik dizgiye de
                        sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren
                        Letraset yapraklarının yayınlanması ile ve yakın zamanda
                        Aldus PageMaker gibi Lorem Ipsum sürümleri içeren
                        masaüstü yayıncılık yazılımları ile popüler olmuştur.
                      </span>
                    </div>
                  </div>
                </div>
                <form className="contact100-form validate-form">
                  <span className="contact100-form-title">2.Grup</span>

                  <label className="label-input100" htmlFor="first-name">
                    Adınız-Soyadınız *
                  </label>
                  <div
                    className="wrap-input100 rs1-wrap-input100 validate-input"
                    data-validate="Type first name"
                  >
                    <input
                      id="first-name"
                      className="input100"
                      type="text"
                      name="first-name"
                      placeholder="Adın-Soyadın"
                    />
                    <span className="focus-input100" />
                  </div>

                  <label className="label-input100" htmlFor="email">
                    Emailin *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Valid email is required: ex@abc.xyz"
                  >
                    <input
                      id="email"
                      className="input100"
                      type="text"
                      name="email"
                      placeholder="ornek@email.com"
                    />
                    <span className="focus-input100" />
                  </div>

                  <label className="label-input100" htmlFor="phone">
                    Telefon nuramanız *
                  </label>
                  <div className="wrap-input100">
                    <input
                      id="phone"
                      className="input100"
                      type="text"
                      name="phone"
                      placeholder="Örnek Numara : 0523 434 43 54"
                    />
                    <span className="focus-input100" />
                  </div>

                  <label className="label-input100" htmlFor="date">
                    Doğum günün tarihiniz *
                  </label>
                  <div className="wrap-input100">
                    <input
                      id="date"
                      className="input100"
                      type="date"
                      name="date"
                      required
                    />
                  </div>

                  <label className="label-input100" htmlFor="message">
                    Bir şey istediğiniz var mı? Varsa açıklayınız! *
                  </label>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Message is required"
                    style={{ marginBottom: "15px" }}
                  >
                    <textarea
                      id="message"
                      className="input100"
                      name="message"
                      placeholder="Açıkla"
                    />
                    <span className="focus-input100" />
                  </div>
                  <label htmlFor="checkbox_id" className="label-input101">
                    <input
                      type="checkbox"
                      title="Kabul ediyorum"
                      id="checkbox_id"
                      style={{
                        width: "20px",
                        height: "20px",
                        margin: "10px 10px 10px 0px"
                      }}
                      required
                    />{" "}
                    Şart&nbsp;
                    <Link to="/kosullar" target="_blank">
                      Koşulları
                    </Link>
                    &nbsp;kabul et
                  </label>
                  <div className="container-contact100-form-btn">
                    <button className="contact100-form-btn">Gönder</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="email">
              <Link to={"/contact"}>
                <button className="iletisim">
                  <span className="mail">SORUN VARSA BİZE ULAŞIN!</span>
                </button>
              </Link>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
