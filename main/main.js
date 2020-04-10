//https://labs.bible.org/api/?passage=random&type=json 

//https://cors-anywhere.herokuapp.com/labs.bible.org/api/?passage=random
function start() {


  fetch('https://cors-anywhere.herokuapp.com/https://labs.bible.org/api/?passage=random&type=json') // rejects
      .then(function(response) {
          if (response.status !== 200) {


              // make the promise be rejected if we didn't get a 200 response


              // Sweet Alert

              Swal.fire({
                  icon: 'error',
                  title: 'Patawad',
                  text: 'Something went wrong! Please try again later',
                  showConfirmButton: false,
                  timer: 7000,



              });



              // throw new Error("Not 200 response")

          } else {




              fetch('https://cors-anywhere.herokuapp.com/https://labs.bible.org/api/?passage=random&type=json')
                  .then(response => response.json())
                  .then(data => {



                          var a = data[0].text;
                          var b = document.getElementById("content");
                          b.innerHTML = (a);


                          var c = data[0].bookname; // bookname 
                          var d = data[0].chapter; // chapter
                          var e = data[0].verse; // verse


                          var f = document.getElementById("pahina");
                          f.innerHTML = ("&#8220" + "&nbsp" + c + "&nbsp" + d + ':' + e + "	&#8221");




                      }


                  )
          }
      }).catch(function(err) {
          Swal.fire({
              icon: 'error',
              title: 'Patawad',
              text: 'Something went wrong! Please try again later',
              showConfirmButton: false,
              timer: 7000,



          });

      });

}