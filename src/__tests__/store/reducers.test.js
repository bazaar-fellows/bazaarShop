import reducer from '../../redux/reducers';

describe('Reducer', () => {

    it('should return the initial state', () => {
        let initialState = {
            cart: [],
            colorTheme: 'light'
        };
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it("should handle UPDATECART", () => {
        let expectedState = { cart: [50], colorTheme: 'light' };
        expect(
          reducer(
            undefined,
            {
              type: "UPDATECART",
              payload: 50
            }
          )
        ).toEqual(expectedState);
      });

      it('should clear cart', () => {
        let initialState = {
          cart: [],
          colorTheme: 'light'
      };
        let cartState = { cart: [50], colorTheme: 'light' };
        expect(
          reducer(
            cartState,
            {
              type: "CLEARCART"
            }
          )
        ).toEqual(initialState);
      });

      it('should change theme color', () => {
      let expectedState = { cart: [], colorTheme: 'light' };
      expect(
        reducer(
          undefined,
          {
            type: 'CHANGECOLORTHEME',
            payload: {color: 'light'}
          }
        )
      ).toEqual(expectedState);
      });

    it("should handle UPDATECART", () => {});
    it("should handle CLEARCART", () => {});
    it("should handle CHANGECOLORTHEME", () => {});
    it("should handle DELETECARTITEM", () => {});

});