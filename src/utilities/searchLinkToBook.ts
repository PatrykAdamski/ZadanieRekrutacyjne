export const searchLinkToBook = (array: { uri: string }[]) => {
  let linkToBook;

  array.map((item) => {
    const itemLength = item.uri.length;
    const itemExtension = item.uri.substring(itemLength - 3, itemLength);
    return itemExtension === 'htm' ? (linkToBook = item.uri) : null;
  });

  return linkToBook;
};
