import * as Character from './Character';

export type t = {
  focusOfAttention: {
    extraversion: Character.t;
    introversion: Character.t;
  };
  recognition: {
    sensing: Character.t;
    intuition: Character.t;
  };
  nature: {
    thinking: Character.t;
    feeling: Character.t;
  };
  lifeStyle: {
    judging: Character.t;
    perceiving: Character.t;
  };
};
