const mongoose = require("mongoose");
const db = require("../models");

// This file empties the travel collection and inserts the books below


mongoose.connect("mongodb+srv://slsmi285:Florida89!@cluster0.upwzp.mongodb.net/project0?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Mongoose is Connected");
    }
);

const infoSeed = [
    {
      state: "Alabama",
      restrictions: "None",
      masks: "Statewide",
      href: "https://alabama.travel/my-trip/staying-safe"
    },
    {
        state: "Alaska",
        restrictions: "Quarantine with testing exceptions",
        masks: "Some cities",
        href: "https://covid19.alaska.gov/travelers/"
      },
      {
        state: "Arizona",
        restrictions: "None",
        masks: "Some cities",
        href: "https://tourism.az.gov/covid-19-updates-2/"
      },
      {
        state: "Arkansas",
        restrictions: "None",
        masks: "Statewide",
        href: "https://www.arkansas.com/travel-advisory/covid-19"
      },
      {
        state: "California",
        restrictions: "None",
        masks: "Statewide",
        href: "https://www.visitcalifornia.com/latest-covid-19-coronavirus"
      },
      {
        state: "Colorado",
        restrictions: "None",
        masks: "Statewide",
        href: "https://covid19.colorado.gov/prepare-protect-yourself/prevent-the-spread/travel"
      },
      {
        state: "Conneticut",
        restrictions: "Quarantine",
        masks: "Statewide",
        href: "https://portal.ct.gov/Coronavirus/Covid-19-Knowledge-Base/Travel-In-or-Out-of-CT"
      },
      {
        state: "Delaware",
        restrictions: "None",
        masks: "Statewide",
        href: "https://www.visitdelaware.com/industry/covid-19-in-delaware/"
      },
      {
        state: "Florida",
        restrictions: "None",
        masks: "No",
        href: "https://floridahealthcovid19.gov/travelers/"
      },
      {
        state: "Georgia",
        restrictions: "None",
        masks: "No",
        href: "https://dph.georgia.gov/covid-19-travel"
      },
      {
        state: "Hawaii",
        restrictions: "Quarantine",
        masks: "Statewide",
        href: "https://www.hawaiitourismauthority.org/news/alerts/covid-19-novel-coronavirus/"
      },
      {
        state: "Idaho",
        restrictions: "Quarantine for certain cities",
        masks: "Some cities",
        href: "https://visitidaho.org/covid-19-travel-alert/"
      },
      {
        state: "Illinois",
        restrictions: "Quarantine for certain cities",
        masks: "Statewide",
        href: "https://www.dph.illinois.gov/topics-services/diseases-and-conditions/diseases-a-z-list/coronavirus/travel-guidance"
      },
      {
        state: "Indiana",
        restrictions: "None",
        masks: "Statewide",
        href: "https://www.coronavirus.in.gov/"
      },
      {
        state: "Iowa",
        restrictions: "None",
        masks: "No",
        href: "https://www.traveliowa.com/aspx/general/dynamicpage.aspx?id=204"
      },
      {
        state: "Kansas",
        restrictions: "None",
        masks: "No",
        href: "https://www.coronavirus.kdheks.gov/175/Travel-Exposure-Related-Isolation-Quaran"
      },
      {
        state: "Kentucky",
        restrictions: "Quarantine",
        masks: "Statewide",
        href: "https://governor.ky.gov/covid19"
      },
      {
        state: "Louisiana",
        restrictions: "None",
        masks: "Statewide",
        href: "https://louisianatravelassociation.org/covid-19-resources"
      },
      {
        state: "Maine",
        restrictions: "Quarantine with testing exceptions",
        masks: "Statewide",
        href: "https://www.maine.gov/covid19/restartingmaine/keepmainehealthy/faqs"
      },
      {
        state: "Maryland",
        restrictions: "Health advisory",
        masks: "Statewide",
        href: "https://www.visitmaryland.org/article/travel-alerts"
      },
      {
        state: "Massachusetts",
        restrictions: "Quarantine with testing exceptions",
        masks: "Statewide",
        href: "https://www.mass.gov/info-details/covid-19-updates-and-information"
      },
      {
        state: "Michigan",
        restrictions: "None",
        masks: "Statewide",
        href: "https://www.michigan.gov/coronavirus/"
      },
      {
        state: "Minnesota",
        restrictions: "None",
        masks: "Statewide",
        href: "https://visitmississippi.org/covid-19-travel-alert/"
      },
      {
        state: "Mississippi",
        restrictions: "None",
        masks: "Statewide",
        href: "https://visitmississippi.org/covid-19-travel-alert/"
      },
      {
        state: "Missouri",
        restrictions: "None",
        masks: "Some cities",
        href: "https://www.visitmo.com/travel-updates"
      },
      {
        state: "Montana",
        restrictions: "None",
        masks: "Some cities",
        href: "https://www.visitmt.com/travel-alerts.html"
      },
      {
        state: "Nebraska",
        restrictions: "None",
        masks: "Some cities",
        href: "http://dhhs.ne.gov/Pages/COVID-19-Traveler-Recommendations.aspx"
      },
      {
        state: "Nevada",
        restrictions: "None",
        masks: "Statewide",
        href: "https://nvhealthresponse.nv.gov/info/travelers-visitors/"
      },
      {
        state: "New Hampshire",
        restrictions: "Quarantine",
        masks: "Statewide",
        href: "https://www.covidguidance.nh.gov/out-state-visitors"
      },
      {
        state: "New Jersey",
        restrictions: "Health advisory",
        masks: "Statewide",
        href: "https://covid19.nj.gov/faqs/nj-information/general-public/which-states-are-on-the-travel-advisory-list-are-there-travel-restrictions-to-or-from-new-jersey"
      },
      {
        state: "New Mexico",
        restrictions: "Quarantine",
        masks: "Statewide",
        href: "https://www.newmexico.org/covid-19-traveler-information/"
      },
      {
        state: "New York",
        restrictions: "Quarantine",
        masks: "Statewide",
        href: "https://coronavirus.health.ny.gov/covid-19-travel-advisory"
      },
      {
        state: "North Carolina",
        restrictions: "None",
        masks: "Statewide",
        href: "https://www.nc.gov/covid-19/covid-19-travel-resources"
      },
      {
        state: "North Dakota",
        restrictions: "None",
        masks: "No",
        href: "https://www.health.nd.gov/diseases-conditions/coronavirus/travel"
      },
      {
        state: "Ohio",
        restrictions: "Health advisory",
        masks: "Statewide",
        href: "https://coronavirus.ohio.gov/wps/portal/gov/covid-19/home"
      },
      {
        state: "Oklahoma",
        restrictions: "None",
        masks: "Some cities",
        href: "https://coronavirus.health.ok.gov/travel"
      },
      {
        state: "Oregon",
        restrictions: "None",
        masks: "Statewide",
        href: "https://traveloregon.com/travel-alerts/"
      },
      {
        state: "Pennsylvania",
        restrictions: "Health advisory",
        masks: "Statewide",
        href: "https://www.health.pa.gov/topics/disease/coronavirus/Pages/Travelers.aspx"
      },
      {
        state: "Rhode Island",
        restrictions: "Quarantine with testing exceptions",
        masks: "Statewide",
        href: "https://health.ri.gov/covid/"
      },
      {
        state: "South Carolina",
        restrictions: "Health advisory",
        masks: "Statewide",
        href: "https://scdhec.gov/infectious-diseases/viruses/coronavirus-disease-2019-covid-19/travelers-covid-19"
      },
      {
        state: "South Dakota",
        restrictions: "None",
        masks: "No",
        href: "https://www.travelsouthdakota.com/coronavirus-covid-19"
      },
      {
        state: "Tennessee",
        restrictions: "None",
        masks: "Some cities",
        href: "https://www.tnvacation.com/articles/tennessee-travel-amid-coronavirus"
      },
      {
        state: "Texas",
        restrictions: "None",
        masks: "Some cities",
        href: "https://gov.texas.gov/travel-texas/page/covid19"
      },
      {
        state: "Utah",
        restrictions: "None",
        masks: "Some cities",
        href: "https://www.visitutah.com/plan-your-trip/covid-19/"
      },
      {
        state: "Vermont",
        restrictions: "Quarantine with testing exceptions",
        masks: "Statewide",
        href: "https://www.healthvermont.gov/response/coronavirus-covid-19/traveling-vermont"
      },
      {
        state: "Virginia",
        restrictions: "None",
        masks: "Statewide",
        href: "https://washington.org/dc-information/coronavirus-travel-update-washington-dc"
      },
      {
        state: "Washington",
        restrictions: "None",
        masks: "Statewide",
        href: "https://www.vdh.virginia.gov/coronavirus/frequently-asked-questions/u-s-travelers/"
      },
      {
        state: "Washington, DC",
        restrictions: "Quarantine",
        masks: "Statwide",
        href: "https://www.experiencewa.com/articles/date-coronavirus-travel-advisory"
      },
      {
        state: "West Virginia",
        restrictions: "None",
        masks: "Statewide",
        href: "https://wvtourism.com/travel-alert/"
      },
      {
        state: "Wisconsin",
        restrictions: "None",
        masks: "No",
        href: "https://www.dhs.wisconsin.gov/covid-19/travel.htm"
      },
      {
        state: "Wyoming",
        restrictions: "None",
        masks: "Some cities",
        href: "https://health.wyo.gov/publichealth/infectious-disease-epidemiology-unit/disease/novel-coronavirus/covid-19-orders-and-guidance/"
      }
];

// 1. Create the model for state restrictions
// e.g. restriction

db.Info
    .remove({})
    .then(() => db.Info.insertMany(infoSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
