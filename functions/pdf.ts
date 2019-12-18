// @ts-ignore
import middy from "middy";
import wkhtmltopdf from "wkhtmltopdf";
import {
  cors,
  doNotWaitForEmptyEventLoop,
  httpErrorHandler
} from "middy/middlewares";

let fs = require("fs");
let path = require("path");



let data = "";

console.log("#### Test", path.resolve("./hello.html"));

fs.readFile(__dirname +'/../hello.html', function (err, data) {
    if (err) throw err;
    data = data;
});
console.log("#### Test", data);
process.env["PATH"] =
  process.env["PATH"] + ":" + process.env["LAMBDA_TASK_ROOT"];

const getPDFStream = async (): Promise<any> => {
  const stream: any = wkhtmltopdf(`<!DOCTYPE html>
<html>  
    <head>
        <meta charset="utf-8">
        <title>PDF Result Template</title>
        <style>
            body sty {
                font-family: unset !important;
                background: red;
            }
            /* .container {
                max-width: 1250px;
            } */
            p, span {
                margin-bottom: 8px !important;
                font-size: 20px;
            }
            .header{
                padding: 50px 0;
            }
            .text-center{
                text-align: center;
            }
            .text-right{
                text-align: right;
            }
            .jobs, .color_code, .try_in, .box_checklist{
                margin-top: 25px;
            }
            .empty_tooth_dlagram, .impression_picture, .color_diagram, .color_diagram2, .color_diagram3{
                border: 1px solid #ccc;
                width: 100%;
                height: 400px;
                margin-bottom: 30px;
            }
            .empty_tooth_dlagrams, .impression_pictures, .color_diagrams, .color_diagrams2, .color_diagrams3{
                margin-bottom: 30px;
            }
        </style>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <body>
        <div class="container">
            <div class="row header"  style="max-width: 1250px">
                <div class="col-6" style="-webkit-box-flex: 0; width: 50%; float: left; background: red;">
                    <div class="text_logo">
                        <p><b> Prescription SheetImpression </b></p>
                    </div>
                </div>
                <div class="col-3" style="-webkit-box-flex: 0; width: 25%; float: left; background: yellow;">
                    <div class="pic_logo">
                        <img src="./img/logo.png" alt="logo"/>
                    </div>
                </div>
                <div class="col-3 text-right" style="-webkit-box-flex: 0; width: 25%; float: left; background: blue;">
                    <div class="number_page">
                        <p><b> Page 1/1 </b></p>
                    </div>
                </div>
            </div>

            <div class="row body">
                <div class="col-8 text_pdf" style="-webkit-box-flex: 0; -ms-flex: 0 0  66.666667%; flex: 0 0  66.666667%; max-width:  66.666667%; float: left;">
                    <div class="title_data">
                        <p><b>Creation Date:</b> 09/09/19</p>
                        <p><b>Estimated Delivery Date:</b> Not specified</p>
                        <p><b>Office Name:</b>  CrownID Dental Clinic</p>
                        <p><b>Doctor:</b>  John Conor</p>
                        <p><b>Assistant:</b>  Sarah Conor</p>
                        <p><b>Patient Ref:</b>  GER KAC</p>
                        <p><b>Age:</b>  45</p>
                        <p><b>Sex:</b>  M</p>
                        <p><b>Internal ID:</b> 723128io13i12y3</p>
                        <p><b>Registration bite taken</b></p>
                        <span> 
                            Yes, it is a bite tray but we include a registration record for accuracy. Do not use the tray position
                        </span>
                    </div>

                    <div class="jobs">
                        <p><b>Jobs</b></p>
                        <p><u>Bridge or Splinted Crown(s)</u></p>
                        <p>Tooth: #1, #4, #5, #7</p>
                        <p>Tooth to be replaced: #6, #8</p>
                        <p>Material: Metal-Ceramic</p>
                        <span>Note: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem 
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                        <p>Material Option: Cobalt-Chrome</p>
                        <span>Note: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                        <p>Prosthetic Margin: 1mm metal furcation (perio)</p>
                        <p>Ceramic Facial Margin: #4, #5</p>
                        <span>Note: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                        
                        <br><br>
                        <p><u>Bridge or Splinted Crown(s)</u></p>
                        <p>Tooth: #1, #4, #5, #7</p>
                        <p>Tooth to be replaced: #6, #8</p>
                        <p>Material: Metal-Ceramic</p>
                        <span>Note: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                        <p>Material Option: Cobalt-Chrome</p>
                        <span>Note: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                        <p>Prosthetic Margin: 1mm metal furcation (perio)</p>
                        <p>Ceramic Facial Margin: #4, #5</p>
                        <span>Note: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>

                        <br><br>
                        <p><u>Bridge or Splinted Crown(s)</u></p>
                        <p>Tooth: #1, #4, #5, #7</p>
                        <p>Tooth to be replaced: #6, #8</p>
                        <p>Material: Metal-Ceramic</p>
                        <span>Note: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                        <p>Material Option: Cobalt-Chrome</p>
                        <span>Note: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                        <p>Prosthetic Margin: 1mm metal furcation (perio)</p>
                        <p>Ceramic Facial Margin: #4, #5</p>
                        <span>Note: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>

                        <br><br>
                        <p><u>Bridge or Splinted Crown(s)</u></p>
                        <p>Tooth: #1, #4, #5, #7</p>
                        <p>Tooth to be replaced: #6, #8</p>
                        <p>Material: Metal-Ceramic</p>
                        <span>Note: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                        <p>Material Option: Cobalt-Chrome</p>
                        <span>Note: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                        <p>Prosthetic Margin: 1mm metal furcation (perio)</p>
                        <p>Ceramic Facial Margin: #4, #5</p>
                        <span>Note: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                    </div>

                    <div class="color_code">
                        <p><b>Color Code</b></p>
                        <p>Neck: A1.5</p>
                        <p>Body: D3.5</p>
                    </div>

                    <div class="try_in">
                        <p><b>Try-In</b></p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                    </div>
                    
                    <div class="box_checklist">
                        <p><b>Box Checklist</b></p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                        <p>TEXT</p>
                    </div>
                </div>
                <div class="col-4 pic_pdf"  style="-webkit-box-flex: 0; -ms-flex: 0 0 33.333333%; flex: 0 0 33.333333%; max-width: 33.333333%; float: left;">
                    <div class="empty_tooth_dlagrams">
                        <p>Cempty Tooth Dlagram</p>
                        <p class="empty_tooth_dlagram"><img src="" alt=""/></p>
                    </div>
                    <div class="impression_pictures">
                        <p>Impression Picture</p>
                        <p class="impression_picture"><img src="" alt=""/></p>
                    </div>
                    <div class="color_diagrams">
                        <p>Color Diagram</p>
                        <p class="color_diagram"><img src="" alt=""/></p>
                    </div>
                    <div class="color_diagrams2">
                        <p>Color Diagram (2/3)</p>
                        <p class="color_diagram2"><img src="" alt=""/></p>
                    </div>
                    <div class="color_diagrams3">
                        <p>Color Diagram (3/3)</p>
                        <p class="color_diagram3"><img src="" alt=""/></p>
                    </div>
                </div>
            </div>

            <div class="row footer">
                <!-- <div class="col-6"> -->
                    <div class="col-3">
                        <hr/>
                        <p class="text-center">Signed</p>
                    </div>
                    <div class="col-3">
                        <hr/>
                        <p class="text-center">Date</p>
                    </div>
                <!-- </div> -->
            </div>
        </div>
    </body>
</html>`);
  // const stream: any = wkhtmltopdf(data);
  // const stream: any = wkhtmltopdf("<h1>hello world</h1>");
  const chunks = [];
  stream.on("data", chunk => {
    chunks.push(chunk);
  });
  return new Promise((resolve, reject) => {
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", reject);
  });
};
const handler = async event => {
  try {
    const pdfStream = await getPDFStream();
    return {
      statusCode: 200,
      isBase64Encoded: true,
      headers: {
        "Content-type": "application/pdf",
        "accept-ranges": "bytes"
      },
      body: pdfStream.toString("base64")
    };
  } catch (error) {
    console.log(error);
  }
};

export const generate = middy(handler)
  .use(cors())
  .use(doNotWaitForEmptyEventLoop())
  .use(httpErrorHandler());
