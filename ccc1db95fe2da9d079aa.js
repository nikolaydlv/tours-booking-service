/* eslint-disable no-undef */
/* eslint-disable new-cap */
const destinationList = [
  'Москва',
  'Санкт-Петербург',
  'Сочи',
  'Казань',
  'Анапа',
  'Геленджик',
  'Пятигорск',
  'Петрозаводск',
  'Суздаль',
  'Углич',
  'Мышкин',
  'Тутаев',
  'Тула',
  'Коломна',
  'Кострома',
  'Нижний Новгород',
  'Волгоград',
];

const autoCompleteJS = new autoComplete({
  selector: '#location',
  placeHolder: 'Выберите направление',
  data: {
    src: destinationList,
    cache: true,
  },
  resultItem: {
    highlight: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },
  resultsList: {
    maxResults: 15,
  },
  searchEngine: 'strict',
});
