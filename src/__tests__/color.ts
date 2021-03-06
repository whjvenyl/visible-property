import fs from 'fs';

import manifest from '../../manifest.json';
import { colorNumberToHex, rgbToHex, colorToHex} from '../plugin/colorUtility';

describe('build script', () => {
  it('colorNumberToHex should convert one color to Hex', async() => {
    expect(colorNumberToHex(0.7124999761581421)).toBe("b6");
    expect(colorNumberToHex(0.0860937237739563)).toBe("16");
    expect(colorNumberToHex(0.00677083432674408)).toBe("02");
    expect(colorNumberToHex(0.0625)).toBe("10");
  });

  it('rgbToHex should convert R G B to #color ', async() => {
    expect(rgbToHex(0.5098039507865906, 0.5098039507865906, 0.5098039507865906)).toBe("#828282");
    expect(rgbToHex(0.7124999761581421, 0.0860937237739563, 0.00677083432674408)).toBe("#b61602");
  });  

});
