// HEX
function isHEX(hexCode: string) {
  if (hexCode.search(/^#([A-Fa-f0-9]{6,8}|[A-Fa-f0-9]{3})$/) !== -1) {
    return true;
  }
  return false;
}
export class HEX extends String {
  constructor(color: String) {
    super(color);
  }
}

// RGB
function isRGB(color: string) {
  if (color.search(/^(rgb)\(\s?([0-9]{2,3}%?,?\s?){3}\)$/) !== -1) {
    return true;
  }
  return false;
}

export class RGB extends String {
  constructor(color: String) {
    super(color);
  }
}
// RGBA
function isRGBA(color: string) {
  const re =
    /^(rgba)\(\s?([0-9]{2,3}%?,?\s?){3}((1|0\.?[0-9]+)|([0-9]{1,3}%))+\)$/;

  if (color.search(re) !== -1) {
    return true;
  }
  return false;
}
export class RGBA extends String {
  constructor(color: String) {
    super(color);
  }
}

// HSL
function isHSL(color: string) {
  const re =
    /^(hsl).[0-9]{1,3},.?([0-9]{1,3}%,?.?){2}(([0-9]{1,3}%)|(1|0.[0-9]+))?\)$/;
  if (color.search(re) !== -1) {
    return true;
  }
  return false;
}
export class HSL extends String {
  constructor(color: String) {
    super(color);
  }
}

// UnknownColorCode
export class UnknownColorCode extends String {
  constructor(color: String) {
    super(color);
  }
}

export function isColorCode(color: string) {
  switch (true) {
    case isHEX(color):
      return new HEX(color);
    case isRGB(color):
      return new RGB(color);
    case isRGBA(color):
      return new RGBA(color);
    case isHSL(color):
      return new HSL(color);
  }

  return new UnknownColorCode(color);
}
