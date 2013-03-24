#!/usr/bin/env ruby
PROJECT_ROOT = File.dirname(__FILE__)
require File.join(PROJECT_ROOT + '/ext.rb')
require_relative 'helpers'

CLIENT_ID = "816981c8deb50ddeae9502182e683b1e"

task :build_book_metadata do
  require 'httparty'

  clubs = JSON.load(File.read("books.json"))
  readmillified = clubs.clone


  clubs.each_with_index do |club, index|
    club["books"].each do |book|
      readmill_object = nil

      if book["custom_content"]
        readmill_object = book["custom_content"]
      else
        readmill_response = HTTParty.get "https://api.readmill.com/v2/books/match", :query => {
          "title" => book['title'], "author" => book['author'], "client_id" => CLIENT_ID
        }
        if readmill_response.code == 200
          puts "Successfully found #{book['title']} on Readmill"
          readmill_object = JSON.parse(readmill_response.body)

          readmill_object['book']['cover_url'].gsub! /-medium\./, '-original.'
        else
          puts and "Trouble finding #{book['title']} on Readmill. Try putting the data you want in a books.json custom_response field?"
          puts readmill_response.inspect
          next
        end
      end
      readmill_object['book'].merge! :club => club['location'], :date_read => book['date']
      readmillified[index]['readmill_books'] ||= []
      readmillified[index]['readmill_books'].push(readmill_object['book'])
    end
  end

  File.open "books_with_metadata.json", "w" do |file|
    file.jj(readmillified)
  end
end

task :build_markdown do
  require 'mustache'
  include Helpers

  book_data = JSON.parse(File.read('books_with_metadata.json'))
  markdown_template = File.read('markdown_template.mustache')

  book_data.each do |club|
    pp club['readmill_books'].first
    puts
    club['readmill_books'].each do |book|
      File.open book_filepath(PROJECT_ROOT, book), 'w' do |file|
        file << Mustache.render(markdown_template, book)
      end
    end
  end

end
