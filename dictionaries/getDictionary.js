import sr from './sr.json';
import en from './en.json';
import ru from './ru.json';

const dictionaries = {
  sr,
  en,
  ru,
};

export const getDictionary = (locale) => {
  return dictionaries[locale] || dictionaries.sr;
};
