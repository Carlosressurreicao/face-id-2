<body> <script src="https://cdn.faceio.net/fio.js"></script> <script src="./index.js"></script> </body>
  getElementbyID
  enroll.addEventListener("click", async () => { let response = await faceio.enroll({ locale: "auto",
                                          payload: { email: "example@gmail.com", pin: "12345", }, }); 
                                         console.log(` Unique Facial ID: ${response.facialId} Enrollment 
  Date: ${response.timestamp} 
  Gender: ${response.details.gender} 
  Age Approximation: ${response.details.age}`); });
authenticate.addEventListener("click", async () => { let response = await faceio.authenticate({ locale: "auto", }); 
                      console.log(` Unique Facial ID: ${response.facialId} PayLoad: ${response.payload} `); });
