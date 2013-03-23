require File.join(File.dirname(__FILE__) + '/ext.rb')
require 'httparty'

CLIENT_ID = "816981c8deb50ddeae9502182e683b1e"

clubs = JSON.load(File.read("books.json"))
readmillified = clubs.clone
# resp = `curl https://api.readmill.com/v2/books/match?title=#{book['title']}&author=#{book['author']}&client_id=#{CLIENT_ID}`

clubs.each_with_index do |club, index|
  club["books"].each do |book|
    readmill_response = HTTParty.get "https://api.readmill.com/v2/books/match", :query => {
      "title" => book['title'], "author" => book['author'], "client_id" => CLIENT_ID
    }

    if readmill_response.code == 200
      puts "Successfully found #{book['title']} on Readmill"
      readmillified[index]['readmill_books'] ||= []
      readmillified[index]['readmill_books'].push(JSON.parse(readmill_response.body))
    else
      puts "Trouble finding #{book['title']} on Readmill"
      puts readmill_response.inspect
    end
    puts
  end
end

File.open "books_with_metadata.json", "w" do |file|
  file.jj(readmillified)
end
