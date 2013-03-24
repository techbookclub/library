require "pp"
require "json"

unless Kernel.respond_to? :require_relative
  module Kernel
    def require_relative(path)
      require File.join(File.dirname(caller[0]), path.to_str)
    end
  end
end

class File
  def pp(*objs)
    objs.each {|obj|
      PP.pp(obj, self)
    }
    objs.size <= 1 ? objs.first : objs
  end
  def jj(*objs)
    objs.each {|obj|
      obj = JSON.parse(obj.to_json)
      self.puts JSON.pretty_generate(obj)
    }
    objs.size <= 1 ? objs.first : objs
  end
end