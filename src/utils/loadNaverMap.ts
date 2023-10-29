import { O, pipe } from '@mobily/ts-belt';

export const loadNaverMap = () => {
  pipe(
    document.getElementById('naverMap'),
    O.tap((naverMap) => new naver.maps.Map(naverMap)),
  );
};
