﻿*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
}
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
}
.quotes {
  width: 80vw;
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 2;
  box-sizing: border-box;
}
.quotes .box {
  position: relative;
  width: 25vw;
  height: 50vh;
  min-height: 320px;
  background: #f2f2f2;
  overflow: hidden;
  transition: all 0.5s ease-in;
  z-index: 2;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: -10px 25px 50px rgba(0, 0, 0, 0.3);
}
.quotes .box::before {
  content: '\201C';
  position: absolute;
  top: -20px;
  left: 5px;
  width: 100%;
  height: 100%;
  font-size: 120px;
  opacity: 0.2;
  background: transparent;
  pointer-events: none;
}
.quotes .box::after {
  content: '\201D';
  position: absolute;
  bottom: -10%;
  right: 5%;
  font-size: 120px;
  opacity: 0.2;
  background: transparent;
  filter: invert(1);
  pointer-events: none;
}
.quotes .box p {
  margin: 0;
  padding: 10px;
  font-size: 1.2rem;
}

.quotes .box h2 {
  position: absolute;
  margin: 0;
  padding: 0;
  bottom: 10%;
  right: 10%;
  font-size: 1.5rem;
}
.quotes .box:hover {
  color: #f2f2f2;
  box-shadow: 20px 50px 100px rgba(0, 0, 0, 0.5);
}
.quotes .bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  transition: all 0.5s ease-in;
  pointer-events: none;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.quotes .box.box1:hover,
.quotes .box.box1:hover~.bg {
  opacity: 1;
  background: #e2a9e5;
background: -moz-linear-gradient(-45deg, #e2a9e5 15%, #2b94e5 100%);
background: -webkit-linear-gradient(-45deg, #e2a9e5 15%,#2b94e5 100%);
background: linear-gradient(135deg, #e2a9e5 15%,#2b94e5 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2a9e5', endColorstr='#2b94e5',GradientType=1 );
}
.quotes .box.box2:hover,
.quotes .box.box2:hover~.bg {
  opacity: 1;
  background: #632c65;
background: -moz-linear-gradient(-45deg, #632c65 15%, #56a5e2 100%);
background: -webkit-linear-gradient(-45deg, #632c65 15%,#56a5e2 100%);
background: linear-gradient(135deg, #632c65 15%,#56a5e2 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#632c65', endColorstr='#56a5e2',GradientType=1 );
}

.quotes .box.box3:hover,
.quotes .box.box3:hover~.bg {
  opacity: 1;
  background: #4b384c;
background: -moz-linear-gradient(-45deg, #4b384c 15%, #da5de2 100%);
background: -webkit-linear-gradient(-45deg, #4b384c 15%,#da5de2 100%);
background: linear-gradient(135deg, #4b384c 15%,#da5de2 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4b384c', endColorstr='#da5de2',GradientType=1 );
}

@media (max-width:767px){
  .quotes{
      width:100%;
      padding:20px; 
  }
  .quotes .box {
      width:100%;
      margin-bottom: 20px;
  }
}


