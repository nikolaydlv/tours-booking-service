customSelect('select');

 const picker = new easepick.create({
        lang: 'ru-Ru',
		element: document.getElementById('date'),
		css: [
			'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
		],
		format: 'DD.MM.YY',
 });