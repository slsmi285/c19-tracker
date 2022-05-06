const mongoose = require("mongoose");
const db = require("../models");

// This file empties the InfoState collection and inserts the InfoStateSeed below


mongoose.connect("mongodb+srv://slsmi285:Florida89!@cluster0.upwzp.mongodb.net/project0?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Mongoose is Connected");
    }
);

const InfoStateSeed = [
    {
      stateinfo: "Alabama",
      restrictions: "None",
      masks: "optional",
      href: "https://alabama.travel/my-trip/staying-safe"
    },
    {
        stateinfo: "Alaska",
        restrictions: "Quarantine with testing exceptions",
        masks: "optional",
        href: "https://covid19.alaska.gov/travelers/"
      },
      {
        stateinfo: "Arizona",
        restrictions: "None",
        masks: "optional",
        href: "https://tourism.az.gov/covid-19-updates-2/"
      },
      {
        stateinfo: "Arkansas",
        restrictions: "None",
        masks: "optional",
        href: "https://www.arkansas.com/travel-advisory/covid-19"
      },
      {
        stateinfo: "California",
        restrictions: "None",
        masks: "optional",
        href: "https://www.visitcalifornia.com/latest-covid-19-coronavirus"
      },
      {
        stateinfo: "Colorado",
        restrictions: "None",
        masks: "optional",
        href: "https://covid19.colorado.gov/prepare-protect-yourself/prevent-the-spread/travel"
      },
      {
        stateinfo: "Conneticut",
        restrictions: "Quarantine",
        masks: "optional",
        href: "https://portal.ct.gov/Coronavirus/Covid-19-Knowledge-Base/Travel-In-or-Out-of-CT"
      },
      {
        stateinfo: "Delaware",
        restrictions: "None",
        masks: "optional",
        href: "https://www.visitdelaware.com/industry/covid-19-in-delaware/"
      },
      {
        stateinfo: "Florida",
        restrictions: "None",
        masks: "optional",
        href: "https://floridahealthcovid19.gov/travelers/"
      },
      {
        stateinfo: "Georgia",
        restrictions: "None",
        masks: "optional",
        href: "https://dph.georgia.gov/covid-19-travel"
      },
      {
        stateinfo: "Hawaii",
        restrictions: "Quarantine",
        masks: "optional",
        href: "https://www.hawaiitourismauthority.org/news/alerts/covid-19-novel-coronavirus/"
      },
      {
        stateinfo: "Idaho",
        restrictions: "Quarantine for certain cities",
        masks: "optional",
        href: "https://visitidaho.org/covid-19-travel-alert/"
      },
      {
        stateinfo: "Illinois",
        restrictions: "Quarantine for certain cities",
        masks: "optional",
        href: "https://www.dph.illinois.gov/topics-services/diseases-and-conditions/diseases-a-z-list/coronavirus/travel-guidance"
      },
      {
        stateinfo: "Indiana",
        restrictions: "None",
        masks: "optional",
        href: "https://www.coronavirus.in.gov/"
      },
      {
        stateinfo: "Iowa",
        restrictions: "None",
        masks: "optional",
        href: "https://www.traveliowa.com/aspx/general/dynamicpage.aspx?id=204"
      },
      {
        stateinfo: "Kansas",
        restrictions: "None",
        masks: "optional",
        href: "https://www.coronavirus.kdheks.gov/175/Travel-Exposure-Related-Isolation-Quaran"
      },
      {
        stateinfo: "Kentucky",
        restrictions: "Quarantine",
        masks: "optional",
        href: "https://governor.ky.gov/covid19"
      },
      {
        stateinfo: "Louisiana",
        restrictions: "None",
        masks: "optional",
        href: "https://louisianatravelassociation.org/covid-19-resources"
      },
      {
        stateinfo: "Maine",
        restrictions: "Quarantine with testing exceptions",
        masks: "optional",
        href: "https://www.maine.gov/covid19/restartingmaine/keepmainehealthy/faqs"
      },
      {
        stateinfo: "Maryland",
        restrictions: "Health advisory",
        masks: "optional",
        href: "https://www.visitmaryland.org/article/travel-alerts"
      },
      {
        stateinfo: "Massachusetts",
        restrictions: "Quarantine with testing exceptions",
        masks: "optional",
        href: "https://www.mass.gov/info-details/covid-19-updates-and-information"
      },
      {
        stateinfo: "Michigan",
        restrictions: "None",
        masks: "optional",
        href: "https://www.michigan.gov/coronavirus/"
      },
      {
        stateinfo: "Minnesota",
        restrictions: "None",
        masks: "optional",
        href: "https://visitmississippi.org/covid-19-travel-alert/"
      },
      {
        stateinfo: "Mississippi",
        restrictions: "None",
        masks: "optional",
        href: "https://visitmississippi.org/covid-19-travel-alert/"
      },
      {
        stateinfo: "Missouri",
        restrictions: "None",
        masks: "optional",
        href: "https://www.visitmo.com/travel-updates"
      },
      {
        stateinfo: "Montana",
        restrictions: "None",
        masks: "optional",
        href: "https://www.visitmt.com/travel-alerts.html"
      },
      {
        stateinfo: "Nebraska",
        restrictions: "None",
        masks: "optional",
        href: "http://dhhs.ne.gov/Pages/COVID-19-Traveler-Recommendations.aspx"
      },
      {
        stateinfo: "Nevada",
        restrictions: "None",
        masks: "optional",
        href: "https://nvhealthresponse.nv.gov/info/travelers-visitors/"
      },
      {
        stateinfo: "New Hampshire",
        restrictions: "Quarantine",
        masks: "optional",
        href: "https://www.covidguidance.nh.gov/out-state-visitors"
      },
      {
        stateinfo: "New Jersey",
        restrictions: "Health advisory",
        masks: "optional",
        href: "https://covid19.nj.gov/faqs/nj-information/general-public/which-states-are-on-the-travel-advisory-list-are-there-travel-restrictions-to-or-from-new-jersey"
      },
      {
        stateinfo: "New Mexico",
        restrictions: "Quarantine",
        masks: "optional",
        href: "https://www.newmexico.org/covid-19-traveler-information/"
      },
      {
        stateinfo: "New York",
        restrictions: "Quarantine",
        masks: "optional",
        href: "https://coronavirus.health.ny.gov/covid-19-travel-advisory"
      },
      {
        stateinfo: "North Carolina",
        restrictions: "None",
        masks: "optional",
        href: "https://www.nc.gov/covid-19/covid-19-travel-resources"
      },
      {
        stateinfo: "North Dakota",
        restrictions: "None",
        masks: "optional",
        href: "https://www.health.nd.gov/diseases-conditions/coronavirus/travel"
      },
      {
        stateinfo: "Ohio",
        restrictions: "Health advisory",
        masks: "optional",
        href: "https://coronavirus.ohio.gov/wps/portal/gov/covid-19/home"
      },
      {
        stateinfo: "Oklahoma",
        restrictions: "None",
        masks: "optional",
        href: "https://coronavirus.health.ok.gov/travel"
      },
      {
        stateinfo: "Oregon",
        restrictions: "None",
        masks: "optional",
        href: "https://traveloregon.com/travel-alerts/"
      },
      {
        stateinfo: "Pennsylvania",
        restrictions: "Health advisory",
        masks: "optional",
        href: "https://www.health.pa.gov/topics/disease/coronavirus/Pages/Travelers.aspx"
      },
      {
        stateinfo: "Rhode Island",
        restrictions: "Quarantine with testing exceptions",
        masks: "optional",
        href: "https://health.ri.gov/covid/"
      },
      {
        stateinfo: "South Carolina",
        restrictions: "Health advisory",
        masks: "optional",
        href: "https://scdhec.gov/infectious-diseases/viruses/coronavirus-disease-2019-covid-19/travelers-covid-19"
      },
      {
        stateinfo: "South Dakota",
        restrictions: "None",
        masks: "optional",
        href: "https://www.travelsouthdakota.com/coronavirus-covid-19"
      },
      {
        stateinfo: "Tennessee",
        restrictions: "None",
        masks: "optional",
        href: "https://www.tnvacation.com/articles/tennessee-travel-amid-coronavirus"
      },
      {
        stateinfo: "Texas",
        restrictions: "None",
        masks: "optional",
        href: "https://gov.texas.gov/travel-texas/page/covid19"
      },
      {
        stateinfo: "Utah",
        restrictions: "None",
        masks: "optional",
        href: "https://www.visitutah.com/plan-your-trip/covid-19/"
      },
      {
        stateinfo: "Vermont",
        restrictions: "Quarantine with testing exceptions",
        masks: "optional",
        href: "https://www.healthvermont.gov/response/coronavirus-covid-19/traveling-vermont"
      },
      {
        stateinfo: "Virginia",
        restrictions: "None",
        masks: "optional",
        href: "https://washington.org/dc-information/coronavirus-travel-update-washington-dc"
      },
      {
        stateinfo: "Washington",
        restrictions: "None",
        masks: "optional",
        href: "https://www.vdh.virginia.gov/coronavirus/frequently-asked-questions/u-s-travelers/"
      },
      {
        stateinfo: "Washington, DC",
        restrictions: "Quarantine",
        masks: "optional",
        href: "https://www.experiencewa.com/articles/date-coronavirus-travel-advisory"
      },
      {
        stateinfo: "West Virginia",
        restrictions: "None",
        masks: "optional",
        href: "https://wvtourism.com/travel-alert/"
      },
      {
        stateinfo: "Wisconsin",
        restrictions: "None",
        masks: "optional",
        href: "https://www.dhs.wisconsin.gov/covid-19/travel.htm"
      },
      {
        stateinfo: "Wyoming",
        restrictions: "None",
        masks: "optional",
        href: "https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/covid-19-orders-and-guidance/"
      }
];

// 1. Create the model for state restrictions
// e.g. restriction

db.InfoStates
    .remove({})
    .then(() => db.InfoStates.insertMany(InfoStateSeed))
    .then(data => {
        //console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
