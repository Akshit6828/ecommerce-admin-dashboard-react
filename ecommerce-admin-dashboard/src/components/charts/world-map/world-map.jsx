import React, { useRef, useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import {
  ChoroplethController,
  GeoFeature,
  ProjectionScale,
  ColorScale,
} from "chartjs-chart-geo";
import { feature } from "topojson-client";
import "./world-map.scss";

Chart.register(
  ...registerables,
  ChoroplethController,
  GeoFeature,
  ProjectionScale,
  ColorScale
);

export default function WorldMap() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [canvasKey, setCanvasKey] = useState(0); // Force canvas recreation

  useEffect(() => {
    let isMounted = true;

    async function renderChart() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 100));

        if (!isMounted || !chartRef.current) return;

        if (chartInstance.current) {
          chartInstance.current.destroy();
          chartInstance.current = null;
        }

        const canvas = chartRef.current;
        const existingChart = Chart.getChart(canvas);
        if (existingChart) {
          existingChart.destroy();
        }

        const res = await fetch(
          "https://unpkg.com/world-atlas@2.0.2/countries-50m.json"
        );
        if (!isMounted) return;

        const topojson = await res.json();
        const countries = feature(
          topojson,
          topojson.objects.countries
        ).features;

        const sampleData = [
          {
            feature: countries.find(
              (c) => c.properties.NAME === "United States of America"
            ),
            value: 72,
            city: "New York",
            coordinates: [-74.006, 40.7128],
          },
          {
            feature: countries.find(
              (c) => c.properties.NAME === "United States of America"
            ),
            value: 39,
            city: "San Francisco",
            coordinates: [-122.4194, 37.7749],
          },
          {
            feature: countries.find((c) => c.properties.NAME === "Australia"),
            value: 25,
            city: "Sydney",
            coordinates: [151.2093, -33.8688],
          },
          {
            feature: countries.find((c) => c.properties.NAME === "Singapore"),
            value: 61,
            city: "Singapore",
            coordinates: [103.8198, 1.3521],
          },
        ];

        const ctx = chartRef.current.getContext("2d");
        if (!ctx) return;

        chartInstance.current = new Chart(ctx, {
          type: "choropleth",
          data: {
            labels: countries.map(
              (d) => d.properties.NAME || d.properties.name || "Unknown"
            ),
            datasets: [
              {
                label: "Countries",
                outline: countries,
                data: countries.map((country) => {
                  const matchingData = sampleData.find(
                    (d) => d.feature === country
                  );
                  return {
                    feature: country,
                    value: matchingData ? matchingData.value : 0,
                  };
                }),
                backgroundColor: (context) => {
                  if (!context.parsed || context.parsed.v === undefined) {
                    return "#a8c5da";
                  }
                  const value = context.parsed.v;
                  return value === 0 ? "var(--black-5)" : "#a8c5da";
                },
                borderColor: "#a8c5da",
                borderWidth: 0.5,
              },
              {
                type: "bubble",
                label: "Cities",
                data: sampleData.map((item) => ({
                  x: item.coordinates[0],
                  y: item.coordinates[1],
                  v: item.value,
                  city: item.city,
                })),
                backgroundColor: "#ffffff",
                borderColor: "#000000",
                borderWidth: 20,
                pointRadius: 20,
                pointHoverRadius: 8,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              projection: {
                axis: "x",
                projection: "equalEarth",
              },
              color: {
                axis: "x",
                display: false,
                quantize: 5,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  title: (context) => {
                    if (context[0].datasetIndex === 1) {
                      return context[0].raw.city;
                    } else {
                      const feature = context[0].raw?.feature;
                      return (
                        feature?.properties?.NAME ||
                        feature?.properties?.name ||
                        "Unknown"
                      );
                    }
                  },
                  label: (context) => {
                    if (context.datasetIndex === 1) {
                      return `Revenue: ${context.raw.v}k`;
                    } else {
                      const value = context.parsed?.v;
                      return value > 0 ? `Revenue: ${value}k` : "No data";
                    }
                  },
                },
              },
            },
            layout: {
              padding: 10,
            },
          },
        });
      } catch (e) {
        console.error("Error rendering chart:", e);
        if (isMounted) {
          setCanvasKey((prev) => prev + 1);
        }
      }
    }

    renderChart();

    return () => {
      isMounted = false;
      if (chartInstance.current) {
        try {
          chartInstance.current.destroy();
          chartInstance.current = null;
        } catch (e) {
          console.warn("Error destroying chart:", e);
        }
      }
    };
  }, [canvasKey]);
  return (
    <div className="revenue-location-widget">
      <h2>Revenue by Location</h2>
      <div className="map-panel">
        <canvas
          key={canvasKey} // Force recreation if needed
          ref={chartRef}
        />
      </div>

      <div className="revenue-bars">
        <div className="revenue-item">
          <div className="text">
            <div className="country">New York</div>
            <div className="amount">72K</div>
          </div>
          <div className="bar">
            <div className="fill" style={{ width: "72%" }}></div>
          </div>
        </div>
        <div className="revenue-item">
          <div className="text">
            <div className="country">San Francisco</div>
            <div className="amount">39K</div>
          </div>
          <div className="bar">
            <div className="fill" style={{ width: "39%" }}></div>
          </div>
        </div>
        <div className="revenue-item">
          <div className="text">
            <div className="country">Sydney</div>
            <div className="amount">25K</div>
          </div>
          <div className="bar">
            <div className="fill" style={{ width: "25%" }}></div>
          </div>
        </div>
        <div className="revenue-item">
          <div className="text">
            <div className="country">Singapore</div>
            <div className="amount">61K</div>
          </div>
          <div className="bar">
            <div className="fill" style={{ width: "61%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
