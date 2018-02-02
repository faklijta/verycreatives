require 'time'
require 'date'

def rand_time
  Time.at(rand * Time.now.to_i)
end

people = [[2, 'matayo'], [1, 'nico'], [0, 'angelo'], [3, 'luca']]

logins = { # ugly on purpose
  0 => [rand_time, rand_time, rand_time, rand_time, rand_time, rand_time, rand_time, rand_time],
  1 => [rand_time, rand_time, rand_time, rand_time, rand_time, rand_time, rand_time, rand_time],
  2 => [rand_time, rand_time, rand_time, rand_time, rand_time, rand_time, rand_time, rand_time],
  3 => [rand_time, rand_time, rand_time, rand_time, rand_time, rand_time, rand_time, rand_time],
}

# Write your solution below. Keep above code intact.

h = people.to_h

a = logins.select{ |e| h.has_key?(e[0]) }.map { |e| [e, h[e[0]]] }
a.each{ |e| print e}
