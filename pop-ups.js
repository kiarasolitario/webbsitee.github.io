'use strict'

// javascript on the form pop-up
const footer_popup_form = document.getElementById("info-form")
		// Information Form
		function showForm(){
			footer_popup_form.showModal()
		}
		function closeForm(){
			footer_popup_form.close()
		}

		// Success message
		function Success(msg) {
			alert(msg)
		}

// Galleries pop-ups
const gallery_landscape = document.getElementById("landscape-popup")
const gallery_portrait = document.getElementById("portrait-popup")
const gallery_event = document.getElementById("event-popup")

		// Landscape pop-ups
		function showLandscape() {
			gallery_landscape.showModal()
		}
		function closeLandscape() {
			gallery_landscape.close()
		}

		// Portrait pop-ups
		function showPortrait() {
			gallery_portrait.showModal()
		}
		function closePortrait() {
			gallery_portrait.close()
		}

		// event pop-ups
		function showEvents() {
			gallery_event.showModal()
		}
		function closeEvents() {
			gallery_event.close()
		}