const chosenChord = id => {
	currentChord = document.querySelector(`[data-Chord-id=${id}]`);
	let a, b, c, d, arp;
	// CHORD C
	if (currentNote.value === 'C' && currentChord.textContent === 'Xm') {
		const Cm = new Chords('D#', 'G', '', '', 'Cm');
		Cm.showChord();
	} else if (currentNote.value === 'C' && currentChord.textContent === 'X') {
		const C = new Chords('E', 'G', '', '', 'C');
		C.showChord();
	} else if (currentNote.value === 'C' && currentChord.textContent === 'Xm7') {
		const Cm7 = new Chords('D#', 'G', 'A#', '', 'Cm7');
		Cm7.showChord();
	} else if (currentNote.value === 'C' && currentChord.textContent === 'X7') {
		const C7 = new Chords('E', 'G', 'A#', '', 'C7');
		C7.showChord();
	} else if (currentNote.value === 'C' && currentChord.textContent === 'XMAJ7') {
		const CMAJ7 = new Chords('E', 'G', 'B', '', 'CMAJ7');
		CMAJ7.showChord();
	} else if (currentNote.value === 'C' && currentChord.textContent === 'X7b9') {
		const C7b9 = new Chords('E', 'C#', 'G', 'A#', 'C7b9');
		C7b9.showChord();
	} else if (currentNote.value === 'C' && currentChord.textContent === 'Xsus4') {
		const Csus4 = new Chords('F', 'G', '', '', 'Csus4');
		Csus4.showChord();
	} else if (currentNote.value === 'C' && currentChord.textContent === 'Xm7b5') {
		const Cm7b5 = new Chords('D#', 'F#', 'A#', '', 'Cm7b5');
		Cm7b5.showChord();
	} else if (currentNote.value === 'C' && currentChord.textContent === 'X7b5') {
		const C7b5 = new Chords('E', 'F#', 'A#', '', 'C7b5');
		C7b5.showChord();
	} else if (currentNote.value === 'C' && currentChord.textContent === 'X7#5') {
		const C7ADD5 = new Chords('E', 'G#', 'A#', '', 'C7#5');
		C7ADD5.showChord();
	} else if (currentNote.value === 'C' && currentChord.textContent === 'XMAJ7#11') {
		const CMAJ7ADD11 = new Chords('E', 'G', 'B', 'F#', 'CMAJ7#11');
		CMAJ7ADD11.showChord();
	}

	// CHORD C#
	if (currentNote.value === 'C#' && currentChord.textContent === 'Xm') {
		const Cism = new Chords('E', 'G#', '', '', 'C#m');
		Cism.showChord();
	} else if (currentNote.value === 'C#' && currentChord.textContent === 'X') {
		const Cis = new Chords('F', 'G#', '', '', 'C#');
		Cis.showChord();
	} else if (currentNote.value === 'C#' && currentChord.textContent === 'Xm7') {
		const Cism7 = new Chords('E', 'G#', 'B', '', 'C#m7');
		Cism7.showChord();
	} else if (currentNote.value === 'C#' && currentChord.textContent === 'X7') {
		const Cis7 = new Chords('F', 'G#', 'B', '', 'C#7');
		Cis7.showChord();
	} else if (currentNote.value === 'C#' && currentChord.textContent === 'XMAJ7') {
		const CisMAJ7 = new Chords('F', 'G#', 'C', '', 'C#MAJ7');
		CisMAJ7.showChord();
	} else if (currentNote.value === 'C#' && currentChord.textContent === 'X7b9') {
		const Cis7b9 = new Chords('F', 'D', 'G#', 'B', 'C#7b9');
		Cis7b9.showChord();
	} else if (currentNote.value === 'C#' && currentChord.textContent === 'Xsus4') {
		const Cissus4 = new Chords('F#', 'G#', '', '', 'C#sus4');
		Cissus4.showChord();
	} else if (currentNote.value === 'C#' && currentChord.textContent === 'Xm7b5') {
		const Cism7b5 = new Chords('E', 'G', 'B', '', 'C#m7b5');
		Cism7b5.showChord();
	} else if (currentNote.value === 'C#' && currentChord.textContent === 'X7b5') {
		const Cis7b5 = new Chords('F', 'G', 'B', '', 'C#7b5');
		Cis7b5.showChord();
	} else if (currentNote.value === 'C#' && currentChord.textContent === 'X7#5') {
		const Cis7ADD5 = new Chords('F', 'A', 'B', '', 'C#7#5');
		Cis7ADD5.showChord();
	} else if (currentNote.value === 'C#' && currentChord.textContent === 'XMAJ7#11') {
		const CisMAJ7ADD11 = new Chords('F', 'G#', 'C', 'G', 'C#MAJ7#11');
		CisMAJ7ADD11.showChord();
	}
	// CHORD D
	if (currentNote.value === 'D' && currentChord.textContent === 'Xm') {
		const Dm = new Chords('F', 'A', '', '', 'Dm');
		Dm.showChord();
	} else if (currentNote.value === 'D' && currentChord.textContent === 'X') {
		const D = new Chords('F#', 'A', '', '', 'D');
		D.showChord();
	} else if (currentNote.value === 'D' && currentChord.textContent === 'Xm7') {
		const Dm7 = new Chords('F', 'A', 'C', '', 'Dm7');
		Dm7.showChord();
	} else if (currentNote.value === 'D' && currentChord.textContent === 'X7') {
		const D7 = new Chords('F#', 'A', 'C', '', 'D7');
		D7.showChord();
	} else if (currentNote.value === 'D' && currentChord.textContent === 'XMAJ7') {
		const DMAJ7 = new Chords('F#', 'A', 'C#', '', 'DMAJ7');
		DMAJ7.showChord();
	} else if (currentNote.value === 'D' && currentChord.textContent === 'X7b9') {
		const D7b9 = new Chords('F#', 'D#', 'A', 'C', 'D7b9');
		D7b9.showChord();
	} else if (currentNote.value === 'D' && currentChord.textContent === 'Xsus4') {
		const Dsus4 = new Chords('G', 'A', '', '', 'Dsus4');
		Dsus4.showChord();
	} else if (currentNote.value === 'D' && currentChord.textContent === 'Xm7b5') {
		const Dm7b5 = new Chords('F', 'G#', 'C', '', 'Dm7b5');
		Dm7b5.showChord();
	} else if (currentNote.value === 'D' && currentChord.textContent === 'X7b5') {
		const D7b5 = new Chords('F#', 'G#', 'C', '', 'D7b5');
		D7b5.showChord();
	} else if (currentNote.value === 'D' && currentChord.textContent === 'X7#5') {
		const D7ADD5 = new Chords('F#', 'A#', 'C', '', 'D7#5');
		D7ADD5.showChord();
	} else if (currentNote.value === 'D' && currentChord.textContent === 'XMAJ7#11') {
		const DMAJ7ADD11 = new Chords('F#', 'A', 'C#', 'G#', 'DMAJ7#11');
		DMAJ7ADD11.showChord();
	}

	// CHORD D#
	if (currentNote.value === 'D#' && currentChord.textContent === 'Xm') {
		const Dism = new Chords('F#', 'A#', '', '', 'D#m');
		Dism.showChord();
	} else if (currentNote.value === 'D#' && currentChord.textContent === 'X') {
		const Dis = new Chords('G', 'A#', '', '', 'D#');
		Dis.showChord();
	} else if (currentNote.value === 'D#' && currentChord.textContent === 'Xm7') {
		const Dism7 = new Chords('F#', 'A#', 'C#', '', 'D#m7');
		Dism7.showChord();
	} else if (currentNote.value === 'D#' && currentChord.textContent === 'X7') {
		const Dis7 = new Chords('G', 'A#', 'C#', '', 'D#7');
		Dis7.showChord();
	} else if (currentNote.value === 'D#' && currentChord.textContent === 'XMAJ7') {
		const DisMAJ7 = new Chords('G', 'A#', 'D', '', 'D#MAJ7');
		DisMAJ7.showChord();
	} else if (currentNote.value === 'D#' && currentChord.textContent === 'X7b9') {
		const Dis7b9 = new Chords('G', 'E', 'A#', 'C#', 'D#7b9');
		Dis7b9.showChord();
	} else if (currentNote.value === 'D#' && currentChord.textContent === 'Xsus4') {
		const Dissus4 = new Chords('G#', 'A#', '', '', 'D#sus4');
		Dissus4.showChord();
	} else if (currentNote.value === 'D#' && currentChord.textContent === 'Xm7b5') {
		const Dism7b5 = new Chords('F#', 'A', 'C#', '', 'D#m7b5');
		Dism7b5.showChord();
	} else if (currentNote.value === 'D#' && currentChord.textContent === 'X7b5') {
		const Dis7b5 = new Chords('G', 'A', 'C#', '', 'D#7b5');
		Dis7b5.showChord();
	} else if (currentNote.value === 'D#' && currentChord.textContent === 'X7#5') {
		const Dis7ADD5 = new Chords('G', 'B', 'C#', '', 'D#7#5');
		Dis7ADD5.showChord();
	} else if (currentNote.value === 'D#' && currentChord.textContent === 'XMAJ7#11') {
		const DisMAJ7ADD11 = new Chords('G', 'A#', 'D', 'A', 'D#MAJ7#11');
		DisMAJ7ADD11.showChord();
	}

	// CHORD E
	if (currentNote.value === 'E' && currentChord.textContent === 'Xm') {
		const Em = new Chords('G', 'B', '', '', 'Em');
		Em.showChord();
	} else if (currentNote.value === 'E' && currentChord.textContent === 'X') {
		const E = new Chords('G#', 'B', '', '', 'E');
		E.showChord();
	} else if (currentNote.value === 'E' && currentChord.textContent === 'Xm7') {
		const Em7 = new Chords('G', 'B', 'D', '', 'Em7');
		Em7.showChord();
	} else if (currentNote.value === 'E' && currentChord.textContent === 'X7') {
		const E7 = new Chords('G#', 'B', 'D', '', 'E');
		E7.showChord();
	} else if (currentNote.value === 'E' && currentChord.textContent === 'XMAJ7') {
		const EMAJ7 = new Chords('G#', 'B', 'D#', '', 'EMAJ7');
		EMAJ7.showChord();
	} else if (currentNote.value === 'E' && currentChord.textContent === 'X7b9') {
		const E7b9 = new Chords('G#', 'F', 'B', 'D', 'E7b9');
		E7b9.showChord();
	} else if (currentNote.value === 'E' && currentChord.textContent === 'Xsus4') {
		const Esus4 = new Chords('A', 'B', '', '', 'Esus4');
		Esus4.showChord();
	} else if (currentNote.value === 'E' && currentChord.textContent === 'Xm7b5') {
		const Em7b5 = new Chords('G', 'A#', 'D', '', 'Em7b5');
		Em7b5.showChord();
	} else if (currentNote.value === 'E' && currentChord.textContent === 'X7b5') {
		const E7b5 = new Chords('G#', 'A#', 'D', '', 'E7b5');
		E7b5.showChord();
	} else if (currentNote.value === 'E' && currentChord.textContent === 'X7#5') {
		const E7ADD5 = new Chords('G#', 'C', 'D', '', 'E7#5');
		E7ADD5.showChord();
	} else if (currentNote.value === 'E' && currentChord.textContent === 'XMAJ7#11') {
		const EMAJ7ADD11 = new Chords('G#', 'B', 'D#', 'A#', 'EMAJ7#11');
		EMAJ7ADD11.showChord();
	}

	// CHORD F
	if (currentNote.value === 'F' && currentChord.textContent === 'Xm') {
		const Fm = new Chords('G#', 'C', '', '', 'Fm');
		Fm.showChord();
	} else if (currentNote.value === 'F' && currentChord.textContent === 'X') {
		const F = new Chords('A', 'C', '', '', 'F');
		F.showChord();
	} else if (currentNote.value === 'F' && currentChord.textContent === 'Xm7') {
		const Fm7 = new Chords('G#', 'C', 'D#', '', 'Fm7');
		Fm7.showChord();
	} else if (currentNote.value === 'F' && currentChord.textContent === 'X7') {
		const F7 = new Chords('A', 'C', 'D#', '', 'F');
		F7.showChord();
	} else if (currentNote.value === 'F' && currentChord.textContent === 'XMAJ7') {
		const FMAJ7 = new Chords('A', 'C', 'E', '', 'FMAJ7');
		FMAJ7.showChord();
	} else if (currentNote.value === 'F' && currentChord.textContent === 'X7b9') {
		const F7b9 = new Chords('A', 'F#', 'C', 'D#', 'F7b9');
		F7b9.showChord();
	} else if (currentNote.value === 'F' && currentChord.textContent === 'Xsus4') {
		const Fsus4 = new Chords('A#', 'C', '', '', 'Fsus4');
		Fsus4.showChord();
	} else if (currentNote.value === 'F' && currentChord.textContent === 'Xm7b5') {
		const Fm7b5 = new Chords('G#', 'B', 'D#', '', 'Fm7b5');
		Fm7b5.showChord();
	} else if (currentNote.value === 'F' && currentChord.textContent === 'X7b5') {
		const F7b5 = new Chords('A', 'B', 'D#', '', 'F7b5');
		F7b5.showChord();
	} else if (currentNote.value === 'F' && currentChord.textContent === 'X7#5') {
		const F7ADD5 = new Chords('A', 'C#', 'D#', '', 'F7#5');
		F7ADD5.showChord();
	} else if (currentNote.value === 'F' && currentChord.textContent === 'XMAJ7#11') {
		const FMAJ7ADD11 = new Chords('A', 'C', 'E', 'B', 'FMAJ7#11');
		FMAJ7ADD11.showChord();
	}

	// CHORD F#
	if (currentNote.value === 'F#' && currentChord.textContent === 'Xm') {
		const Fism = new Chords('A', 'C#', '', '', 'F#m');
		Fism.showChord();
	} else if (currentNote.value === 'F#' && currentChord.textContent === 'X') {
		const Fis = new Chords('A#', 'C#', '', '', 'F#');
		Fis.showChord();
	} else if (currentNote.value === 'F#' && currentChord.textContent === 'Xm7') {
		const Fism7 = new Chords('A', 'C#', 'E', '', 'F#m7');
		Fism7.showChord();
	} else if (currentNote.value === 'F#' && currentChord.textContent === 'X7') {
		const Fis7 = new Chords('A#', 'C#', 'E', '', 'F#');
		Fis7.showChord();
	} else if (currentNote.value === 'F#' && currentChord.textContent === 'XMAJ7') {
		const FisMAJ7 = new Chords('A#', 'C#', 'F', '', 'F#MAJ7');
		FisMAJ7.showChord();
	} else if (currentNote.value === 'F#' && currentChord.textContent === 'X7b9') {
		const Fis7b9 = new Chords('A#', 'G', 'C#', 'E', 'F#7b9');
		Fis7b9.showChord();
	} else if (currentNote.value === 'F#' && currentChord.textContent === 'Xsus4') {
		const Fissus4 = new Chords('B', 'C#', '', '', 'F#sus4');
		Fissus4.showChord();
	} else if (currentNote.value === 'F#' && currentChord.textContent === 'Xm7b5') {
		const Fism7b5 = new Chords('A', 'C', 'E', '', 'F#m7b5');
		Fism7b5.showChord();
	} else if (currentNote.value === 'F#' && currentChord.textContent === 'X7b5') {
		const Fis7b5 = new Chords('A#', 'C', 'E', '', 'F#7b5');
		Fis7b5.showChord();
	} else if (currentNote.value === 'F#' && currentChord.textContent === 'X7#5') {
		const Fis7ADD5 = new Chords('A#', 'D', 'E', '', 'F#7#5');
		Fis7ADD5.showChord();
	} else if (currentNote.value === 'F#' && currentChord.textContent === 'XMAJ7#11') {
		const FisMAJ7ADD11 = new Chords('A#', 'C#', 'F', 'C', 'F#MAJ7#11');
		FisMAJ7ADD11.showChord();
	}

	// CHORD G
	else if (currentNote.value === 'G' && currentChord.textContent === 'Xm') {
		const Gm = new Chords('A#', 'D', '', '', 'Gm');
		Gm.showChord();
	} else if (currentNote.value === 'G' && currentChord.textContent === 'X') {
		const G = new Chords('B', 'D', '', '', 'G');
		G.showChord();
	} else if (currentNote.value === 'G' && currentChord.textContent === 'Xm7') {
		const Gm7 = new Chords('A#', 'D', 'F', '', 'Gm7');
		Gm7.showChord();
	} else if (currentNote.value === 'G' && currentChord.textContent === 'X7') {
		const G7 = new Chords('B', 'D', 'F', '', 'G7');
		G7.showChord();
	} else if (currentNote.value === 'G' && currentChord.textContent === 'XMAJ7') {
		const GMAJ7 = new Chords('B', 'D', 'F#', '', 'GMAJ7');
		GMAJ7.showChord();
	} else if (currentNote.value === 'G' && currentChord.textContent === 'X7b9') {
		const G7b9 = new Chords('B', 'D', 'F', 'G#', 'G7b9');
		G7b9.showChord();
	} else if (currentNote.value === 'G' && currentChord.textContent === 'Xsus4') {
		const Gsus4 = new Chords('C', 'D', '', '', 'Gsus4');
		Gsus4.showChord();
	} else if (currentNote.value === 'G' && currentChord.textContent === 'Xm7b5') {
		const Gm7b5 = new Chords('A#', 'C#', 'F', '', 'Gm7b5');
		Gm7b5.showChord();
	} else if (currentNote.value === 'G' && currentChord.textContent === 'X7b5') {
		const G7b5 = new Chords('B', 'C#', 'F', '', 'G7b5');
		G7b5.showChord();
	} else if (currentNote.value === 'G' && currentChord.textContent === 'X7#5') {
		const G7ADD5 = new Chords('B', 'D#', 'F', '', 'G7#5');
		G7ADD5.showChord();
	} else if (currentNote.value === 'G' && currentChord.textContent === 'XMAJ7#11') {
		const GMAJ7ADD11 = new Chords('B', 'D', 'F#', 'C#', 'GMAJ7#11');
		GMAJ7ADD11.showChord();
	}

	// CHORD G#
	else if (currentNote.value === 'G#' && currentChord.textContent === 'Xm') {
		const Gism = new Chords('B', 'D#', '', '', 'G#m');
		Gism.showChord();
	} else if (currentNote.value === 'G#' && currentChord.textContent === 'X') {
		const Gis = new Chords('C', 'D#', '', '', 'G#');
		Gis.showChord();
	} else if (currentNote.value === 'G#' && currentChord.textContent === 'Xm7') {
		const Gism7 = new Chords('B', 'D#', 'F#', '', 'G#m7');
		Gism7.showChord();
	} else if (currentNote.value === 'G#' && currentChord.textContent === 'X7') {
		const Gis7 = new Chords('C', 'D#', 'F#', '', 'G#7');
		Gis7.showChord();
	} else if (currentNote.value === 'G#' && currentChord.textContent === 'XMAJ7') {
		const GisMAJ7 = new Chords('C', 'D#', 'G', '', 'G#MAJ7');
		GisMAJ7.showChord();
	} else if (currentNote.value === 'G#' && currentChord.textContent === 'X7b9') {
		const Gis7b9 = new Chords('C', 'D#', 'F#', 'A', 'G#7b9');
		Gis7b9.showChord();
	} else if (currentNote.value === 'G#' && currentChord.textContent === 'Xsus4') {
		const Gissus4 = new Chords('C#', 'D#', '', '', 'G#sus4');
		Gissus4.showChord();
	} else if (currentNote.value === 'G#' && currentChord.textContent === 'Xm7b5') {
		const Gism7b5 = new Chords('B', 'D', 'F#', '', 'G#m7b5');
		Gism7b5.showChord();
	} else if (currentNote.value === 'G#' && currentChord.textContent === 'X7b5') {
		const Gis7b5 = new Chords('C', 'D', 'F#', '', 'G#7b5');
		Gis7b5.showChord();
	} else if (currentNote.value === 'G#' && currentChord.textContent === 'X7#5') {
		const Gis7ADD5 = new Chords('C', 'E', 'F#', '', 'G#7#5');
		Gis7ADD5.showChord();
	} else if (currentNote.value === 'G#' && currentChord.textContent === 'XMAJ7#11') {
		const GisMAJ7ADD11 = new Chords('C', 'D#', 'G', 'D', 'G#MAJ7#11');
		GisMAJ7ADD11.showChord();
	}

	// CHORD A
	else if (currentNote.value === 'A' && currentChord.textContent === 'Xm') {
		const Am = new Chords('C', 'E', '', '', 'Am');
		Am.showChord();
	} else if (currentNote.value === 'A' && currentChord.textContent === 'X') {
		const A = new Chords('C#', 'E', '', '', 'A');
		A.showChord();
	} else if (currentNote.value === 'A' && currentChord.textContent === 'Xm7') {
		const Am7 = new Chords('C', 'E', 'G', '', 'Am7');
		Am7.showChord();
	} else if (currentNote.value === 'A' && currentChord.textContent === 'X7') {
		const A7 = new Chords('C#', 'E', 'G', '', 'A7');
		A7.showChord();
	} else if (currentNote.value === 'A' && currentChord.textContent === 'XMAJ7') {
		const AMAJ7 = new Chords('C#', 'E', 'G#', '', 'AMAJ7');
		AMAJ7.showChord();
	} else if (currentNote.value === 'A' && currentChord.textContent === 'X7b9') {
		const A7b9 = new Chords('C#', 'E', 'G', 'A#', 'A7b9');
		A7b9.showChord();
	} else if (currentNote.value === 'A' && currentChord.textContent === 'Xsus4') {
		const Asus4 = new Chords('D', 'E', '', '', 'Asus4');
		Asus4.showChord();
	} else if (currentNote.value === 'A' && currentChord.textContent === 'Xm7b5') {
		const Am7b5 = new Chords('C', 'D#', 'G', '', 'Am7b5');
		Am7b5.showChord();
	} else if (currentNote.value === 'A' && currentChord.textContent === 'X7b5') {
		const A7b5 = new Chords('C#', 'D#', 'G', '', 'A7b5');
		A7b5.showChord();
	} else if (currentNote.value === 'A' && currentChord.textContent === 'X7#5') {
		const A7ADD5 = new Chords('C#', 'F', 'G', '', 'A7#5');
		A7ADD5.showChord();
	} else if (currentNote.value === 'A' && currentChord.textContent === 'XMAJ7#11') {
		const AMAJ7ADD11 = new Chords('C#', 'E', 'G#', 'D#', 'AMAJ7#11');
		AMAJ7ADD11.showChord();
	}

	// CHORD A#
	else if (currentNote.value === 'A#' && currentChord.textContent === 'Xm') {
		const Aism = new Chords('C#', 'F', '', '', 'A#m');
		Aism.showChord();
	} else if (currentNote.value === 'A#' && currentChord.textContent === 'X') {
		const Ais = new Chords('D', 'F', '', '', 'A#');
		Ais.showChord();
	} else if (currentNote.value === 'A#' && currentChord.textContent === 'Xm7') {
		const Aism7 = new Chords('C#', 'F', 'G#', '', 'A#m7');
		Aism7.showChord();
	} else if (currentNote.value === 'A#' && currentChord.textContent === 'X7') {
		const Ais7 = new Chords('D', 'F', 'G#', '', 'A#7');
		Ais7.showChord();
	} else if (currentNote.value === 'A#' && currentChord.textContent === 'XMAJ7') {
		const AisMAJ7 = new Chords('D', 'F', 'A', '', 'A#MAJ7');
		AisMAJ7.showChord();
	} else if (currentNote.value === 'A#' && currentChord.textContent === 'X7b9') {
		const Ais7b9 = new Chords('D', 'F', 'G#', 'B', 'A#7b9');
		Ais7b9.showChord();
	} else if (currentNote.value === 'A#' && currentChord.textContent === 'Xsus4') {
		const Aissus4 = new Chords('D#', 'F', '', '', 'A#sus4');
		Aissus4.showChord();
	} else if (currentNote.value === 'A#' && currentChord.textContent === 'Xm7b5') {
		const Aism7b5 = new Chords('C#', 'E', 'G#', '', 'A#m7b5');
		Aism7b5.showChord();
	} else if (currentNote.value === 'A#' && currentChord.textContent === 'X7b5') {
		const Ais7b5 = new Chords('D', 'E', 'G#', '', 'A#7b5');
		Ais7b5.showChord();
	} else if (currentNote.value === 'A#' && currentChord.textContent === 'X7#5') {
		const Ais7ADD5 = new Chords('D', 'F#', 'G#', '', 'A#7#5');
		Ais7ADD5.showChord();
	} else if (currentNote.value === 'A#' && currentChord.textContent === 'XMAJ7#11') {
		const AisMAJ7ADD11 = new Chords('D', 'F', 'A', 'E', 'A#MAJ7#11');
		AisMAJ7ADD11.showChord();
	}

	// CHORD B
	else if (currentNote.value === 'B' && currentChord.textContent === 'Xm') {
		const Bm = new Chords('D', 'F#', '', '', 'Bm');
		Bm.showChord();
	} else if (currentNote.value === 'B' && currentChord.textContent === 'X') {
		const B = new Chords('D#', 'F#', '', '', 'B');
		B.showChord();
	} else if (currentNote.value === 'B' && currentChord.textContent === 'Xm7') {
		const Bm7 = new Chords('D', 'F#', 'A', '', 'Bm7');
		Bm7.showChord();
	} else if (currentNote.value === 'B' && currentChord.textContent === 'X7') {
		const B7 = new Chords('D#', 'F#', 'A', '', 'B7');
		B7.showChord();
	} else if (currentNote.value === 'B' && currentChord.textContent === 'XMAJ7') {
		const BMAJ7 = new Chords('D#', 'F#', 'A#', '', 'BMAJ7');
		BMAJ7.showChord();
	} else if (currentNote.value === 'B' && currentChord.textContent === 'X7b9') {
		const B7b9 = new Chords('D#', 'F#', 'A', 'C', 'B7b9');
		B7b9.showChord();
	} else if (currentNote.value === 'B' && currentChord.textContent === 'Xsus4') {
		const Bsus4 = new Chords('E', 'F#', '', '', 'Bsus4');
		Bsus4.showChord();
	} else if (currentNote.value === 'B' && currentChord.textContent === 'Xm7b5') {
		const Bm7b5 = new Chords('D', 'F', 'A', '', 'Bm7b5');
		Bm7b5.showChord();
	} else if (currentNote.value === 'B' && currentChord.textContent === 'X7b5') {
		const B7b5 = new Chords('D#', 'F', 'A', '', 'B7b5');
		B7b5.showChord();
	} else if (currentNote.value === 'B' && currentChord.textContent === 'X7#5') {
		const B7ADD5 = new Chords('D#', 'G', 'A', '', 'B7#5');
		B7ADD5.showChord();
	} else if (currentNote.value === 'B' && currentChord.textContent === 'XMAJ7#11') {
		const BMAJ7ADD11 = new Chords('D#', 'F#', 'A#', 'F', 'BMAJ7#11');
		BMAJ7ADD11.showChord();
	}
};
