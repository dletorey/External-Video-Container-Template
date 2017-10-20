# External-Video-Container-Template
This is a content container template for Squiz Matrix
* [What is it?](#what-is-it)
* [Metadata Schema](#metadata-schema)
* [Scripts Folder](#scripts-folder)
* [CSS Folder](#css-folder)
* [Simple Edit Layout](#simple-edit-layout)
* [Paint Layout](#paint-layout)
* [Structure Image](#image)
* [Versions](#versions)
* [Importing the Container Template](#importing-the-container-template)
## What is it?
It is a Squiz Matrix Content Container Template, that allows a user to easily embed a Youtube or Vimeo video in the content of a page.

![External Vieo Template demo](https://github.com/dletorey/External-Video-Container-Template/blob/master/Images/external-video-demo.gif)
## Metadata Schema
Metadata Schema - called Media Schema
Metadata Section - called Resources
Three Metadata Text Fields as children of the Metadata section:
* mediaURL
* mediaType
* medaiId
## Scripts Folder
The scripts folder contains 4 files:
* getMedia.js -this strips the URL, of either youtube or vimeo, and converts them into and stores them in the Metadata Schema:
  * MediaType - either youtube or vimeo
  * mediaId - The video id
* youtube()-function - used in the Simple Edit Layout
* vimeo-initialisation-script - used in the Simple Edit Layout
* vimeo()-function - used in the Simple Edit Layout
## CSS Folder
This contains a css file that controller the look and layout of the interface in /_admin and Edit+
## Simple Edit Layout
This controls the way the video is added in the added in either /_admin or Edit+
It contains 3 Content Containers:
* Layouts & fileds (raw html div) - which contains /Simple-Edit_Layout/Layout-and-Fields-div
* Video Load Scripts (nested content div) - which nests the contents of Load Video Scripts Page, which contains:
  * Raw Html div - /Scripts/youtube()-function
  * Nested Content div - /Scripts/vimeo-initialisation-script
  * Raw Html div - /Scripts/vimeo()-function
## Paint Layout
This controls the way the frontend of the div works (displays the video).
It contains:
* Page Contents - /Paint-Layout/Paint-Layout-Page-Contents
* Default Format - /Paint-Layout/Paint-Layout-Default-Format
## Image
This image shows the structure of the Content Container Template in /_admin

![Structure in Matrix](https://github.com/dletorey/External-Video-Container-Template/blob/master/Images/external-video-Container-Template.png) "Structure of the container template in Squiz Matrix"
## Importing the Container Template
* Download the /Import-File/external-video-container-template.tgz file

In the admin interface of your Squiz Matrix system:
* Click Tools icon in the Squiz Matrix toolbar
* Click the "Import Assets from XML Tool" link
* Click "Choose File" and select the file downloaded
* Choose the location to add your Container Template, this needs to be a location that has a URL so that the files have URLs
* Click Save
Once Complete there are 2 asset ids that need to be updated in the Simple Edit Layout
* In the Asset Map, right click on the "Extrenal Video SEL" and select "Edit Contents"
* Acquire the Locks
* on line 7 of "Layouts and Fields div" update the input field to use the asset ID of the mediaURL metadata field, this is currently 1808
* In the Asset Map, right click on the "Extrenal Video" Content Container template and select "Details"
* Acquire the Locks
* In the "Allowed Root Nodes" field select the locations that this Content Container Template can be used
