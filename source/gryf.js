let btnNotes = document.querySelectorAll('.sounds');
let btnChords = document.querySelectorAll('.soundA button');
let currentNote = document.querySelectorAll('.sounds');
let span = document.querySelectorAll('span');
let currentChord = document.querySelectorAll('.soundA');
let currentInterval = document.querySelectorAll('.soundB');
const infoNotes = document.querySelector('h3');

// prettier-ignore
const notesOnStrings = ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E',
						'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',
						'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G',
						'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D',
						'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A',
						'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D',  'D#', 'E',];

window.onload = start;

function start() {
	let notes = '';
	for (let i = 0; i <= 143; i++) {
		notes += `<div class="allstrings">${notesOnStrings[i]}</div>`;
	}
	document.getElementById('guitarStrings').innerHTML = notes;
}

// po naciśnieciu button w Notes pobieramy id i przechodzimy do funkcji show_notes

currentNote.forEach(function (btn) {
	btn.addEventListener('click', function () {
		id = this.getAttribute('data-id');
		currentNote.style = '';
		currentChord.style = '';
		currentInterval.style = '';
		currentNote = btn;
		span.textContent = '';
		span = document.querySelector(`[data-Note-id=${id}]`);
		const sound = btn.value;
		show_note(sound);
	});
});

function show_note(sound) {
	const divStrings = document.querySelectorAll('.allstrings');

	infoNotes.textContent = `Notes`;
	span.textContent = `${sound}`;
	for (i = 0; i <= 143; i++) {
		if (notesOnStrings[i] === sound) {
			divStrings[i].classList.add('active');
			divStrings[i].style.backgroundColor = 'lightSalmon';
			span.style.display = 'contents';
		} else {
			divStrings[i].classList.remove('active');
			divStrings[i].style.backgroundColor = '';
			currentNote.style.backgroundColor = 'red';
		}
	}
}

currentInterval.forEach(function (btn) {
	btn.addEventListener('click', function () {
		id = this.getAttribute('data-Int-id');
		currentInterval.style = '';
		currentChord.style = '';
		chosenIntervals(id);
	});
});

function show_interval(sound) {
	const divStrings = document.querySelectorAll('.allstrings');
	infoNotes.textContent = `Notes`;
	divStrings.forEach(strEl => {
		strEl.classList.remove('active');
	});
	show_note(currentNote.value);

	for (i = 0; i <= 143; i++) {
		if (notesOnStrings[i] === sound) {
			if (currentInterval.classList.contains('active')) {
				currentInterval.classList.remove('active');
				currentInterval.style = '';

				divStrings[i].classList.add('active');
				divStrings[i].style.backgroundColor = '#fffaaa';
				infoNotes.textContent = `${currentInterval.textContent}`;
				span.textContent = `${currentNote.value} - ${sound}`;
			}
		} else {
			currentInterval.classList.add('active');
			currentInterval.style.backgroundColor = 'red';
		}
	}
}

currentChord.forEach(function (btn) {
	btn.addEventListener('click', function () {
		id = this.getAttribute('data-Chord-id');
		currentChord.style = '';
		currentInterval.style = '';
		chosenChord(id);
	});
});

class Chords {
	constructor(a, b, c, d, arp) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.arp = arp;
	}

	showChord() {
		const divStrings = document.querySelectorAll('.allstrings');
		divStrings.forEach(strEl => {
			strEl.classList.remove('active');
		});
		if (currentChord.classList.contains('active')) {
			currentChord.classList.remove('active');
			currentChord.style = '';
			show_note(currentNote.value);
		} else {
			currentChord.classList.add('active');
			currentChord.style.backgroundColor = 'red';

			for (i = 0; i <= 143; i++) {
				if (
					notesOnStrings[i] === currentNote.value ||
					notesOnStrings[i] === this.a ||
					notesOnStrings[i] === this.b ||
					notesOnStrings[i] === this.c ||
					notesOnStrings[i] === this.d
				) {
					divStrings[i].classList.add('active');
				}
			}
			infoNotes.textContent = `Arpeggio ${this.arp}`;
		}
	}
}
