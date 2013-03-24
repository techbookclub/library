function hideHeader() {
  document.querySelector('header').classList.remove('fixed-hover');
}

function main() {
  document.querySelector('header').classList.add('floating');
  document.querySelector('header').classList.add('fixed-hover');
}