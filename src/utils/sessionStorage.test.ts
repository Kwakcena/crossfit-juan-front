import { saveItem, getItem, deleteItem } from './sessionStorage';

describe('sessionStorage 테스트', () => {
  const KEY = 'mykey', VALUE = 'value';

  beforeEach(() => {
    window.sessionStorage.clear();
    jest.clearAllMocks();
    (sessionStorage.setItem as jest.Mock).mockClear();
  });

  describe('getItem', () => {
    describe('key값이 sessionStorage 에 없으면', () => {
      const KEY = 'emptykey';

      it("빈 문자열을 return 한다", () => {
        const data = getItem(KEY);

        expect(data).toBe('');
      });
    });

    describe('key값이 sessionStorage 에 있으면', () => {
      it("해당 값을 return 한다", () => {
        saveItem(KEY, VALUE);

        const data = getItem(KEY);

        expect(sessionStorage.getItem).toHaveBeenLastCalledWith(KEY);
        expect(sessionStorage.__STORE__[KEY]).toBe(JSON.stringify(VALUE));

        expect(data).toEqual(VALUE);
      });
    });
  });

  describe('saveItem', () => {
    it('value를 저장하고 저장한 데이터를 return 한다.', () => {
      const data = saveItem(KEY, VALUE);

      expect(sessionStorage.setItem).toHaveBeenLastCalledWith(
        KEY, JSON.stringify(VALUE),
      );
      expect(sessionStorage.getItem).toHaveBeenLastCalledWith(KEY);

      expect(data).toEqual(VALUE);
    });
  });

  describe('deleteItem', () => {
    it('삭제하고자 하는 KEY의 VALUE 값을 삭제한다', () => {
      saveItem(KEY, VALUE);

      expect(sessionStorage.__STORE__[KEY]).toBe(JSON.stringify(VALUE));

      deleteItem(KEY);

      expect(sessionStorage.removeItem).toHaveBeenLastCalledWith(KEY);
      expect(sessionStorage.__STORE__[KEY]).toBeUndefined();
    });
  });
});
