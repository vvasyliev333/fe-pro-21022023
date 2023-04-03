const curr_data = {
    "date":"28.03.2023",
    "time":"09:00",
    "bank":"PB",
    "baseCurrency":980,
    "baseCurrencyLit":"UAH",
    "exchangeRate":[
        {"baseCurrency":"UAH","currency":"SEK","saleRateNB":3.5138000,"purchaseRateNB":3.5138000,"country":"Sweden",flag:"34% 87%"},
        {"baseCurrency":"UAH","currency":"SGD","saleRateNB":27.4539000,"purchaseRateNB":27.4539000,"country":"Singapore",flag:"61% 77.5%"},
        {"baseCurrency":"UAH","currency":"TMT","saleRateNB":10.4482000,"purchaseRateNB":10.4482000,"country":"Turkmenistan",flag:"1% 97%"},
        {"baseCurrency":"UAH","currency":"TRY","saleRateNB":1.9151000,"purchaseRateNB":1.9151000,"country":"Turkey",flag:"99% 87%"},
        {"baseCurrency":"UAH","currency":"UAH","saleRateNB":1.0000000,"purchaseRateNB":1.0000000,"country":"Ukraine",flag:"17% 97%"},
        {"baseCurrency":"UAH","currency":"USD","saleRateNB":36.5686000,"purchaseRateNB":36.5686000,"saleRate":38.1500000,"purchaseRate":37.6500000,"country":"USA",flag:"33.5% 97%"},
        {"baseCurrency":"UAH","currency":"UZS","saleRateNB":0.0032259,"purchaseRateNB":0.0032259,"country":"Uzbekistan",flag:"44.5% 97%"},
        {"baseCurrency":"UAH","currency":"AUD","saleRateNB":24.3163000,"purchaseRateNB":24.3163000,"country":"Australia",flag:"55.5% 1.5%"},
        {"baseCurrency":"UAH","currency":"AZN","saleRateNB":21.5426000,"purchaseRateNB":21.5426000,"country":"Azerbaijan",flag:"66.5% 1.5%"},
        {"baseCurrency":"UAH","currency":"BYN","saleRateNB":13.2919000,"purchaseRateNB":13.2919000,"country":"Belarus",flag:"93% 1.5%"},
        {"baseCurrency":"UAH","currency":"CAD","saleRateNB":26.6739000,"purchaseRateNB":26.6739000,"country":"Canada",flag:"72% 11%"},
        {"baseCurrency":"UAH","currency":"CHF","saleRateNB":39.8894000,"purchaseRateNB":39.8894000,"saleRate":41.6100000,"purchaseRate":39.8700000,"country":"Switzerland",flag:"39% 87%"},
        {"baseCurrency":"UAH","currency":"CNY","saleRateNB":5.3141000,"purchaseRateNB":5.3141000,"country":"China",flag:"99% 11%"},
        {"baseCurrency":"UAH","currency":"CZK","saleRateNB":1.6597000,"purchaseRateNB":1.6597000,"saleRate":1.7300000,"purchaseRate":1.6600000,"country":"Czech Republic",flag:"55.5% 20.5%"},
        {"baseCurrency":"UAH","currency":"DKK","saleRateNB":5.2860000,"purchaseRateNB":5.2860000,"country":"Denmark",flag:"61% 20.5%"},
        {"baseCurrency":"UAH","currency":"EUR","saleRateNB":39.3899000,"purchaseRateNB":39.3899000,"saleRate":41.0000000,"purchaseRate":40.0000000,"country":"Germany",flag:"55.5% 30%"},
        {"baseCurrency":"UAH","currency":"GBP","saleRateNB":44.8496000,"purchaseRateNB":44.8496000,"saleRate":46.7700000,"purchaseRate":44.8200000,"country":"United Kingdom",flag:"28% 96.5%"},
        {"baseCurrency":"UAH","currency":"HUF","saleRateNB":0.1022150,"purchaseRateNB":0.1022150,"country":"Hungary",flag:"6% 40%"},
        {"baseCurrency":"UAH","currency":"ILS","saleRateNB":10.2620000,"purchaseRateNB":10.2620000,"country":"Israel",flag:"44.5% 40%"},
        {"baseCurrency":"UAH","currency":"JPY","saleRateNB":0.2781500,"purchaseRateNB":0.2781500,"country":"Japan",flag:"66.5% 40%"},
        {"baseCurrency":"UAH","currency":"KZT","saleRateNB":0.0798890,"purchaseRateNB":0.0798890,"country":"Kazakhstan",flag:"77% 40%"},
        {"baseCurrency":"UAH","currency":"MDL","saleRateNB":1.9745000,"purchaseRateNB":1.9745000,"country":"Moldova",flag:"28% 58.5%"},
        {"baseCurrency":"UAH","currency":"NOK","saleRateNB":3.4758000,"purchaseRateNB":3.4758000,"country":"Norway",flag:"11.8% 68.5%"},
        {"baseCurrency":"UAH","currency":"PLN","saleRateNB":8.4062000,"purchaseRateNB":8.4062000,"saleRate":8.7600000,"purchaseRate":8.4000000,"country":"Poland",flag:"66% 68.5%"}
    ]
}

function show (curr_data){
    document.write (`<header><div class = header_block><div class = "header_block_1"><div>${curr_data.date}</div><div>${curr_data.time}</div></div><div class = header_block_2><div>Курси обміну валют</div><div>Exchange rates</div></div></div class = header_block></header><table><th></th><th>Країна</th><th class="center">Валюта</th><th class="col_name">We buy at</th><th class="col_name">We sell at</th></tr>`)
    curr_data.exchangeRate.forEach(element =>
        document.write (`<tr><td class="center"><div class="image" style="background-position: ${element.flag};"></div></td><td class="col_name">${element.country}</td><td class="center_text">${element.currency}</td><td class="yellow">${element.purchaseRateNB.toFixed(2)}</td><td class="yellow">${element.saleRateNB.toFixed(2)}</td></tr>`))
}

show(curr_data);