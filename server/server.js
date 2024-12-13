const express = require('express');
const next = require('next');
const dbConnect = require("../utils/dbConnect");

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const passport = require("passport");
const session = require("express-session");
const auth = require("./routes/auth")
const {json} = require("express");
const subproductmodel = require('./../models/subproductModel')
const endproductmodel = require('./../models/endproductModel')
const vamodel = require('./../models/viewanalytics')
const home = require("./routes/home_api");
const about = require("./routes/aboutusRoutes");
const brand = require("./routes/brandsRoutes");
const topcomps = require("./routes/topcompsRoutes");
const client = require("./routes/clientsRoutes");
const contactus = require("./routes/contactusRoutes");
const cvrouter = require("./routes/cvRoutes");
const product = require("./routes/productsRoutes");
const subproduct = require("./routes/subproductRoutes");
const endproduct = require("./routes/endproductRoutes");
const dashboard = require('./routes/dashboardRoutes');
const quotes = require('./routes/quotesRoute');
const faq = require('./routes/faqRoutes');
const leaders = require('./routes/leaderRoute');
const jwt = require("express-jwt");
const aboutImages = require("./routes/aboutUsImages");
const homeaboutImages = require("./routes/homeaboutUsImages");
const carouselImages = require("./routes/carouselRoutes")
app.prepare().then(async () => {
    const server = express();
    await dbConnect()
    server.use(json())
    server.post('/va', async (req, res) => {
        vamodel.create(req.body)
        res.json('done')
    });

    server.get('/test', async (req, res) => {
        data = [{"id": "1", "name": "LED LIGHTS & FITTINGS"}, {"id": "2", "name": "CABLES"}, {
            "id": "3",
            "name": "BATTERIES"
        }, {"id": "6", "name": "FLOWMETERS"}, {"id": "9", "name": "VALVES"}, {
            "id": "11",
            "name": "INDUSTRIAL CLUTCH & BRAKE"
        }, {"id": "13", "name": "CRANE & ACCESSORIES"}, {"id": "15", "name": "TOOL & TACKELS"}, {
            "id": "21",
            "name": "ELECTRICAL SWITCHGEARS"
        }, {"id": "23", "name": "BATTERY CHARGER & UPS"}, {"id": "27", "name": "ACOUSTIC ENCLOSURES"}, {
            "id": "36",
            "name": "ELECTRICAL MEASUREMING INSTRUMENTS"
        }, {"id": "38", "name": "NDT PRODUCTS"}, {"id": "39", "name": "SENSORS"}, {
            "id": "40",
            "name": "THERMAL IMAGING "
        }, {"id": "42", "name": "INDUSTRIAL SAFETY"}, {"id": "43", "name": "AUTOMATIONS"}, {
            "id": "45",
            "name": "TRANSMITTERS & ANALYZERS"
        }, {"id": "46", "name": "MACHINE HEALTH MONITORING SYSTEMS"}, {
            "id": "48",
            "name": "DIAL INSTRUMENTS / MICROMETERS"
        }, {"id": "49", "name": "GAUGES & THERMOCOUPLES"}, {"id": "50", "name": "MOTORS"}, {
            "id": "51",
            "name": "PANELS"
        }, {"id": "52", "name": "SAFETY LIGHTS"}]

        records = await subproductmodel.find({})
        data.map(async (e) => {
            var n = await subproductmodel.findOne({"name": e.name})
            console.log(n)
            await endproductmodel.findOneAndUpdate({
                "category": e.id
            }, {
                "category": n._id
            })


        })
        res.json({
            "msg": "done"
        })


    })


    // server.get('/secured', jwt.expressjwt({

    // }))

    // server.use('/api/', jwt.expressjwt({
    //     secret: "121322100581990",
    //     algorithms: ["HS256"],
    //     onExpired: async(req, err) =>{
    //        throw err;
    //     }
    // }).unless({path: ['/api/register', '/api/login',
    //         '/api/cvform/addcv', '/api/home',
    //         '/api/about', '/api/brands', '/api/clients']}))


    server.use((err, req, res, next) => {
        return res.status(err.status).json({
            "error": true,
            "message": err.message
        })
    })
    server.use('/api', auth);
    server.use('/api', home);
    server.use('/api/about', about);
    server.use('/api/brands', brand);
    server.use('/api/topcomps', topcomps);
    server.use('/api/clients', client);
    server.use('/api/contactus', contactus);
    server.use('/api/cvform', cvrouter);
    server.use('/api/product', product);
    server.use('/api/subproduct', subproduct);
    server.use('/api/endproduct', endproduct);
    server.use('/api/quotes',quotes);
    server.use('/api/dashboard', dashboard);
    server.use('/api/faq', faq);
    server.use('/api/leaders', leaders);
    server.use('/api/aboutImages',aboutImages);
    server.use('/api/homeaboutImages',homeaboutImages);
    server.use("/api/carouselImages", carouselImages);
    // analytics

    server.get('/va/counts', async (req, res) => {
        var total = await vamodel.find({}).count()
        const currentDate = new Date();
        var month = await vamodel.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1), // Records created on or after the first day of this month
                        $lte: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)   // Records created on or before the last day of this month
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 } // Count the records
                }
            }
        ])

        const currentDate2 = new Date();
        const startOfDay = new Date(currentDate2.getFullYear(), currentDate2.getMonth(), currentDate2.getDate());
        const endOfDay = new Date(currentDate2.getFullYear(), currentDate2.getMonth(), currentDate2.getDate() + 1);



        const today = await vamodel.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: startOfDay,
                        $lt: endOfDay
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 }
                }
            }
        ]);

        const country = await vamodel.aggregate([
            {
                $group: {
                    _id: {
                        country_code: "$country_code",
                        country_name: "$country_name"
                    },

                    count: { $sum: 1 }
                },

            }
        ])
        const state = await vamodel.aggregate([
            {
                $group: {
                    _id: "$state",
                    count: { $sum: 1 }
                }
            }
        ])
        const city = await vamodel.aggregate([
            {
                $group: {
                    _id: "$city",
                    count: { $sum: 1 }
                }
            }
        ])




        res.json({
            "all": total,
            "month":month,
            "today": today,
            "country":country,
            "state":state,
            "city":city
        })
    });


    // Handle all other routes with Next.js
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const port = process.env.PORT || 3000;

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`Server is running on http://localhost:${port}`);
    });
});
