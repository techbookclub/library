techbookclub's official site
===================

http://techbookclub.github.com/library/

**The beginning of an online archive of the techbookclub collective.**

Initially, a browsable archive of the material pursued by the San Francisco and New York City contingents.

Building the Site
-------------------
Make sure you have the "bundler" gem installed. Then run:

    bundle
    bundle exec ./build

Adding Books
--------------------
To add a book your club is reading, edit books.json. Add an entry under your club that contains a title and author, and the build script will attempt to find this on Readmill.

For reading material that can't be found on Readmill (or doesn't exist there, like our "course packets"), don't fret.  Just add a "custom_content" key to your entry, pointing to an object that mimics the Readmill format. The key pieces to include will look like this:

    "custom_content": {
    "book": {
      "title": "Mr. Penumbra's 24-Hour Bookstore: A Novel",
      "author": "Robin Sloan",
      "story": "A gleeful and exhilarating tale of global conspiracy.... ",
      "published_at": "",
      "permalink_url": "https://readmill.com/books/mr-penumbras-24-hour-bookstore-a-novel",
      "cover_url": "https://readmill-assets.s3.amazonaws.com/covers/d0ec737f9fbdc5de731f2bfedae9a763-medium.png?1349203108"
    }


The Future
-------------------

- Details about the collective's beginning
- Information on how to join the club
- Accounts for members to allow for:
  - A voting system to elect new material, a meeting time/date
  - Private downloads of copyrighted material
- An Amazon affiliates account to append to public links to bring in funds for snacks/drinks at meetings
