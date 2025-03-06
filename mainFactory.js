
// Абстрактная фабрика
class FurnitureFactory {
	minPrice;
	maxPrice;
	stars;

	createAll(){}

	createChair(){}

	createTable(){}

	createSofa(){}
}


// Конкретные фабрики для каждого стиля
class OfficeFactory extends FurnitureFactory {
	createChair() {
		return new Chair(
			'Office',
			'https://taurus-m.ru/upload/resize_cache/webp/iblock/4aa/vssauqj6zya2qqltp0cxxtp3d3i36vqd.webp',
			50, // minPrice
			100, // maxPrice
			4 // stars
		);
	}

	createTable() {
		return new Table(
			'Office',
			'https://ouch-cdn2.icons8.com/dcwWnWUr52hXQHMZ_x3S7_JU4C6bBdV56sH4X6Ufao8/rs:fit:569:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch2/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTM4/LzQwOGY0ZWJmLTc0/YmItNDljYy05YmQ1/LTIzNjMyOTgwNjc3/Yi5zdmc.png',
			150, // minPrice
			300, // maxPrice
			5 // stars
		);
	}

	createSofa() {
		return new Sofa(
			'Office',
			'https://cdn.domdivanov24.com/files/imgs/ig1111919/cnkrzqlg-590x430.jpg',
			200, // minPrice
			500, // maxPrice
			4 // stars
		);
	}
}

class VintageFactory extends FurnitureFactory {
	createChair() {
		return new Chair(
			'Vintage',
			'https://abali.ru/wp-content/uploads/2014/05/stul.jpg',
			80, // minPrice
			150, // maxPrice
			5 // stars
		);
	}

	createTable() {
		return new Table(
			'Vintage',
			'https://previews.123rf.com/images/castecodesign/castecodesign1607/castecodesign160700157/59308014-%D0%B1%D0%B0%D1%80%D0%BE%D0%BA%D0%BA%D0%BE-%D0%BA%D0%BE%D1%80%D0%BE%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-%D1%81%D1%82%D0%BE%D0%BB-%D1%81-%D1%80%D0%BE%D1%81%D0%BA%D0%BE%D1%88%D0%BD%D1%8B%D0%BC-%D0%BE%D1%80%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%BC-%D0%B2-%D1%87%D0%B5%D1%80%D0%BD%D0%BE%D0%BC-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C-%D1%81-%D0%B3%D1%80%D0%B0%D0%B2%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC.jpg',
			200, // minPrice
			400, // maxPrice
			4 // stars
		);
	}

	createSofa() {
		return new Sofa(
			'Vintage',
			'https://previews.123rf.com/images/castecodesign/castecodesign1701/castecodesign170100293/70820909-%D0%B2%D0%B8%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D1%8B%D0%B9-%D0%B1%D0%B0%D1%80%D0%BE%D0%BA%D0%BA%D0%BE-%D0%B8%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B9-%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD-%D1%84%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%81%D0%BA%D0%B0%D1%8F-%D1%80%D0%BE%D1%81%D0%BA%D0%BE%D1%88%D0%BD%D0%B0%D1%8F-%D0%B1%D0%BE%D0%B3%D0%B0%D1%82%D0%B0%D1%8F-%D0%B4%D0%B5%D0%BA%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C.jpg',
			300, // minPrice
			600, // maxPrice
			5 // stars
		);
	}
}

class ClassicFactory extends FurnitureFactory {
	createChair() {
		return new Chair(
			'Classic',
			'https://previews.123rf.com/images/afendikoff/afendikoff1711/afendikoff171100035/90426634-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D1%82%D1%83%D0%BB-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE-%D1%86%D0%B2%D0%B5%D1%82%D0%B0-%D1%81%D0%BE-%D1%81%D0%BF%D0%B8%D0%BD%D0%BA%D0%BE%D0%B9-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F.jpg',
			70, // minPrice
			120, // maxPrice
			4 // stars
		);
	}

	createTable() {
		return new Table(
			'Classic',
			'https://previews.123rf.com/images/dvarg/dvarg1308/dvarg130800127/21760393-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D1%8B%D0%B9-%D1%81%D1%82%D0%BE%D0%BB-%D1%81-%D0%B4%D0%BB%D0%B8%D0%BD%D0%BD%D0%BE%D0%B9-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B9-%D1%82%D0%BA%D0%B0%D0%BD%D1%8C%D1%8E-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC.jpg',
			180, // minPrice
			350, // maxPrice
			5 // stars
		);
	}

	createSofa() {
		return new Sofa(
			'Classic',
			'https://pmv173.ru/upload/iblock/724/8rlfb72ld43b4fobtbdzlmcugzhss9qs.jpg',
			250, // minPrice
			500, // maxPrice
			4 // stars
		);
	}
}



//классы для каждого типа мебели
class Chair {
	constructor(style, image, minPrice, maxPrice, stars) {
		this.type = 'Chair';
		this.style = style;
		this.image = image;
		this.minPrice = minPrice;
		this.maxPrice = maxPrice;
		this.stars = stars;
	}
}

class Table {
	constructor(style, image, minPrice, maxPrice, stars) {
		this.type = 'Table';
		this.style = style;
		this.image = image;
		this.minPrice = minPrice;
		this.maxPrice = maxPrice;
		this.stars = stars;
	}
}

class Sofa {
	constructor(style, image, minPrice, maxPrice, stars) {
		this.type = 'Sofa';
		this.style = style;
		this.image = image;
		this.minPrice = minPrice;
		this.maxPrice = maxPrice;
		this.stars = stars;
	}
}



// Функция для отображения предметов на странице
function displayFurniture(items) {
	const container = document.getElementById('furniture-container');
	container.innerHTML = ''; // Очищаю контейнер перед добавлением новых элементов

	items.forEach(item => {
		const itemElement = document.createElement('div');
		itemElement.className = 'furniture-item';
		itemElement.innerHTML = `
			<h2>${item.type} (${item.style})</h2>
			<img src="${item.image}" alt="${item.type}">
			<p>Цена: от ${item.minPrice} до ${item.maxPrice} $</p>
			<p>Рейтинг: ${item.stars} звезд</p>
		`;
		container.appendChild(itemElement);
	});
}

// Обработчики событий для кнопок
document.querySelector('.btn--1').addEventListener('click', () => {
	const factory = new ClassicFactory();
	const classicItems = [factory.createChair(), factory.createTable(), factory.createSofa()];
	displayFurniture(classicItems);
});

document.querySelector('.btn--2').addEventListener('click', () => {
	const factory = new OfficeFactory();
	const officeItems = [factory.createChair(), factory.createTable(), factory.createSofa()];
	displayFurniture(officeItems);
});

document.querySelector('.btn--3').addEventListener('click', () => {
	const factory = new VintageFactory();
	const vintageItems = [factory.createChair(), factory.createTable(), factory.createSofa()];
	displayFurniture(vintageItems);
});





