function getMedia() {
    var success = false;
    var media   = {};
    var pastedData = document.getElementsByClassName("mediaURL")[0].getElementsByTagName('input')[0].value;
    if (pastedData.match('https://(www.)?youtube|youtu\.be')) {
        if (pastedData.match('embed')) { 
            youtube_id = pastedData.split(/embed\//)[1].split('"')[0]; 
        }
        else { 
            youtube_id = pastedData.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0]; 
        }
        media.type  = "youtube";
        media.id    = youtube_id;
        youtube(youtube_id);
        success = true;
    }
    else if (pastedData.match('https://(player.)?vimeo\.com')) {
        vimeo_id = pastedData.split(/video\/|https:\/\/vimeo\.com\//)[1].split(/[?&]/)[0];
        media.type  = "vimeo";
        media.id    = vimeo_id;
        vimeo(vimeo_id);
        success = true;
    }
    if (success) { 
        document.getElementsByClassName("mediaType")[0].getElementsByTagName('input')[0].value = media.type;
        document.getElementsByClassName("mediaId")[0].getElementsByTagName('input')[0].value = media.id;
        media.type  = null;
        media.id    = null;
    }
    else { 
        alert("What you have pasted isn't a youtube or vimeo link"); 
        return false;
    }
}

function refreshYoutube() {
	var videoIframe = document.getElementById("player-" + containerId);
	var playerDiv = document.createElement("div");
	playerDiv.id = "player-" + containerId;
	var parentDiv = videoIframe.parentNode;
	parentDiv.replaceChild(playerDiv, videoIframe);
    var success = false;
    var media   = {};
    var pastedData = document.getElementsByClassName("mediaURL")[0].getElementsByTagName('input')[0].value;
    if (pastedData.match('https://(www.)?youtube|youtu\.be')) {
        if (pastedData.match('embed')) { 
            youtube_id = pastedData.split(/embed\//)[1].split('"')[0]; 
        }
        else { 
            youtube_id = pastedData.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0]; 
        }
        media.type  = "youtube";
        media.id    = youtube_id;
        youtube(youtube_id);
        success = true;
    }
    else if (pastedData.match('https://(player.)?vimeo\.com')) {
        vimeo_id = pastedData.split(/video\/|https:\/\/vimeo\.com\//)[1].split(/[?&]/)[0];
        media.type  = "vimeo";
        media.id    = vimeo_id;
        vimeo(vimeo_id);
        success = true;
    }
    if (success) { 
        document.getElementsByClassName("mediaType")[0].getElementsByTagName('input')[0].value = media.type;
        document.getElementsByClassName("mediaId")[0].getElementsByTagName('input')[0].value = media.id;
        return media; }
    else { 
        alert("No valid media id detected"); 
        return false;
    }
}