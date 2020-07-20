const PREVIEWS = ["windows-7.png", "macbook-pro.png"];
const ASSERTIONS = ["default.png"];

var information_title, information_subtitle, information_description, presentation_preview,
		download_software, download_free_list, presentation_feedback, feedback_tip, assertion_mark;
var current_assertion_mark = 0, load_progress_counter = 0;

function init() {
	information_title = document.getElementById("information-title");
	information_subtitle = document.getElementById("information-subtitle");
    information_description = document.getElementById("information-description");
	presentation_preview = document.getElementById("presentation-preview");
    download_software = document.getElementById("download-software");
    download_free_list = document.getElementById("download-free-list");
    presentation_feedback = document.getElementById("presentation-feedback");
    feedback_tip = document.getElementById("feedback-tip");
	assertion_mark = document.getElementById("assertion-mark");
}

function start_information_title_animation() {
	information_title.style.visibility = "visible";
    information_subtitle.style.animationPlayState = "running";
}

function load_presentation() {
	var i = Math.floor(Math.random() * PREVIEWS.length);
    presentation_preview.src = "resources/previews/" + PREVIEWS[i];
	switch (i) {
		case 0:
			assertion_mark.style.left = "-60px";
			break;
		case 1:
			assertion_mark.style.left = "-10px";
			break;
	}
}

function load_assertion_mark() {
	assertion_mark.src = "resources/assertions/" + ASSERTIONS[current_assertion_mark];
    if (current_assertion_mark == 0) {
    	assertion_mark.style.animationName = "default-assertion-mark";
    } else {
    	assertion_mark.style.animationName = "custom-assertion-mark";
    }
    if (++current_assertion_mark == ASSERTIONS.length) {
    	current_assertion_mark = 0;
    }
}

function count_load_progress() {
	load_progress_counter++;
    if (load_progress_counter == 2) {
    	for (node of [information_description, presentation_preview, download_software,
        		download_free_list, presentation_feedback, assertion_mark, legal]) {
            node.style.animationPlayState = "running";
        }
    } else if (load_progress_counter > 2) {
    	assertion_mark.style.animationDelay = "0s";
    	assertion_mark.style.animationPlayState = "running";
    }
}

function pause_assertion_mark_animation() {
	assertion_mark.style.animationPlayState = "paused";
}

function show_feedback_tip() {
	feedback_tip.textContent = "Scrivi a yiupp@menzani.eu";
}

function hide_feedback_tip() {
	feedback_tip.innerHTML = "&nbsp;";
}

function copy_selection() {
	var selection_text = window.getSelection().toString();
	if (selection_text.length > 0) {
		document.execCommand("copy");
		feedback_tip.textContent = "Copiato!";
	}
}

function send_feedback() {
	location.href = "mailto:yiupp@menzani.eu"
}