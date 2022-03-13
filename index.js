class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-z0-9-' '-]/gi, '');
  }

  static titleize(string) {
    const noCapList = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let modifiedString = string.split(' ').map(s => {
      if (!noCapList.includes(s)) {
        return Formatter.capitalize(s)
      } else {
        return s;
      }
    }).join(" ")
    return Formatter.capitalize(modifiedString);
  }
}