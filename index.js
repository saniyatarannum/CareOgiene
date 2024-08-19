const { initializeApp, cert } = require('firebase-admin/app');

const { getFirestore} = require('firebase-admin/firestore');



var serviceAccount = require("./key.json");



initializeApp({

  credential: cert(serviceAccount)

});



const db = getFirestore();



var express = require('express')  

var app = express()  



app.set("view engine", "ejs");

  

app.get('/home', (req, res) => {   

res.render("home")  

});

app.get('/signup', (req, res) => {  

res.render("signup");

});

app.get('/login', (req, res) => {  

res.render("login");

});

app.get('/flipsignup', (req, res) => {  

res.render("flipsignup");

});

app.get('/fliplogin', (req, res) => {  

res.render("fliplogin");

});

app.get('/page', (req, res) => {  

res.render("page");

});

app.get('/logout', (req, res) => {  

    res.render("home");

    });

    app.get('/heightf', (req, res) => {  

        res.render("heightf");

    });

    app.get('/lossf', (req, res) => {  

        res.render("lossf");

    });

    app.get('/gainf', (req, res) => {  

        res.render("gainf");

        });

    app.get('/healthtips', (req, res) => {  

        res.render("healthtips");

    });

    app.get('/exercise', (req, res) => {  

        res.render("exercise");

    });

    app.get('/brain', (req, res) => {  

        res.render("brain");

        });

    app.get('/heart', (req, res) => {  

        res.render("heart");

    });

    app.get('/lungs', (req, res) => {  

        res.render("lungs");

    });

    app.get('/liver', (req, res) => {  

        res.render("liver");

    });

    app.get('/stomach', (req, res) => {  

        res.render("stomach");

     });

     app.get('/intestines', (req, res) => {  

        res.render("intestines");

    });

    app.get('/kidneys', (req, res) => {  

        res.render("kidneys");

        });

    app.get('/eyes', (req, res) => {  

        res.render("eyes");

    });

    app.get('/imm', (req, res) => {  

        res.render("imm");

    });

    app.get('/ner', (req, res) => {  

        res.render("ner");

    });

    app.get('/mus', (req, res) => {  

        res.render("mus");

    });

    app.get('/ske', (req, res) => {  

        res.render("ske");

    });

    app.get('/dandruff', (req, res) => {  

        res.render("dandruff");

    });

    app.get('/hairfall', (req, res) => {  

         res.render("hairfall");

    });

    app.get('/dryhair', (req, res) => {  

         res.render("dryhair");

    });

    app.get('/oilyscalp', (req, res) => {  

        res.render("oilyscalp");

    });

    app.get('/splitends', (req, res) => {  

        res.render("splitends");

    });

    app.get('/frizzy', (req, res) => {  

        res.render("frizzy");

    });

    app.get('/greying', (req, res) => {  

        res.render("greying");

    });

    app.get('/hffood', (req, res) => {  

        res.render("hffood");

    });

    app.get('/oilyskin', (req, res) => {  

        res.render("oilyskin");

    });

    app.get('/dryskin', (req, res) => {  

        res.render("dryskin");

    });

    app.get('/combination', (req, res) => {  

        res.render("combination");

    });

    app.get('/sensitive', (req, res) => {  

        res.render("sensitive");

    });

    app.get('/circles', (req, res) => {  

        res.render("circles");

    });

    app.get('/spots', (req, res) => {  

        res.render("spots");

    });

    app.get('/acne', (req, res) => {  

        res.render("acne");

    });

    app.get('/pores', (req, res) => {  

        res.render("pores");

    });  

    app.get('/wrinkles', (req, res) => {

        res.render("wrinkles");

    });

    app.get('/antiage', (req, res) => {  

        res.render("antiage");

    });

    app.get('/lips', (req, res) => {  

        res.render("lips");

    });

    app.get('/underarms', (req, res) => {  

        res.render("underarms");

    }); 

    app.get('/hands', (req, res) => {  

       res.render("hands");

    }); 

    app.get('/foot', (req, res) => {  

        res.render("foot");

    });

    app.get('/bodytips', (req, res) => {  

        res.render("bodytips");

    });

    app.get('/fhtips', (req, res) => {  

        res.render("fhtips");

        });

    app.get('/hair', (req, res) => {  

        res.render("hair");

    });

    app.get('/mornskin', (req, res) => {  

        res.render("mornskin");

    }); 

    app.get('/nightskin', (req, res) => {  

        res.render("nightskin");

    });  

    app.get('/winter', (req, res) => {  

        res.render("winter");

    });

    app.get('/cou', (req, res) => {  

        res.render("cou");

    });   





        app.get('/signupSubmit', function (req, res) {  

            const name = req.query.name;

            const email = req.query.email;

            const password = req.query.password;

            db.collection("proj").add({

                name: name ,

                email: email,

                password: password,

            })

            .then(()=>{

                res.render("page")

            });

            });

            app.get('/loginSubmit', function (req, res) {  

                const email = req.query.em;

                const password = req.query.pwd;

                db.collection("proj")

                .where("email", "==", email)

                .where("password", "==", password)

                .get()

                .then((docs) => {

                    if(docs.size>0){

                        res.render("page");

                    }

                    else{

                        res.send("login failed")

                    }

                });

                }); 

  

app.listen(3000, function () {  

console.log('Example app listening on port 3000!')  

})
