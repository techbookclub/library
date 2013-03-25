var Bookshelf = function () {
  var self = this,
      $books,
      $navLeft,
      $navRight,
      shelfWidth,
      booksPos,
      booksWidth,
      maxOffset,
      newPos = 0;

  this.init = function () {
    $books = $('.shelf .books');
    $navLeft = $('.nav-left');
    $navRight = $('.nav-right');
    booksWidth = ($books.find('li').length * 70);
    $books.width(booksWidth);
    shelfWidth = $('.shelf').width();
    maxOffset = shelfWidth - booksWidth;
    console.log('max offset: ' + maxOffset);

    $('.nav-left').on('click', function(e) {
      slide(-350);
    });

    $('.nav-right').on('click', function(e) {
      slide(350);
    });

    // update visibility of nav on load
    if (booksWidth > shelfWidth) {
      slide(0);
    }
  };

  this.slide = function (shiftOffset) {
    booksPos = Number($books.css('right').slice(0,-2));

    if (booksPos + shiftOffset < 0 && booksPos + shiftOffset > maxOffset) {
      newPos = '+='+shiftOffset;
      $navLeft.fadeIn();
      $navRight.fadeIn();
    } else if ((booksPos + shiftOffset) >= 0) {
      newPos = 0;
      $navLeft.fadeIn();
      $navRight.fadeOut();
    } else if ((booksPos + shiftOffset) < maxOffset) {
      newPos = maxOffset - 40;
      $navLeft.fadeOut();
      $navRight.fadeIn();
    }


    $books.animate({'right': newPos});
  };

  this.hide = function () {
    $('header').removeClass('fixed-hover');
  };

  return {
    init: init
  }
}();