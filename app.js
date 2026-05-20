const logEl = document.getElementById('log-output');
const messages = [{
        t: 350,
        msg: 'Connessione stabilita — avvio scansione...',
        cls: ''
    },
    {
        t: 450,
        msg: 'Rilevamento indirizzo IP pubblico...',
        cls: ''
    },
    {
        t: 550,
        msg: 'Geolocalizzazione IP completata.',
        cls: 'warn'
    },
    {
        t: 650,
        msg: 'Scansione cookie di sessione attivi...',
        cls: ''
    },
    {
        t: 750,
        msg: 'TENTATIVO ACCESSO CREDENZIALI...',
        cls: 'danger'
    },
    {
        t: 850,
        msg: 'Invio pacchetti dati al server remoto...',
        cls: 'danger'
    },
    {
        t: 950,
        msg: 'Acquisizione dati personali: 78%...',
        cls: 'danger'
    },
    {
        t: 1000,
        msg: 'UPLOAD COMPLETATO — dati inviati.',
        cls: 'danger'
    },
];

messages.forEach(({t, msg, cls}) => {
    setTimeout(() => {
        const line = document.createElement('span');
        line.className = 'log-line' + (cls ? ' ' + cls : '');
        line.textContent = `[${new Date().toLocaleTimeString('it-IT')}] ${msg}`;
        logEl.appendChild(line);
        while (logEl.children.length > 9) logEl.removeChild(logEl.firstChild);
    }, t);
});

let pct = 0;
const fill = document.getElementById('prog-fill');
const lbl = document.getElementById('pct-label');

const iv = setInterval(() => {
    pct = Math.min(pct + 1, 100);
    fill.style.width = pct + '%';
    lbl.textContent = pct + '%';
    if (pct >= 100) clearInterval(iv);
}, 10);

setTimeout(() => {
    const f1 = document.getElementById('fase1');
    const f2 = document.getElementById('fase2');
    f1.style.opacity = '0';
    setTimeout(() => {
        f1.style.display = 'none';
        f2.classList.add('show');
        requestAnimationFrame(() => requestAnimationFrame(() => f2.classList.add('visible')));
    }, 850);
}, 1200);