import Head from "next/head";
import InstagramEmbed from "react-instagram-embed";
const Index = () => (
  <div>
    <Head>
      <link rel="shortcut icon" href="favicon.ico" />
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      <link href="fontawesome\css\all.css" rel="stylesheet" />
    </Head>

    <div className="container my-5">
      <main>
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-center">
              <h1 className="display-4 fw-bold lh-1">Moda & Estação</h1>
              <p className="lead">Você na moda em todas as estações do ano!</p>
              <p className="lead">
                <i className="fab fa-instagram"></i>
                <a href="https://www.instagram.com/modaestacaooficial/">
                  ModaEstacaoOficial
                </a>
              </p>
              <p className="lead">
                <i className="fas fa-envelope"></i>
                <a href="mailto:sac@modaestacao.com.br?subject=Duvida&body=Estou Com Duvida! Pode me ajudar?">
                  sac@modaestacao.com.br
                </a>
              </p>
              <p className="lead">
                <i className="fab fa-whatsapp"></i>
                <a href="https://api.whatsapp.com/send?phone=5542988613939&text=Estou%20Com%20Duvida%2C%20Pode%20me%20ajudar%3F">
                  (42) 9 8861-3939
                </a>
              </p>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                className="rounded-lg-3"
                src="download.jpg"
                alt=""
                width="720"
              />
            </div>
          </div>
        </div>
      </main>
      <InstagramEmbed
        url="https://www.instagram.com/p/CVI25d2AJcj/"
        clientAccessToken="1121690451696494|IGQVJXSjMtSldtMjJmaktBSVg1Q1lPMEFySGhfTmZAfbzM2Wmx1cFJFdmpyV1NzVGFsVmpDcTBCZA19aU3NjLUhJRTE5UEZAHWDRaTWx5UGhPWnRfRVhtNUxUS2pYX0E2VnFsWlgxN0p5WWl5QUpTdlplSwZDZD"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></script>
    </div>
  </div>
);

export default Index;
