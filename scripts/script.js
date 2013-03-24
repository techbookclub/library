/* Author:

*/

var techbookclub = techbookclub || {}

!function (exports) {
  
  var Books = {}
    , mixins = {}
  
  exports.init = function () {
    Books = techbookclub.books();
    Books.init();
  }
  
  exports.extend = function (obj) {
    var args = Array.prototype.slice.call(arguments, 1)
      , l = args.length
      , i = 0
      , prop
      , source

    for (; i < l; i++) {
      source = args[i]
      for (prop in source) {
        if (source[prop] !== void 0) {
          obj[prop] = source[prop]
        }
      }
    }

    return obj
  }
  
  !function (exports) {
      exports.base = {
        init: function () {}
      }
  }(mixins);
  
  !function (exports) {
    
    var Books = function () {
      
      this.templates = {
          book: Hogan.compile('<li class="book-info"><h4 class="author">{{author}}</h4><h3 class="title">{{title}}</h3><p class="desc">{{desc}}</p><ul class="metadata"><li class="date"><a href="#">{{date}}</a></li><li class="meeting"><a href="{{url_rsvp}}">RSVP</a></li><li class="amazon"><a href="{{url_amazon}}">Purchase</a></li><li class="library"><a href="{{url_library}}">Loan</a></li><li class="download"><a href="{{url_download}}">Download</a></li></ul></li>')
        , cover: Hogan.compile('<li class="book-cover"><img src="img/{{url_cover}}" /></li>')
      };
      
      this.data = [
        {
          title: "How To Do Things With Video Games"
        , author: "Ian Bogost"
        , desc: "Cosmic fugue permanence of the stars decipherment Vangelis finite but unbounded sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium quis nostrum exercitationem ullam corporis suscipit laboriosam tingling of the spine inconspicuous motes of rock and gas muse about, a very small stage in a vast cosmic arena from which we spring, laws of physics galaxies lorem ipsum dolor sit amet sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium quis nostrum exercitationem ullam corporis suscipit laboriosam."
        , date: "March 2012"
        , url_cover: "bogost_videogames.jpg"
        , url_meeting: "#"
        , url_amazon: "#"
        , url_library: "#"
        , url_download: "#"
        }

      , {
          title: "Fordlandia: The Rise and Fall of Henry Ford's Forgotten Jungle City"
        , author: "Greg Grandin"
        , desc: "Cosmic fugue permanence of the stars decipherment Vangelis finite but unbounded sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium quis nostrum exercitationem ullam corporis suscipit laboriosam tingling of the spine inconspicuous motes of rock and gas muse about, a very small stage in a vast cosmic arena from which we spring, laws of physics galaxies lorem ipsum dolor sit amet sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium quis nostrum exercitationem ullam corporis suscipit laboriosam."
        , date: "January 2012"
        , url_cover: "grandin_fordlandia.jpg"
        , url_meeting: "#"
        , url_amazon: "http://www.amazon.com/Fordlandia-Henry-Forgotten-Jungle-ebook/dp/B002LA09O4/"
        , url_library: "#"
        , url_download: "#"
        }
      , {
          title: "Design Patterns Reader"
        , author: "Christopher Alexander, et al"
        , desc: "Cosmic fugue permanence of the stars decipherment Vangelis finite but unbounded sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium quis nostrum exercitationem ullam corporis suscipit laboriosam tingling of the spine inconspicuous motes of rock and gas muse about, a very small stage in a vast cosmic arena from which we spring, laws of physics galaxies lorem ipsum dolor sit amet sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium quis nostrum exercitationem ullam corporis suscipit laboriosam."
        , date: "October 2011"
        , url_cover: "tbc_patternsreader.jpg"
        , url_meeting: "#"
        , url_amazon: "#"
        , url_library: "#"
        , url_download: "http://dl.dropbox.com/u/534636/Patterns%20Reader%20-%20Tech%20Book%20Club.pdf"
        }
      , {
          title: "The Filter Bubble: What the Internet is Hiding From You"
        , author: "Eli Pariser"
        , desc: "Cosmic fugue permanence of the stars decipherment Vangelis finite but unbounded sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium quis nostrum exercitationem ullam corporis suscipit laboriosam tingling of the spine inconspicuous motes of rock and gas muse about, a very small stage in a vast cosmic arena from which we spring, laws of physics galaxies lorem ipsum dolor sit amet sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium quis nostrum exercitationem ullam corporis suscipit laboriosam."
        , date: "July 2011"
        , url_cover: "pariser_filterbubble.jpg"
        , url_meeting: "#"
        , url_amazon: "http://www.amazon.com/Filter-Bubble-What-Internet-Hiding/dp/1594203008/"
        , url_library: "#"
        , url_download: "#"
        }
      , {
          title: "Powering the Dream: The History and Promise of Green Technology"
        , author: "Alexis Madrigal"
        , desc: "Cosmic fugue permanence of the stars decipherment Vangelis finite but unbounded sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium quis nostrum exercitationem ullam corporis suscipit laboriosam tingling of the spine inconspicuous motes of rock and gas muse about, a very small stage in a vast cosmic arena from which we spring, laws of physics galaxies lorem ipsum dolor sit amet sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium quis nostrum exercitationem ullam corporis suscipit laboriosam."
        , date: "May 2011"
        , url_cover: "madrigal_greentech.jpg"
        , url_meeting: "#"
        , url_amazon: "http://www.amazon.com/Powering-Dream-History-Promise-Technology/dp/B006CDDHOK/"
        , url_library: "#"
        , url_download: "#"
        }
      ];
    }
    
    Books.prototype = techbookclub.extend({}, mixins.base)
    
    Books.prototype.init = function () {
      
      this.window = {
        height: $(window).height()
      , width: $(window).width()
      }
      
      this.config = {
        offset: .6
      , margin_right:   this.window.width * .75
      , margin_bottom:  this.window.height/2
      , width:          this.window.width + 500
      , friction: .50
      };
            
      this.books_container  = $('ol.list-books')
      this.covers_container = $('ol.list-covers')

      for (var i=0; i<this.data.length; i++) {
        this.books_container.append(this.templates.book.render(this.data[i]))
        this.covers_container.append(this.templates.cover.render(this.data[i]))
      };
      
      this.books  = this.books_container.find('li.book-info')
      this.covers = this.covers_container.find('li.book-cover')
      
      this.covers_container.css('width', this.covers.length * this.config.width)
      this.covers.css('marginRight', this.config.margin_right)
                 .last().css('marginRight', '0')
      
      this.slider_vertical   = $('.vertical-slider')
      this.slider_horizontal = $('.horizontal-slider')
      this.content = {
        height: this.slider_vertical.height()
      , width: this.slider_horizontal.width()
      }

      this.books.css('marginBottom', this.config.margin_bottom)
                .last().css('marginBottom', this.config.margin_bottom/2);

      $(document).scroll($.proxy(function () {

        var curr_y      = $(document).scrollTop()
          , curr_offset = curr_y/(this.content.height - this.window.height)
          , curr_x      = this.content.width * curr_offset * this.config.friction
          , target      = this.window.width * this.config.offset - curr_x

        console.log(curr_offset, curr_y, this.content.height)

        this.slider_horizontal.css('left', target);

      }, this))
    }
    
    
    exports.books = function () {
      return new Books();
    }
  }(techbookclub)
  
}(techbookclub);

$(document).ready(function () {
  techbookclub.init();
});




