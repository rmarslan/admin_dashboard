import "../scss/main.scss";
import "../index.html";
import $ from "jquery";
import Chart from "chart.js";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/collapse";

$(document).ready(function () {
	const sideBarToggleButton = $("#sidebar-toggler-icon");
	const sideBar = $("#sidebar");

	sideBarToggleButton.on("click", () => {
		sideBar.toggleClass("toggled");
	});

	const lineChartCtx = $("#line-chart");
	new Chart(lineChartCtx, {
		type: "line",
		data: {
			labels: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],

			datasets: [
				{
					label: "orders",
					data: [3, 2, 3, 5, 6, 4, 6, 9, 10, 8, 9, 9],
					fill: true,
					backgroundColor: "#311b92",
					borderColor: "rgba(0, 0, 0, 0)",
					pointBackgroundColor: "rgba(0, 0, 0, 0)",

					pointRadius: 15,
					pointHoverRadius: 16,
				},

				{
					label: "sales($)",
					data: [5, 4, 10, 15, 16, 12, 10, 14, 20, 22, 18, 20],
					fill: true,
					backgroundColor: "#f0f0f0",
					borderWidth: 1,
					borderColor: "#dedede",
					pointBorderColor: "rgba(0, 0, 0, 0)",
					pointBackgroundColor: "rgba(0, 0, 0, 0)",

					pointRadius: 15,
					pointHoverRadius: 16,
				},
			],
		},

		options: {
			legend: false,
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
							min: 0,
							max: 25,
						},

						gridLines: {
							display: true,
							lineWidth: 0,
						},
					},
				],

				xAxes: [
					{
						gridLines: {
							display: true,
							lineWidth: 0,
						},
					},
				],
			},
		},
	});
});
