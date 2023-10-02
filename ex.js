let titleWork = document.querySelector(".title-work");
let titlePlay = document.querySelector(".title-play");
let titleStudy = document.querySelector(".title-study");
let titleExercise = document.querySelector(".title-exercise");
let titleSocial = document.querySelector(".title-social");
let titleSelf = document.querySelector(".title-self");

let hoursTextCurrent = document.querySelectorAll(".hours-text-current");
let hoursText = document.querySelectorAll(".hours-text");

let dailyButton = document.querySelector(".daily");
let weeklyButton = document.querySelector(".weekly");
let monthlyButton = document.querySelector(".monthly");

let workHours = document.querySelector(".work-hrs");
let workDay = document.querySelector(".work-day");
let workNumber = document.querySelector(".work-number");

let playHours = document.querySelector(".play-hrs");
let playDay = document.querySelector(".play-day");
let playNumber = document.querySelector(".play-number");

let studyHours = document.querySelector(".study-hrs");
let studyDay = document.querySelector(".study-day");
let studyNumber = document.querySelector(".study-number");

let exerciseHours = document.querySelector(".exercise-hrs");
let exerciseDay = document.querySelector(".exercise-day");
let exerciseNumber = document.querySelector(".exercise-number");

let socialHours = document.querySelector(".social-hrs");
let socialDay = document.querySelector(".social-day");
let socialNumber = document.querySelector(".social-number");

let selfHours = document.querySelector(".self-hrs");
let selfDay = document.querySelector(".self-day");
let selfNumber = document.querySelector(".self-number");

function timefunc() {
	fetch("./data.json").then((res) => {
		return res.json();
	}).then((data) => {
		titleWork.innerHTML = data[0]["title"];
		titlePlay.innerHTML = data[1]["title"];
		titleStudy.innerHTML = data[2]["title"];
		titleExercise.innerHTML = data[3]["title"];
		titleSocial.innerHTML = data[4]["title"];
		titleSelf.innerHTML = data[5]["title"];

		dailyButton.addEventListener("click", () => {
			dailyButton.classList.add("daily-active");
			weeklyButton.classList.remove("weekly-active");
			monthlyButton.classList.remove("monthly-active");

			for(let i in data) {
				if(data[i]["timeframes"]["daily"]["previous"] == 1) {
					hoursText[i].innerHTML = "hr";
				} else {
					hoursText[i].innerHTML = "hrs";
				}
			}
			for(let q in data) {
				if(data[q]["timeframes"]["daily"]["current"] == 1) {
					hoursTextCurrent[q].innerHTML = "hr";
				} else {
					hoursTextCurrent[q].innerHTML = "hrs";
				}
			}

			workHours.innerHTML = data[0]["timeframes"]["daily"]["current"];
			workDay.innerHTML = "Yesterday";
			workNumber.innerHTML = data[0]["timeframes"]["daily"]["previous"];

			playHours.innerHTML = data[1]["timeframes"]["daily"]["current"];
			playDay.innerHTML = "Yesterday";
			playNumber.innerHTML = data[1]["timeframes"]["daily"]["previous"];

			studyHours.innerHTML = data[2]["timeframes"]["daily"]["current"];
			studyDay.innerHTML = "Yesterday";
			studyNumber.innerHTML = data[2]["timeframes"]["daily"]["previous"];

			exerciseHours.innerHTML = data[3]["timeframes"]["daily"]["current"];
			exerciseDay.innerHTML = "Yesterday";
			exerciseNumber.innerHTML = data[3]["timeframes"]["daily"]["previous"];

			socialHours.innerHTML = data[4]["timeframes"]["daily"]["current"];
			socialDay.innerHTML = "Yesterday";
			socialNumber.innerHTML = data[4]["timeframes"]["daily"]["previous"];

			selfHours.innerHTML = data[5]["timeframes"]["daily"]["current"];
			selfDay.innerHTML = "Yesterday";
			selfNumber.innerHTML = data[5]["timeframes"]["daily"]["previous"];
		});

		weeklyButton.addEventListener("click", () => {
			dailyButton.classList.remove("daily-active");
			weeklyButton.classList.add("weekly-active");
			monthlyButton.classList.remove("monthly-active");

			workHours.innerHTML = data[0]["timeframes"]["weekly"]["current"];
			workDay.innerHTML = "Last Week";
			workNumber.innerHTML = data[0]["timeframes"]["weekly"]["previous"];

			playHours.innerHTML = data[1]["timeframes"]["weekly"]["current"];
			playDay.innerHTML = "Last Week";
			playNumber.innerHTML = data[1]["timeframes"]["weekly"]["previous"];

			studyHours.innerHTML = data[2]["timeframes"]["weekly"]["current"];
			studyDay.innerHTML = "Last Week";
			studyNumber.innerHTML = data[2]["timeframes"]["weekly"]["previous"];

			exerciseHours.innerHTML = data[3]["timeframes"]["weekly"]["current"];
			exerciseDay.innerHTML = "Last Week";
			exerciseNumber.innerHTML = data[3]["timeframes"]["weekly"]["previous"];

			socialHours.innerHTML = data[4]["timeframes"]["weekly"]["current"];
			socialDay.innerHTML = "Last Week";
			socialNumber.innerHTML = data[4]["timeframes"]["weekly"]["previous"];

			selfHours.innerHTML = data[5]["timeframes"]["weekly"]["current"];
			selfDay.innerHTML = "Last Week";
			selfNumber.innerHTML = data[5]["timeframes"]["weekly"]["previous"];

			for(let s in data) {
				if(data[s]["timeframes"]["weekly"]["previous"] == 1) {
					hoursText[s].innerHTML = "hr";
				} else {
					hoursText[s].innerHTML = "hrs";
				}
			}
			for(let t in data) {
				if(data[t]["timeframes"]["weekly"]["current"] == 1) {
					hoursTextCurrent[t].innerHTML = "hr";
				} else {
					hoursTextCurrent[t].innerHTML = "hrs";
				}
			}
		});

		monthlyButton.addEventListener("click", () => {
			dailyButton.classList.remove("daily-active");
			weeklyButton.classList.remove("weekly-active");
			monthlyButton.classList.add("monthly-active");

			for(let u in data) {
				if(data[u]["timeframes"]["monthly"]["previous"] == 1) {
					hoursText[u].innerHTML = "hr";
				} else {
					hoursText[u].innerHTML = "hrs";
				}
			}
			for(let v in data) {
				if(data[v]["timeframes"]["monthly"]["current"] == 1) {
					hoursTextCurrent[v].innerHTML = "hr";
				} else {
					hoursTextCurrent[v].innerHTML = "hrs";
				}
			}

			workHours.innerHTML = data[0]["timeframes"]["monthly"]["current"];
			workDay.innerHTML = "Last Month";
			workNumber.innerHTML = data[0]["timeframes"]["monthly"]["previous"];

			playHours.innerHTML = data[1]["timeframes"]["monthly"]["current"];
			playDay.innerHTML = "Last Month";
			playNumber.innerHTML = data[1]["timeframes"]["monthly"]["previous"];

			studyHours.innerHTML = data[2]["timeframes"]["monthly"]["current"];
			studyDay.innerHTML = "Last Month";
			studyNumber.innerHTML = data[2]["timeframes"]["monthly"]["previous"];

			exerciseHours.innerHTML = data[3]["timeframes"]["monthly"]["current"];
			exerciseDay.innerHTML = "Last Month";
			exerciseNumber.innerHTML = data[3]["timeframes"]["monthly"]["previous"];

			socialHours.innerHTML = data[4]["timeframes"]["monthly"]["current"];
			socialDay.innerHTML = "Last Month";
			socialNumber.innerHTML = data[4]["timeframes"]["monthly"]["previous"];

			selfHours.innerHTML = data[5]["timeframes"]["monthly"]["current"];
			selfDay.innerHTML = "Last Month";
			selfNumber.innerHTML = data[5]["timeframes"]["monthly"]["previous"];
		});
	})
}
timefunc();

window.addEventListener("DOMContentLoaded", () => {
	dailyButton.classList.add("daily-active");
	fetch("./data.json").then((res) => {
		return res.json();
	}).then((data) => {
		for(let i in data) {
			if(data[i]["timeframes"]["daily"]["previous"] == 1) {
				hoursText[i].innerHTML = "hr";
			} else {
				hoursText[i].innerHTML = "hrs";
			}
		}
		for(let q in data) {
			if(data[q]["timeframes"]["daily"]["current"] == 1) {
				hoursTextCurrent[q].innerHTML = "hr";
			} else {
				hoursTextCurrent[q].innerHTML = "hrs";
			}
		}

		workHours.innerHTML = data[0]["timeframes"]["daily"]["current"];
		workDay.innerHTML = "Yesterday";
		workNumber.innerHTML = data[0]["timeframes"]["daily"]["previous"];

		playHours.innerHTML = data[1]["timeframes"]["daily"]["current"];
		playDay.innerHTML = "Yesterday";
		playNumber.innerHTML = data[1]["timeframes"]["daily"]["previous"];

		studyHours.innerHTML = data[2]["timeframes"]["daily"]["current"];
		studyDay.innerHTML = "Yesterday";
		studyNumber.innerHTML = data[2]["timeframes"]["daily"]["previous"];

		exerciseHours.innerHTML = data[3]["timeframes"]["daily"]["current"];
		exerciseDay.innerHTML = "Yesterday";
		exerciseNumber.innerHTML = data[3]["timeframes"]["daily"]["previous"];

		socialHours.innerHTML = data[4]["timeframes"]["daily"]["current"];
		socialDay.innerHTML = "Yesterday";
		socialNumber.innerHTML = data[4]["timeframes"]["daily"]["previous"];

		selfHours.innerHTML = data[5]["timeframes"]["daily"]["current"];
		selfDay.innerHTML = "Yesterday";
		selfNumber.innerHTML = data[5]["timeframes"]["daily"]["previous"];
	})
});

let element1 = document.querySelector(".div1");
let element2 = document.querySelector(".work");
let element3 = document.querySelector(".play");
let element4 = document.querySelector(".study");
let element5 = document.querySelector(".exercise");
let element6 = document.querySelector(".social");
let element7 = document.querySelector(".self-care");

let options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.5
};

let observer1 = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			element1.classList.add("down");
		}
		else {
			element1.classList.remove("down");
		}
	});
}, options);
let observer2 = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			element2.classList.add("right");
		}
		else {
			element2.classList.remove("right");
		}
	});
}, options);
let observer3 = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			element3.classList.add("left");
		}
		else {
			element3.classList.remove("left");
		}
	});
}, options);
let observer4 = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			element4.classList.add("right");
		}
		else {
			element4.classList.remove("right");
		}
	});
}, options);
let observer5 = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			element5.classList.add("left");
		}
		else {
			element5.classList.remove("left");
		}
	});
}, options);
let observer6 = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			element6.classList.add("right");
		}
		else {
			element6.classList.remove("right");
		}
	});
}, options);
let observer7 = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			element7.classList.add("up");
		}
		else {
			element7.classList.remove("up");
		}
	});
}, options);

let media = window.matchMedia("(orientation: portrait)");
function orientationCheck(media) {
	if(media.matches) {
		observer1.observe(element1);
		observer2.observe(element2);
		observer3.observe(element3);
		observer4.observe(element4);
		observer5.observe(element5);
		observer6.observe(element6);
		observer7.observe(element7);		
	}
}
orientationCheck(media);
media.addListener(orientationCheck);