const capsule = 'Hat';

setInterval(() =>
  fetch('https://tri.pengpowers.xyz/api/open', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': (
        document.cookie.match(/(?:^|; )tokenraw=([^;]*)/)
          ? decodeURIComponent(document.cookie.match(/(?:^|; )tokenraw=([^;]*)/)[1])
          : (
              document.cookie.match(/(?:^|; )token=([^;]*)/)
                ? `triangulet ${decodeURIComponent(document.cookie.match(/(?:^|; )token=([^;]*)/)[1])}`
                : ''
            )
      ),
    },
    body: JSON.stringify({ capsule: capsule }),
  })
  .then(r => r.text().then(t => {
    try { t = JSON.stringify(JSON.parse(t), null, 2); } catch {}
    console.log(`[${new Date().toISOString()}] ${r.status} ${r.statusText}\n${t}\n`);
  })),
2000);
