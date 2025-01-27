// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <section class="pd-5vw">
        <div class="">
          <div class="text-size-5-vh dpd-20 text-blue">
            Under Maintenance
          </div>
          <div class="text-size-10-vh text-purple dpd-20">
            <strong>
              We'll Be Back Soon.
            </strong>
          </div>
        </div>
        <div class="text-height-1-5 text-grey text-size-18 dpd-20">
          We're busy upgrading with new technology.
          We apologize for the inconvenience.
        </div>
      </section>

      <div class="gears-img sm-hide">
        <svg class="machine" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 645 526" fill="url(#grad1)">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" class="gears-grd1" />
              <stop offset="100%" class="gears-grd2" />
            </linearGradient>
          </defs>
          <defs />
          <g>
            <path x="-173,694" y="-173,694" class="large-shadow" d="M645 194v-21l-29-4c-1-10-3-19-6-28l25-14 -8-19 -28 7c-5-8-10-16-16-24L602 68l-15-15 -23 17c-7-6-15-11-24-16l7-28 -19-8 -14 25c-9-3-18-5-28-6L482 10h-21l-4 29c-10 1-19 3-28 6l-14-25 -19 8 7 28c-8 5-16 10-24 16l-23-17L341 68l17 23c-6 7-11 15-16 24l-28-7 -8 19 25 14c-3 9-5 18-6 28l-29 4v21l29 4c1 10 3 19 6 28l-25 14 8 19 28-7c5 8 10 16 16 24l-17 23 15 15 23-17c7 6 15 11 24 16l-7 28 19 8 14-25c9 3 18 5 28 6l4 29h21l4-29c10-1 19-3 28-6l14 25 19-8 -7-28c8-5 16-10 24-16l23 17 15-15 -17-23c6-7 11-15 16-24l28 7 8-19 -25-14c3-9 5-18 6-28L645 194zM471 294c-61 0-110-49-110-110S411 74 471 74s110 49 110 110S532 294 471 294z" />
          </g>
          <g>
            <path x="-136,996" y="-136,996" class="medium-shadow" d="M402 400v-21l-28-4c-1-10-4-19-7-28l23-17 -11-18L352 323c-6-8-13-14-20-20l11-26 -18-11 -17 23c-9-4-18-6-28-7l-4-28h-21l-4 28c-10 1-19 4-28 7l-17-23 -18 11 11 26c-8 6-14 13-20 20l-26-11 -11 18 23 17c-4 9-6 18-7 28l-28 4v21l28 4c1 10 4 19 7 28l-23 17 11 18 26-11c6 8 13 14 20 20l-11 26 18 11 17-23c9 4 18 6 28 7l4 28h21l4-28c10-1 19-4 28-7l17 23 18-11 -11-26c8-6 14-13 20-20l26 11 11-18 -23-17c4-9 6-18 7-28L402 400zM265 463c-41 0-74-33-74-74 0-41 33-74 74-74 41 0 74 33 74 74C338 430 305 463 265 463z" />
          </g>
          <g >
            <path x="-100,136" y="-100,136" class="small-shadow" d="M210 246v-21l-29-4c-2-10-6-18-11-26l18-23 -15-15 -23 18c-8-5-17-9-26-11l-4-29H100l-4 29c-10 2-18 6-26 11l-23-18 -15 15 18 23c-5 8-9 17-11 26L10 225v21l29 4c2 10 6 18 11 26l-18 23 15 15 23-18c8 5 17 9 26 11l4 29h21l4-29c10-2 18-6 26-11l23 18 15-15 -18-23c5-8 9-17 11-26L210 246zM110 272c-20 0-37-17-37-37s17-37 37-37c20 0 37 17 37 37S131 272 110 272z" />
          </g>
          <g>
            <path x="-100,136" y="-100,136" class="small" d="M200 236v-21l-29-4c-2-10-6-18-11-26l18-23 -15-15 -23 18c-8-5-17-9-26-11l-4-29H90l-4 29c-10 2-18 6-26 11l-23-18 -15 15 18 23c-5 8-9 17-11 26L0 215v21l29 4c2 10 6 18 11 26l-18 23 15 15 23-18c8 5 17 9 26 11l4 29h21l4-29c10-2 18-6 26-11l23 18 15-15 -18-23c5-8 9-17 11-26L200 236zM100 262c-20 0-37-17-37-37s17-37 37-37c20 0 37 17 37 37S121 262 100 262z" />
          </g>
          <g>
            <path x="-173,694" y="-173,694" class="large" d="M635 184v-21l-29-4c-1-10-3-19-6-28l25-14 -8-19 -28 7c-5-8-10-16-16-24L592 58l-15-15 -23 17c-7-6-15-11-24-16l7-28 -19-8 -14 25c-9-3-18-5-28-6L472 0h-21l-4 29c-10 1-19 3-28 6L405 9l-19 8 7 28c-8 5-16 10-24 16l-23-17L331 58l17 23c-6 7-11 15-16 24l-28-7 -8 19 25 14c-3 9-5 18-6 28l-29 4v21l29 4c1 10 3 19 6 28l-25 14 8 19 28-7c5 8 10 16 16 24l-17 23 15 15 23-17c7 6 15 11 24 16l-7 28 19 8 14-25c9 3 18 5 28 6l4 29h21l4-29c10-1 19-3 28-6l14 25 19-8 -7-28c8-5 16-10 24-16l23 17 15-15 -17-23c6-7 11-15 16-24l28 7 8-19 -25-14c3-9 5-18 6-28L635 184zM461 284c-61 0-110-49-110-110S401 64 461 64s110 49 110 110S522 284 461 284z" />
          </g>
          <g>
            <path x="-136,996" y="-136,996" class="medium" d="M392 390v-21l-28-4c-1-10-4-19-7-28l23-17 -11-18L342 313c-6-8-13-14-20-20l11-26 -18-11 -17 23c-9-4-18-6-28-7l-4-28h-21l-4 28c-10 1-19 4-28 7l-17-23 -18 11 11 26c-8 6-14 13-20 20l-26-11 -11 18 23 17c-4 9-6 18-7 28l-28 4v21l28 4c1 10 4 19 7 28l-23 17 11 18 26-11c6 8 13 14 20 20l-11 26 18 11 17-23c9 4 18 6 28 7l4 28h21l4-28c10-1 19-4 28-7l17 23 18-11 -11-26c8-6 14-13 20-20l26 11 11-18 -23-17c4-9 6-18 7-28L392 390zM255 453c-41 0-74-33-74-74 0-41 33-74 74-74 41 0 74 33 74 74C328 420 295 453 255 453z" />
          </g>
        </svg>
      </div>

      <section class="bottom-copy">
        <div class="dpd-20">
          <a href="/">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2048 1059" width="200" height="100">
              <path transform="translate(1046,35)" d="m0 0h8l1 103 13 9 9 7 1 2v74l-1 7-4-2-2-2-1-75-4-2-11-8v83l13 10 20 15 18 14 10 7v44l16-6 18-10 9-6 30-15 14-8h2l1 5v227l-1 1h-44v75l282-1-3 3-47 16-32 10-30 10-179 57-36 12-50 16-13 4-10-1-60-19-21-7-48-15-44-15-41-13-113-36-45-14-16-6-1-2 270 1v-74l-15-1-1-1v-229l6 2 21 11 2 2v289l17 1v-182l6-5 17-10 5-4 1-104 8-7 17-13 11-8h2l1-96 8-7 14-10 1-1zm8 207v104l28 17 24 15h2l1-29v-66l-5-5-21-16-20-15-7-5zm0 113v57l5 3 41 18 34 15 4 1v-43l-10-7-20-12-19-12-28-17-5-3zm3 80v149h23l1-138-6-4-16-7zm-16 0-21 9-1 3v81l1 56h22l1-148zm-39 17-17 7-1 1v124h20l1-12v-120zm93 0v132h21v-124l-19-8zm36 15-1 1v106l1 10h7v-114l-2-2zm-164 0-6 3v25 2 27l1 60h7v-117zm54 141-8 1 3 10 16 42 7 18 2 1h19l4-8 22-57 2-7-21 1-5 12-11 28v3h-2l-3-11-9-24-4-8-1-1z" fill="#5E3269" />
              <path transform="translate(1046,35)" d="m0 0h8l1 103 13 9 9 7 1 2v74l-1 7-4-2-2-2-1-75-4-2-11-8v83l13 10 20 15 18 14 10 7v44l16-6 18-10 9-6 30-15 14-8h2l1 5-1 118-2 2-8-3-1 2-1-3 1-3h-2v-2h-8l-5 6-5 3-2 4 1 4-6 4v5l-5 4-11 3v3l-5 4h-2l-2 7-3 8h-1l-1-41-40-25-26-16-17-10 1 57 15 7 37 16 25 11v1h-11v-2l-3 1-5-4-14-3-7-3-7-2v-2h-7l-2-2-9-2h-3l-1 2-4-1v2l-5-2-3-1v-3l-4-1-5-6v-2h-2l-1-6 2-8 4-3 1 2 4-4h2l-1-11-4-1-3 2-2 3h-6l-3-2 1 3 3 3h-3l-7-1-1 1-12-1-3 1-1 4-3 3-12 6-3 3h-3v2l-4 2-2 4-5 1-4 3h-2v2l-6 3-3 5-2 12-2 11 1 7-2 9-2 3 1 7-1 1-1 82h-1v-162l6-5 17-10 5-4 1-104 8-7 17-13 11-8h2l1-96 8-7 14-10 1-1zm8 207v104l28 17 24 15h2l1-29v-66l-5-5-21-16-20-15-7-5z" fill="#675887" />
              <path transform="translate(1047,384)" d="m0 0 5 2v11l-6 5-2-2-3 4-1 12h2l6 8 3 1 1 3 4 1 3 2v-2l4 1 1-3h6l7 3 1 1 7 1v2l9 2 12 4 7 1 6 4h2v2l3-1 10 1 4 2 2-9 4-8 5-4 2-4 11-3 4-3v-5l5-4h2l-2-6 5-5 3-1 5-6 8 1v2h2l1 3v1l5 1h4 1l1 109-1 1h-44v75h-1l-1-40-4-14-4-2-2 4-3 2-3 6h-3l-2 2-1-72-6-2-1 85-6 3-3 3h-4v19h-1v-118l-9-3-12-5v131h-1l-1-32-1-12-2-6-2-5-6 1-1 49h-1v-132l-14-7-9-4 1 62-1 38h-1v-7l-8-1-4 1-1 56h-1v-148l-13 5-9 4v139h-1l-1-43-1-10-2 2-2 9-4 8-2 7-2 3-1-64 1-44-20 8-1 124h-1l-1-25-3-3h-2v2l-3 1-4-1v26h-1v-117l-7 3v25l2 2h-3l1 27v60h-1v-34l-6 5v-73l1-2-1-6 2-3 2-10-1-7 4-22 4-6 3-2h3v-2l8-5h3l3-5h3v-2l20-12 2-4h2l1-2 12 1 3-1 7 2-3-3v-3l9 1z" fill="#5D4375" />
              <path transform="translate(893,269)" d="m0 0 2 1v239l-151 1-1 15h164l1 1v9l-1 1h-175v-31h78l-1-5 1-153 7-8 16-15 14-11 17-16 17-17h2l1-3h2l1-3z" fill="#5D4275" />
              <path transform="translate(893,269)" d="m0 0 2 1v239h-100v-1h99l-1-122h-3l-2-4h-6l-9 4-1 3-6-1-1 3-6 4-2 1-4-1-6 4-13 1-10 2h-2l-2 6-3 5h-2l-1 6-2 4-1 47h-1v-123l7-8 16-15 14-11 17-16 17-17h2l1-3h2l1-3z" fill="#685988" />
              <path transform="translate(1703,803)" d="m0 0h22l11 15 16 23 10 16 10 14 5 6v-68l1-6h17l1 1v98l-6 1h-16l-8-10-13-19-11-16-13-18-7-9-1-1-1 11-1 62h-16l-1-8v-91z" fill="#685988" />
              <path transform="translate(1212,282)" d="m0 0 5 3 11 9 6 5 1 2v208h-22l-1-7z" fill="#685988" />
              <path transform="translate(560,803)" d="m0 0h67l8 3 8 8 5 10 1 4v11l-4 10-7 9-5 4 1 4 10 21 8 14v2h-14l-6-8-17-28-3-2h-35v38h-16l-1-1zm21 16-4 1v28h49l5-3 3-4 1-9-2-7-5-5-6-1z" fill="#685988" />
              <path transform="translate(1137,803)" d="m0 0h49l16 4 10 5 7 7 5 10 3 11v25l-3 12-5 9-2 3h-2v2l-9 6-12 4-5 1-34 1h-17l-1-2zm16 16-2 1v66h39l11-4 5-5 3-6 1-5v-27l-3-8-7-8-9-3-10-1z" fill="#685988" />
              <path transform="translate(1604,803)" d="m0 0h19l10 3 11 6 5 5v2l-7 6h-2l-1 3-5-2-10-5-5-1h-12l-10 3-9 6-5 7-3 10v13l4 10 6 9 12 6 4 1h16l11-4 4-4h2l2-4 4-7 1-5-33-1v-11l1-5h48v19l-3 11-5 9-8 9-10 6-10 4-6 1h-14l-11-3-11-6-11-11-7-12-3-10-1-11 2-12 7-14 10-11 10-6z" fill="#685988" />
              <path transform="translate(443,803)" d="m0 0h76v16l-41 1h-18v21l45 1v15l-45 1 1 27 57 1 1 1v15l-5 1h-70l-1-1-1-11v-49z" fill="#685988" />
              <path transform="translate(815,803)" d="m0 0h76l1 2v14l-60 1 1 21 44 1v15l-45 1 1 28h57l1 1v15l-29 1h-46l-1-11z" fill="#685988" />
              <path transform="translate(1267,803)" d="m0 0h77v15l-1 1-42 1h-16v21l44 1 1 6v9l-46 1 1 28h47l11 1v15l-43 1h-31l-1-1-1-47z" fill="#685988" />
              <path transform="translate(1253,317)" d="m0 0 5 2 9 6 7 5 1 2v177h-22l-1-11v-113z" fill="#5D4275" />
              <path transform="translate(933,802)" d="m0 0 22 1 9 10 9 11 8 10 3-1 15-20 8-10 19-1 2 1-2 4-10 12-12 16-10 13 2 4 12 14 11 13 11 14 6 8v2h-19l-7-7-9-11-13-15-4-5-4 1-10 13-16 21-2 3h-21l6-9 14-18 10-13 9-12-1-4-12-14-9-11-11-13-4-5z" fill="#685988" />
              <path transform="translate(908,279)" d="m0 0 6 2 21 11 2 2v193h-1l-2-38-6-35-1-12-3-7 1-2-3 1-1-5v-4h-4v4l-7 5-1 7 4 2 1 3-4 17-1 81h2v4h12v1h-14l-1-1z" fill="#685988" />
              <path transform="translate(917,383)" d="m0 0 1 2h3l1 7 3 1 1 4 2 7 2 15 5 30 1 13 1 35-1 86-13 3-4 1-9-1-45-1v-1h59v-74l-1-1-12-1v-4h-2v-82l4-18-4-3v-7l7-6z" fill="#5D4275" />
              <path transform="translate(1418,802)" d="m0 0h8l14 3 8 5 5 6 3 7v4l-6 1h-10l-4-6-10-2h-14l-5 2-1 2v8l4 4 15 4 18 5 12 6 5 6 3 7v13l-3 9-6 8-8 5-10 3-7 1h-17l-11-3-9-6-6-7 8-6 5-2 8 5 4 1h26l6-3 3-5v-11l-4-4-12-4-17-4-10-4-9-8-4-8v-14l4-8 5-4 8-4z" fill="#685988" />
              <path transform="translate(1282,339)" d="m0 0 4 2 1 128v36h81v31h-191v-11h179l1-15h-74l-1-1z" fill="#685988" />
              <path transform="translate(305,802)" d="m0 0h17l3 3 23 58 6 14v2h2l3-9 16-40 8-22 2-5h17l-2 6-12 29-12 36-11 27-2 2h-16l-3-3-16-39-14-34-8-20z" fill="#685888" />
              <path transform="translate(688,803)" d="m0 0h87v16l-35 1 1 39v43l-1 1h-17l-1-3-1-16v-23l2-41-35-1-1-9z" fill="#695A89" />
              <path transform="translate(1357,546)" d="m0 0h11v25l-15 1h-176l-1-12 2-2h178v-11z" fill="#5E356B" />
              <path transform="translate(732,546)" d="m0 0h11l1 12 164 1v12l-4 1h-172z" fill="#5E346B" />
              <path transform="translate(1505,802)" d="m0 0 17 1 1 5v19l-1 51-1 25h-16l-1-1-2-31v-58l2-10z" fill="#695A89" />
              <path transform="translate(1253,317)" d="m0 0 5 2 9 6 7 5 1 2v177h-1v-148l-5 3-1 7h-2l-1 5-2 7v13l-3 15-2 26v13l-3 13-1 3-1 32h-1v-113z" fill="#685988" />
              <path transform="translate(1218,414)" d="m0 0 4 1 6 13 2 23 3 25 1 18v6 3l-2 1-1 4h-18l-1-6 1-81 2-4z" fill="#5D4275" />
              <path transform="translate(1177,525)" d="m0 0h40l120 1v2l3-1 10 1 1 3-5 3-11 1h-158z" fill="#5D4275" />
              <path transform="translate(947,299)" d="m0 0 5 2 14 8 1 1v69l-9 6-7 4h-3z" fill="#685988" />
              <path transform="translate(297,811)" d="m0 0h4l12 27 14 35 13 32 2 3h22l3-1 7-14 13-38 13-33 4-10 1-1h6l-1 5-15 35-11 30-8 24-7 14-4 2h-21l-5-4-13-29-30-75z" fill="#835BE7" />
              <path transform="translate(982,873)" d="m0 0 5 5 9 10 9 11 8 9h25l6 5 5 7v1h-35l-8-7-11-14-9-10-3-4-7 8-8 11-9 11-6 5h-33l4-7 4-5 28-1 10-13 14-18z" fill="#7F55EA" />
              <path transform="translate(1557,861)" d="m0 0 2 4 3 11 6 12 4 5 11 8 11 5 7 2 9 1h9l12-2 12-5 11-8 6-9 5-12 2-6h1v7l-4 15-6 12-7 8-9 6-12 5-5 1h-24l-13-4-10-6-7-6-9-13-4-9-2-11z" fill="#8058E8" />
              <path transform="translate(1232,859)" d="m0 0 2 4v10l-2 13-5 12-7 9-9 7-13 5-13 2h-53l-1-1-1-11 2-1h57l16-4 10-5 7-6 6-12 3-12z" fill="#8057E9" />
              <path transform="translate(748,527)" d="m0 0h23l9 1 9-1 4 1 26-1h50l6 1 7-1h24l1 1v6l-10 1h-153l-3-3 4-4z" fill="#5D3269" />
              <path transform="translate(1935,987)" d="m0 0h9l4 6 6 14 3-3 8-17h10v38h-9l-3-6-4 6h-7l-5-5-2 5h-9l-1-1z" fill="#685565" />
              <path transform="translate(588,987)" d="m0 0h14l6 4 4 6 2 6v21l-1 1-23 1-7-3-6-7-2-5v-9l4-8 7-6zm4 11-6 5v6l4 5 6 1-4-7 1-5 5-2v-2z" fill="#685565" />
              <path transform="translate(524,908)" d="m0 0h1v12l-1 1h-85l-2-2v-10z" fill="#7F55EA" />
              <path transform="translate(1262,908)" d="m0 0 88 1v7l-2 5h-85l-1-1z" fill="#7F55EA" />
              <path transform="translate(523,987)" d="m0 0h12l3 3 6 10 4 2v-14h10l1 1v35l-2 2-7-1-5-5-7-8-2-1v14l-4 1-6-1-1-31z" fill="#685565" />
              <path transform="translate(1469,882)" d="m0 0h1v8l-4 12-6 8-7 6-11 4-6 1h-28l-13-4-10-7-7-9 1-5 5 1 11 7 12 4 9 1h14l14-2 12-5 5-5 6-10z" fill="#7F56E8" />
              <path transform="translate(810,909)" d="m0 0h86l-1 12h-84l-1-1z" fill="#7E55EA" />
              <path transform="translate(1444,987)" d="m0 0h21l7 3 2 4 1 8-2 6-2 5 5 9v3h-11l-6-9-5-2v9l-1 2h-9l-1-1v-36zm11 11v4l6 1 2-1v-4z" fill="#685566" />
              <path transform="translate(131,987)" d="m0 0h22l5 3 3 5v10l-3 5 1 6 4 8v1h-11l-5-6-1-4-5-2-1 12-6 1-4-1-1-6 1-31zm12 10-2 4 1 1h7v-4z" fill="#685565" />
              <path transform="translate(1992,987)" d="m0 0h28l1 5-1 6-8 1 6 2v11l-2 1h-9l12 1 1 1v10h-28l-1-26v-11z" fill="#695564" />
              <path transform="translate(1223,987)" d="m0 0h10l4 2 8 12 3 2v-15h10l1 21v15l-3 2-7-1-6-7-4-6-3-1v13l-1 1h-8l-1-1-1-27z" fill="#685564" />
              <path transform="translate(1538,987)" d="m0 0h29v7l-1 4h-16v2h11l3 2v10h-14v3h16v10h-28l-1-2v-35z" fill="#685564" />
              <path transform="translate(703,987)" d="m0 0h29l1 3-1 8h-16v2h12l2 2v9l-1 1h-13v3h16l1 9-1 1h-28l-1-2z" fill="#685567" />
              <path transform="translate(749,987)" d="m0 0h19l8 2 4 8v7l-4 7 2 6 4 5v3h-11l-8-10-4-1v11h-10zm11 11v4h9l-1-4z" fill="#685565" />
              <path transform="translate(1067,987)" d="m0 0h10l5 5 6 10 2 1 1-15 2-1 8 1v37l-1 1-7-1-5-5-7-9v-2h-2v16h-10l-1-25zm28 26v6h2l-1-6z" fill="#685565" />
              <path transform="translate(1276,987)" d="m0 0h24l4 1-1 10h-16v2h12l2 1v10l-1 1h-12v2h12l3 1v10h-27l-1-1v-36z" fill="#685567" />
              <path transform="translate(842,987)" d="m0 0h27l2 1-1 10h-16v3h14v10l-1 1h-13v3h16l1 9-1 1h-28z" fill="#685565" />
              <path transform="translate(1028,987)" d="m0 0h10l6 3 6 7 2 5v10l-6 9-6 4-3 1h-8l-7-3-5-5-3-5-1-9 3-8 4-5zm1 11-5 5v6l3 5 5 2 5-1 4-4 1-6-3-5-3-2z" fill="#685565" />
              <path transform="translate(1185,987)" d="m0 0h10l8 4 5 7 2 10-2 7-7 8-7 3h-8l-7-3-7-8-1-3v-12l5-8 6-4zm2 11-4 2-2 3v7l5 5 6 1 6-5 1-6-3-5-3-2z" fill="#685565" />
              <path transform="translate(356,987)" d="m0 0h24l2 1v10h-14v2h12l1 1v11h-13l1 2h11l2 1v10h-26l-1-1v-36z" fill="#685566" />
              <path transform="translate(230,987)" d="m0 0h10l1 1 1 12 10 1v-13l5-1h5l1 1v37h-10l-1-2v-11h-10l-1 13h-10l-1-1z" fill="#685567" />
              <path transform="translate(1580,987)" d="m0 0h10l5 2 4 5v2l9-9h9l3 2-11 16 2 5 8 12v3h-11l-6-7-4 1-4 5-2 1h-11l2-5 8-12-1-5-10-14z" fill="#685566" />
              <path transform="translate(190,987)" d="m0 0h14l6 4 4 5v5l-4 3h-5l-5-5-7 1-3 3v6l2 4 2 1h6l5-5 6 1 4 3-1 5-7 6-5 2h-11l-6-4-6-7-2-10 3-9 6-7z" fill="#685565" />
              <path transform="translate(412,987)" d="m0 0h12l5 3 5 6 1 4-5 4-5-1-6-4-6 1-3 3-1 4 3 6 2 1h7l5-5 4 1 5 3-1 5-7 6-5 2h-10l-6-3-7-8-1-3v-12l5-8 6-4z" fill="#685566" />
              <path transform="translate(584,872)" d="m0 0h27l15 26 7 10 24 1 5 9v3h-28l-7-8-15-26-3-3h-25l-1-4z" fill="#7F56E9" />
              <path transform="translate(1320,506)" d="m0 0h48v30h-191v-1l169-1 1-2 3-1-3-3-1 2v-2h-9v-2h-119v-1h138l1-16h-38z" fill="#614B7C" />
              <path transform="translate(656,987)" d="m0 0h19l7 1 4 5 1 2v12l-4 5-7 2h-10v11h-10l-1-4v-33zm12 10-2 4 1 2h8l1-4-3-2z" fill="#685566" />
              <path transform="translate(1401,987)" d="m0 0h23l3 1v9l-2 1h-14v2l12 1 1 1v9h-14l1 4h15l1 2v7l-1 1h-24l-1-1-1-36z" fill="#685566" />
              <path transform="translate(1726,848)" d="m0 0 4 4 8 12 14 20 11 16 7 8h30v12l-1 1h-29l-7-8-21-32-13-20-3-6z" fill="#7F56E8" />
              <path transform="translate(1799,986)" d="m0 0 4 1 4 6 11 27v5h-9l-4-5v-2h-8l-4 4-2 3h-10l2-9 8-19 5-9z" fill="#685564" />
              <path transform="translate(94,987)" d="m0 0h7l3 5 10 23 2 6v4h-9l-5-7-9 1-4 6h-10l1-7 12-28z" fill="#685564" />
              <path transform="translate(1674,987)" d="m0 0h7l3 4 12 29 1 5h-10l-6-7-8 1-4 6h-8l1-8 5-17 6-12z" fill="#685564" />
              <path transform="translate(899,987)" d="m0 0h12l6 4 4 6-1 5-3 2-5-1-5-4h-6l-5 5 1 8 3 2h7l5-5 2-1 7 4v5l-5 5-5 3-3 1h-8l-5-3-6-7-2-5v-9l5-10z" fill="#685566" />
              <path transform="translate(1347,987)" d="m0 0h10l4 9 3 9h3l3-9 4-9h11l-1 6-8 20-6 11-5 2-5-4-7-15-6-16z" fill="#685565" />
              <path transform="translate(798,987)" d="m0 0h27l1 4-1 7h-16v2h11l3 1v9l-1 1-14 1-1 12-1 1h-9v-37z" fill="#685566" />
              <path transform="translate(1383,836)" d="m0 0 3 3 5 8 7 7 11 5 25 7 5 2 1 2v6l-2 2-11-1-20-5-10-6-6-5-6-9-2-5z" fill="#8057E8" />
              <path transform="translate(948,335)" d="m0 0 6 5 2 3 5 1 5 10-1 6-4-1v8l3 6 3 2-1 5-15 9h-3z" fill="#5D4275" />
              <path transform="translate(306,987)" d="m0 0h32l1 1-1 9-1 1h-9v26l-1 1h-10l-1-26-9-2-1-1z" fill="#685567" />
              <path transform="translate(1489,987)" d="m0 0h32v9l-4 2h-7v27h-10l-1-3v-24l-10-1-1-1v-8z" fill="#685567" />
              <path transform="translate(1706,987)" d="m0 0h31l1 5-1 5-3 1h-7v26l-1 1h-9l-1-1v-26h-7l-4-1v-9z" fill="#685567" />
              <path transform="translate(1863,987)" d="m0 0h32v10l-2 1h-9l-1 27h-10l-1-14v-12l-10-2v-9z" fill="#685566" />
              <path transform="translate(450,987)" d="m0 0h33v10l-11 1v26l-4 1-6-4-1-1v-22l-10-1-1-1z" fill="#685568" />
              <path transform="translate(1651,824)" d="m0 0 4 3-1 6-6 4-4 1h-15l-15-1-11 2-9 5-6 9-2 4-1-4 3-13 6-8 8-5 6-2h11l10 4 6 6 5-1 8-7z" fill="#7E55E7" />
              <path transform="translate(938,987)" d="m0 0h31l1 1v9l-11 1v26l-1 1h-8l-1-1-1-25-10-2z" fill="#685566" />
              <path transform="translate(1158,826)" d="m0 0h29l9 3 6 7 2 8v11l-2-4-5-8-4-3-8-1-26-1-1-1z" fill="#7F56E9" />
              <path transform="translate(1292,864)" d="m0 0h43l1 1v10l-1 1h-43l-1-1v-10z" fill="#7F56EA" />
              <path transform="translate(882,863)" d="m0 0 2 1-1 12h-43l-1-1v-10l1-1z" fill="#7E55EA" />
              <path transform="translate(509,863)" d="m0 0h2v12l-1 1h-43v-11l5-1z" fill="#7F55EA" />
              <path transform="translate(519,825)" d="m0 0h6v12l-2 1h-8l-5-3-42-1-1-1v-7z" fill="#7E55E8" />
              <path transform="translate(584,826)" d="m0 0h41l2 2 1 8-1 2h-43z" fill="#7E55E9" />
              <path transform="translate(1342,825)" d="m0 0h8l-1 11-1 1h-12v-2l-44-1-1-1v-7z" fill="#7F55E8" />
              <path transform="translate(883,825)" d="m0 0h12v12l-1 1h-9l-2-2-5-1-38-1-1-1v-6l1-1z" fill="#7E55E7" />
              <path transform="translate(280,987)" d="m0 0h10l1 1v17l-1 20h-10l-1-1v-36z" fill="#685567" />
              <path transform="translate(775,825)" d="m0 0h6v12l-2 1h-33l-1-3v-8l1-1z" fill="#7F56E7" />
              <path transform="translate(681,825)" d="m0 0h14l21 1v12h-33l-2-5z" fill="#7F56E8" />
              <path transform="translate(500,987)" d="m0 0h10v38h-10l-1-2v-35z" fill="#685568" />
              <path transform="translate(925,810)" d="m0 0 7 2 12 14 9 11 9 12-1 4-4 2-9-11-12-14-9-10-6-7v-2z" fill="#7F56E7" />
              <path transform="translate(987,987)" d="m0 0h9l1 1v35l-1 2h-9l-1-2v-35z" fill="#68536A" />
              <path transform="translate(1332,527)" d="m0 0h8l10 1 1 3-5 3-11 1h-22l-36-1 1-4 6-2 10 1h3 13l11-1z" fill="#5D3269" />
              <path transform="translate(1184,528)" d="m0 0h37l12 2 5-1 12-1 11 1 3 3v2h-81z" fill="#5D3269" />
              <path transform="translate(717,908)" d="m0 0h28v13h-27l-1-1z" fill="#8158E9" />
              <path transform="translate(1498,908)" d="m0 0 30 1-1 11-1 1h-27z" fill="#8057E9" />
              <path transform="translate(1697,908)" d="m0 0 29 1-1 11-1 1h-26l-1-1-1-11z" fill="#7F56E9" />
              <path transform="translate(1411,825)" d="m0 0h16l4 1 1 7h17l11 1 1 1v10l-5-1-17-6-13-4-13-3-2-2z" fill="#7D55E5" />
              <path transform="translate(554,909)" d="m0 0h30l-1 12h-27l-2-7z" fill="#8056EA" />
              <path transform="translate(1034,810)" d="m0 0 5 1-2 4-13 16-7 9-11 15-4-4 2-5 16-21 9-12z" fill="#7E55E9" />
              <path transform="translate(1911,987)" d="m0 0h8l1 1-1 37h-8z" fill="#685565" />
              <path transform="translate(1282,339)" d="m0 0 4 2v73h-4z" fill="#665484" />
              <path transform="translate(1608,866)" d="m0 0 29 1-2 5-5 4-8 3h-13l-1-1z" fill="#7F56EA" />
              <path transform="translate(1440,583)" d="m0 0 3 1-8 4-8 2-2-5-24 1-14 1h-23l-1-1-70-1v-1z" fill="#5D4275" />
              <path transform="translate(654,842)" d="m0 0 2 1v9l-3 9-6 10-4 2-3-4v-5l8-9z" fill="#835DE4" />
              <path transform="translate(1042,446)" d="m0 0 3 2-1 27-1 109h-1z" fill="#685988" />
              <path transform="translate(654,583)" d="m0 0 88 1v1l-28 1h-42l-2 2 1 2-11-3-6-3z" fill="#5D4275" />
              <path transform="translate(868,525)" d="m0 0h39l1 1v9l-1 1h-48v-1l48-1-1-6h-17v-2h-21z" fill="#645282" />
              <path transform="translate(1116,460)" d="m0 0h1l1 17 2 5-1 3-1 5-1 88h-1z" fill="#685988" />
              <path transform="translate(1121,1014)" d="m0 0 6 1 1 1v8l-5 5-4-1-1-1v-10z" fill="#685565" />
              <path transform="translate(732,546)" d="m0 0h11l-1 2-4 2-1 10-1 3 1 4-2 1v3h-3z" fill="#5E4376" />
              <path transform="translate(1285,386)" d="m0 0h1v28h-4v-27z" fill="#675887" />
              <path transform="translate(954,474)" d="m0 0 2 4 1 3-1 1-1 82h-1z" fill="#685988" />
              <path transform="translate(965,357)" d="m0 0h2v18l-4-2-3-6v-8h4z" fill="#675887" />
              <path transform="translate(1538,987)" d="m0 0h29v7l-2-4-2-1h-24l-1 34h-1v-35z" fill="#685988" />
              <path transform="translate(1130,812)" d="m0 0 2 2-1 71h-1z" fill="#FEFEFE" />
              <path transform="translate(654,583)" d="m0 0 20 1-4 4 1 2-11-3-6-3z" fill="#5F4679" />
              <path transform="translate(1440,583)" d="m0 0 3 1-8 4-8 2-2-3v-3z" fill="#5F4779" />
              <path transform="translate(935,563)" d="m0 0h1v11l-2 3-5-5v-3h2l-1-3h4z" fill="#5D3269" />
              <path transform="translate(757,525)" d="m0 0h28l4 2-10 2-8-1v-2h-14z" fill="#614B7C" />
              <path transform="translate(2e3 997)" d="m0 0h16v1l-8 1 4 2-6 2h-6l-1-3z" fill="#685988" />
              <path transform="translate(948,368)" d="m0 0h1l1 12 2 5 2 2-3 2h-3z" fill="#685988" />
              <path transform="translate(1282,403)" d="m0 0 4 1v10h-4z" fill="#5D4275" />
              <path transform="translate(1771,812)" d="m0 0h2l-1 35h-1z" fill="#FEFEFE" />
              <path transform="translate(935,497)" d="m0 0h1v17l-2-3-1-2v-7z" fill="#685988" />
              <path transform="translate(2e3 1011)" d="m0 0 2 2 12 1v1l-5 1h-9l-2-4z" fill="#685988" />
              <path transform="translate(883,850)" d="m0 0h1v11h-1z" fill="#7456BE" />
              <path transform="translate(1573,986)" d="m0 0 2 1z" fill="#685988" />
              <path transform="translate(510,852)" d="m0 0" fill="#685988" />
            </svg>

          </a>
        </div>
        <div>&copy; 2002</div>
      </section>
    </>
  );
}

export default App;
