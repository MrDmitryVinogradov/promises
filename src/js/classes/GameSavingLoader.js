import read from '../modules/reader'

import json from '../modules/parser'

import GameSaving from './GameSaving'

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result)
        .then((resolve) => {
          const data = JSON.parse(resolve);
          return new GameSaving(data);
        }));
  }
}
