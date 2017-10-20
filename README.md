# External-Video-Container-Template
This is a content container template for Squiz Matrix
## What is it?
It is a Squiz Matrix Content Container Template, that allows a user to easily embed a Youtube or Vimeo video in the content of a page.
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
