const express=require('express');
const app=express();
const ejs=require('ejs');
const https=require('https');
const port=process.env.PORT || 3000;
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))


app.get('/',(req,res)=>{
    const city='Jhang';
    // get the weather api
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b53a7d2fd7363ee8abb09a73eefa28b9`;
    https.get(url,response=>{
        response.on('data',data=>{
            const weatherData=JSON.parse(data);
                // let get the temp values status and extra extra...
            const weatherStatus=weatherData.weather[0].main;
            const weatherDes=weatherData.weather[0].description;
            const weatherIcon=weatherData.weather[0].icon;
            // temperature values
            const temp=weatherData.main.temp;
            const temp_min=weatherData.main["temp_min"];
            const temp_max=weatherData.main["temp_max"];
            const pressure=weatherData.main["pressure"];
            const windSpeed=weatherData.wind.speed
            const humidity=weatherData.main["humidity"];
            // country name
            const country=weatherData.sys["country"];
            const cityName=weatherData.name;
            res.render('template',
            {
                weatherStatus:weatherStatus,
                weatherDes:weatherDes,
                weatherIcon:weatherIcon,
                temp:temp,
                temp_min:temp_min,
                temp_max:temp_max,
                windSpeed:windSpeed,
                pressure:pressure,
                humidity:humidity,
                country:country,
                cityName:cityName
                
            });
        })
        // catch error
        response.on('error',err=>{
            console.log(err);
        })
    })

})
    

        
        
        

// custom city name post route
app.post('/',(req,res)=>{
    const city=req.body.city;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b53a7d2fd7363ee8abb09a73eefa28b9`;
    https.get(url,response=>{
        response.on('data',data=>{
            const weatherData=JSON.parse(data);
                // let get the temp values status and extra extra...
            const weatherStatus=weatherData.weather[0].main;
            const weatherDes=weatherData.weather[0].description;
            const weatherIcon=weatherData.weather[0].icon;
            // temperature values
            const temp=weatherData.main.temp;
            const temp_min=weatherData.main["temp_min"];
            const temp_max=weatherData.main["temp_max"];
            const pressure=weatherData.main["pressure"];
            const windSpeed=weatherData.wind.speed
            const humidity=weatherData.main["humidity"];
            // country name
            const country=weatherData.sys["country"];
            const cityName=weatherData.name;
            res.render('template',
            {
                weatherStatus:weatherStatus,
                weatherDes:weatherDes,
                weatherIcon:weatherIcon,
                temp:temp,
                temp_min:temp_min,
                temp_max:temp_max,
                windSpeed:windSpeed,
                pressure:pressure,
                humidity:humidity,
                country:country,
                cityName:cityName
                
            });
        })
        // catch error
        response.on('error',err=>{
            console.log(err);
        })
    })


    
})
app.listen(port,()=>{
    console.log('server is started up');
});