define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
			//The web map id
			webmaps: [
			{
				id: "beb7ad903eb8459c92165f1916c5375d",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: true
			},{
				id: "f6dbfaddf0cf481caa4099f48caeec6f",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: false,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			},
			{
				id: "dd4c5d6628b74bb49ea4700c1e18f024",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: false,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			},
			{
				id: "f37107fcb19d43b287c857b8be0df042",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: false,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			}
			// To add additional maps to the template, uncomment the below section for
			// each map you would like to add. Webmap titles from ArcGIS Online will
			// be used unless you fill in title attribute.
			//, {
			//
			//	id: "f37107fcb19d43b287c857b8be0df042",
			//	title: "",
			//	// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
			//	showSingleTimeInstance: false,
			//  // Hide legend and legend toggle for specific map by setting this option to false
			//	legendVisible: true,
			//  // Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
			//	openLegendOnChange: false
			//	},{
			//
			//	id: "739db23c3f674005a405c68e337f5011",
			//	title: "",
			//	// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
			//	showSingleTimeInstance: false,
			//  // Hide legend and legend toggle for specific map by setting this option to false
			//	legendVisible: true,
			//  // Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
			//	openLegendOnChange: false
			//	}
			],
			//Enter a title, if no title is specified, the first webmap's title is used.
			title: "The White House Celebrates the Maker Faire Movement",
			//Enter a subtitle, if no subtitle is specified, the first webmap's subtitle is used.
			subtitle: "On June 18, the White House hosts a Maker Faire, bringing together exhibitors, prominent Makers, supporting universities and libraries, and supporting mayors to celebrate a nation of innovators.",
			// If false, each tab will have a number on it. If true, the first tab will not have a number and the second tab will start counting at 1.
			startCountOnSecondTab: false,
			//Sync maps scale and location
			syncMaps: true,
			//Display geocoder search widget
			geocoderWidget: false,
			// Specify a proxy for custom deployment
			proxyurl: "",
			//specify the url to a geometry service
			geometryserviceurl: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
			//If the webmap uses Bing Maps data, you will need to provided your Bing Maps Key
			bingmapskey : "",
			//Modify this to point to your sharing service URL if you are using the portal
			sharingurl: "http://www.arcgis.com/sharing/rest/content/items"
		}
	}
);
