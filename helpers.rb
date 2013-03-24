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

  def book_filename(root, book_hash)
    date_read = book_hash['date_read']
    slug = to_slug(book_hash['title'])
    "#{root}/#{date_read}-#{slug}.md"
  end
end