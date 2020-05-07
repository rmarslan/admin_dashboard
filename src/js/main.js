import "../scss/main.scss";
import "../index.html";
import "jquery";
import "@popperjs/core";
import Chart from "chart.js";
import "./jquery-jvectormap-2.0.5.min.js";
import "./jvectormapmirc.js";
import "./bootstrap-datepicker.min.js";
import "bootstrap";

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

	$("#date-picker div").datepicker({
		maxViewMode: 3,
		todayBtn: "linked",
		multidate: false,
		todayHighlight: true,
		toggleActive: true,
	});

	const pieChartCtx = $("#pie-chart");
	new Chart(pieChartCtx, {
		type: "doughnut",
		data: {
			labels: ["chrome", "firefox", "IE"],
			datasets: [
				{
					data: [4401, 4001, 1503],
					backgroundColor: ["#311b92", "#ab47bc", "#f25ca2"],
				},
			],
		},

		options: {
			legend: false,
		},
	});

	const mapData = {
		US: 298,
		SA: 200,
		DE: 220,
		FR: 540,
		CN: 120,
		AU: 760,
		BR: 550,
		IN: 200,
		GB: 120,
	};

	$("#world-map").vectorMap({
		map: "world_merc",
		backgroundColor: "transparent",
		zoomOnScroll: false,
		regionStyle: {
			initial: {
				fill: "#dedede",
				"fill-opacity": 1,
				stroke: "none",
				"stroke-width": 0,
				"stroke-opacity": 1,
			},
		},

		series: {
			regions: [
				{
					values: mapData,
					scale: ["#311b92"],
					normalizeFunction: "polynomial",
				},
			],
		},
	});

	const barChartCtx = document.getElementById("bar-chart");
	new Chart(barChartCtx, {
		type: "bar",
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
					data: [60, 30, 10, 30, 10, 50, 40, 20, 5, 15, 30, 45],
					backgroundColor: "#311b92",
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
							max: 70,
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
