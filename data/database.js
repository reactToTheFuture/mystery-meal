// The following data eventullay will go to the database

var zgarden = {
  id: '1',
  name: 'Z Garden',
  foodType: 'Mediterranean, Greek',
  reviews: '248',
  distance: '0.03 Miles',
  address: '313 Wilshire Blvd., Santa Monica, CA 90401',
  city: 'Santa Monica',
  phone: '(310) 395-7799',
  pictures: [
    'http://s3-media4.fl.yelpcdn.com/bphoto/hxxu25Mb5dve6VqugyiP9Q/o.jpg',
    'http://s3-media3.fl.yelpcdn.com/bphoto/zXn-5ek3-Myv59J5ljMGkw/o.jpg',
    'http://s3-media4.fl.yelpcdn.com/bphoto/YCYLq3RWP1d7eYcPx2G0-g/o.jpg',
    'http://s3-media1.fl.yelpcdn.com/bphoto/_daBnhbu6Ls8J2ba8CfBhw/o.jpg',
  ]
};

var musharestaurant = {
  id: '2',
  name: 'Musha Restaurant',
  foodType: 'Japanese, Sushi Bars, Tapas/Small Plates',
  reviews: '988',
  distance: '0.08 Miles',
  address: '424 Wilshire Blvd., Santa Monica, CA 90401',
  city: 'Santa Monica',
  phone: '(310) 576-6330',
  pictures: [
    'http://s3-media3.fl.yelpcdn.com/bphoto/OLHKDYoemhPsz5ZzNpgX9w/o.jpg',
    'http://s3-media4.fl.yelpcdn.com/bphoto/jhUK7vjpSgq8abT8zwBmvw/o.jpg',
    'http://s3-media1.fl.yelpcdn.com/bphoto/HDyGPPTOVIFygA5UUKE5Aw/o.jpg',
    'http://s3-media3.fl.yelpcdn.com/bphoto/W0X51J_lwmfJNNevcZo83g/o.jpg'
  ]
};

var aestus = {
  id: '3',
  name: 'Aestus',
  foodType: 'American (New)',
  reviews: '135',
  distance: '0.1 Miles',
  address: '507 Wilshire Blvd., Santa Monica, CA 90401',
  city: 'Santa Monica',
  phone: '(424) 268-4433',
  pictures: [
    'http://s3-media1.fl.yelpcdn.com/bphoto/sFLxUyQ4VcFhXbdj-BNLDQ/o.jpg',
    'http://s3-media2.fl.yelpcdn.com/bphoto/RACHXyNXQwUOyW6Y2HCkCg/o.jpg',
    'http://s3-media2.fl.yelpcdn.com/bphoto/lh4x2r8Du-GIjzLL3MxHag/o.jpg',
    'http://s3-media1.fl.yelpcdn.com/bphoto/fffT4yf4RaWQgcOKvmCeyA/o.jpg'
  ]
};

var hillstone = {
  id: '4',
  name: 'Hillstone',
  foodType: '',
  reviews: '589',
  distance: '0.1 Miles',
  address: '202 Wilshire Blvd., Santa Monica, CA 90401',
  city: 'Santa Monica',
  phone: '(310) 576-7558',
  pictures: [
    'http://s3-media1.fl.yelpcdn.com/bphoto/YrpdO5C8EPz67qW49BV9PA/o.jpg',
    'http://s3-media1.fl.yelpcdn.com/bphoto/Lw4IofZBvm8WabM5JfF-_w/o.jpg',
    'http://s3-media1.fl.yelpcdn.com/bphoto/qa0x9K9i0gA9Up5maH5DvQ/o.jpg',
    'http://s3-media1.fl.yelpcdn.com/bphoto/85sFD1_Vc91Buqou2zJhqA/o.jpg'
  ]
};

var wahoosfishtacos = {
  id: '5',
  name: 'Wahoo’s Fish Tacos',
  foodType: 'Mexican, Seafood',
  reviews: '233',
  distance: '0.08 Miles',
  address: '418 Wilshire Blvd., Santa Monica, CA 90401',
  city: 'Santa Monica',
  phone: '(310) 393-9125',
  pictures: [
    'http://s3-media1.fl.yelpcdn.com/bphoto/NcafUvzFhecBji6wigcRDw/o.jpg',
    'http://s3-media2.fl.yelpcdn.com/bphoto/tMVenWo1Z_HbFlQag_B03w/o.jpg',
    'http://s3-media1.fl.yelpcdn.com/bphoto/XJjSAjjVjcDsz-r3DqudRg/o.jpg',
    'http://s3-media1.fl.yelpcdn.com/bphoto/HU8IgAYOhvVEWDFWjAdmkg/o.jpg'
  ]
};

var vegetarian = {
  id: '1',
  name: 'Vegetarian restaurants',
  restaurants: ['1', '2','3']
};

var nonvegetarian = {
  id: '2',
  name: 'Non-vegetarian restaurants',
  restaurants: ['4', '5']
};

var data = {
  Category: { // More categories here (japanese, thai, greek, etc.)
    1: vegetarian,
    2: nonvegetarian
  },
  Restaurant: {
    1: zgarden,
    2: musharestaurant,
    3: aestus,
    4: hillstone,
    5: wahoosfishtacos,
  }
};

export function getCategory(id) {
  return data.Category[id];
}

export function getRestaurant(id) {
  return data.Restaurant[id];
}

export function getCategories(names) {
  return names.map(name => {
    if (name === 'vegetarian') {
      return vegetarian;
    }
    if (name === 'nonvegetarian') {
      return nonvegetarian;
    }
    return null;
  });
}
