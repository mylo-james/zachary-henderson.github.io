const colorScheme = document.getElementsByClassName('color-scheme');
const test = document.getElementsByClassName('test');
const testText = document.getElementsByClassName('test__text');
const testAccent = document.getElementsByClassName('test__accent');
colorScheme[0].addEventListener((event) => {
  const div = event.target;
  const testColor = div.textColor;
  const testAccent = div.testColor;
  const testText = dive.testText || 'ecedf1';
});
