module Helpers
  def to_slug(string)
    # Perform transliteration to replace non-ascii characters with an ascii
    # character
    value = string.gsub(/[^\x00-\x7F]/n, '').to_s

    # Remove single quotes from input
    value.gsub!(/[']+/, '')

    # Replace any non-word character (\W) with a space
    value.gsub!(/\W+/, ' ')

    # Remove any whitespace before and after the string
    value.strip!

    # All characters should be downcased
    value.downcase!

    # Replace spaces with dashes
    value.gsub!(' ', '-')

    # Return the resulting slug
    value
  end

  def format_book_date(datestring)
    DateTime.strptime(datestring, "%m-%d-%Y").strftime("%Y-%m-%d")
  end

  def book_filepath(root, book_hash)
    club = book_hash['club']
    date_read = format_book_date(book_hash['date_read'])
    slug = to_slug(book_hash['title'])

    "#{root}/_posts/#{club}/books/#{date_read}-#{slug}.md"
  end
end