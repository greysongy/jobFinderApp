var path = require("path");

var peopleData = require("../data/people");
var companyData = require("../data/companies");

module.exports = function(app) {

    // app.get("/api/people", function(req, res) {
        
    // }

    app.get("/api/people", function(req, res) {
        console.log("This function ran");
        res.json(peopleData);
    })
    // maybe console.log the request to see exactly what it is
    app.post("/api/people", function(req, res) {
        // console.log("Request Body");
        // console.log(req.body);
        peopleData = [];
        peopleData.push(req.body);
        var companyMatch;
        var topCompanyScore = Infinity;
        for(var i = 0; i < companyData.length; i++) {
            var totalDifference = 0;
            // console.log("People Data");
            //     console.log(peopleData);
            //     console.log("Company Data");
            //     console.log(companyData);
                console.log("i " + i);
                console.log(companyData[i]);
            for(var j = 0; j < 10; j++) {
                console.log("j " + j);
                totalDifference += Math.abs(companyData[i].scores[j] - peopleData[0].scores[j]);
            }
            if(totalDifference < topCompanyScore) {
                companyMatch = companyData[i];
                topCompanyScore = totalDifference;
            }
        }
        console.log("Company Match");
        console.log(companyMatch);
        // console.log("Response");
        // console.log(res);
        res.json(companyMatch);
        //do I need something with res.json
    });

    // app.get("/api/people", function(req, res) {
    //     console.log("This function ran");
    //     res.json(peopleData);
    // })

};