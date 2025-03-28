import React from 'react';
import { Chart } from 'react-google-charts';
import visitedCountries from '../../../assets/visitedCountries.json';

type Props = {
    onCountryClick: (country: string) => void;
};

const WorldMap: React.FC<Props> = ({ onCountryClick }) => {
    // Google Charts 用データ形式へ変換
    const chartData = [
        ['Country', 'Year', { role: 'tooltip' }],
        ...visitedCountries.map(({ country, year }) => [
            country,
            year,
            `${country}（${year}年）`,
        ]),
    ];

    const uniqueYears = Array.from(new Set(
        visitedCountries.map(({ year }) => String(year))
    )).sort();

    const yearColors = [
        '#EF5350',
        '#AB47BC',
        '#42A5F5',
        '#66BB6A',
        '#FFA726',
        '#8D6E63',
        '#26A69A',
        '#7E57C2',
        '#D4E157',
        '#FF7043' 
    ];



    const options = {
        backgroundColor: '#f9f9f9',
        datalessRegionColor: '#eee',
        defaultColor: '#ccc',
        legend: 'none',
        colorAxis: {
            values: uniqueYears,
            colors: yearColors.slice(0, uniqueYears.length),
        },
        tooltip: {
            isHtml: false,
        },
    };

    const handleSelect = (e: any) => {
        const selection = e.chartWrapper.getChart().getSelection();
        if (selection.length > 0) {
            const selectedRow = selection[0].row;
            const country = String(chartData[selectedRow + 1][0]);
            onCountryClick(country);
        }
    };

    return (
        <Chart
            chartType="GeoChart"
            width="100%"
            height="500px"
            data={chartData}
            options={options}
            mapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            chartEvents={[
                {
                    eventName: 'select',
                    callback: handleSelect,
                },
            ]}
        />
    );
};

export default WorldMap;
