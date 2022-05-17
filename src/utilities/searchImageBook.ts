export const searchImageBook = (array: { uri: string }[]) => {
  let imageBook;

  array.map((item) => {
    const itemLength = item.uri.length;
    const itemExtension = item.uri.substring(itemLength - 10, itemLength);
    return itemExtension === 'medium.jpg' ? (imageBook = item.uri) : null;
  });

  return imageBook;
};
