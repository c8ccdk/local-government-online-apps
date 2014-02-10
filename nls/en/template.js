﻿/*global define */
/*
 | ArcGIS Solutions
 | Version 10.2
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define(
({
        tooltips: {
            search: "Search",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "Current location",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Submit correction",  // Command button to submit a correction to the app's host
            collect: "Add content to map",  // Command button to open a template picker to add features to the map
            filter: "Filter map layers",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Switch basemap",  // Command button to open a dialog box for switching basemaps
            share: "Share",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Share via email",  // Command button to share the current map extents via email
            shareViaFacebook: "Share via Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Share via Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Print map",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "View printed map",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Landscape page orientation",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Portrait page orientation",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Help"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "email",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "title",  // Shown as title hint in print specification box if a title hint is not configured
            author: "author"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Search:",  // Appears before a search text field in dialog box for searching for a feature
            markup: "Draw",  // Appears before a set of tools for drawing on the map
            mapLayers: "Map layers:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "Search layer fields:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "This site does not have permission to get the current location",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "The browser was not able to get the current location",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "The browser was not able to get the current location in a timely fashion",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "This search layer was not found in the map",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "This field was not found in the map search layer",  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
            allSearchFieldsMissing: "None of these fields was found in the map search layer",  // Appears before a list of fields in the configured map search layer; shown when the app cannot find any of the fields that were configured for the search command; works with the layerFields prompt
            fieldNotFound: "This field was not found",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Your content has been submitted. Thank you.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Unable to access application's configuration",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Unable to launch application"  // Appears for any failure to build the user interface
        }
    })
);
