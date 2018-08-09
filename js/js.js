function obtenerDatos() {
    setInterval(function () {
        //URL que me devuelve los valores para agregar al grafico
        window.fetch('http://127.0.0.1:8000/monitor').then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log("valor: " + Number(data.valor));

            //Mostrando el numero de puntos en el grafico
            shift = chart.series[0].data.length >= 10 ? true : false;
            //añadiendo 
            chart.series[0].addPoint(
                [data.timestamp * 1000,
                Number(data.valor)], true, shift
            )
        })
    }, 2000);
}
obtenerDatos();

const options = {
    colors: [
        '#2b908f',
        '#90ee7e',
        '#f45b5b',
        '#7798BF',
        '#aaeeee',
        '#ff0066',
        '#eeaaee',
        '#55BF3B',
        '#DF5353',
        '#7798BF',
        '#aaeeee'
    ],
    chart: {
        backgroundColor: {
            stops: [
                [0, '#343a40'],
                [1, '#343a40']
            ]
        },
        style: {
            fontFamily: '\'arial\', sans-serif',
            color: "#fff"
        },
        plotBorderColor: '#606063',
        type: 'spline'
    },
    title: {
        text: 'Monitor',
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Estatus'
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Valor',
        data: []
    }]
}
const chart = Highcharts.chart('grafica', options)
