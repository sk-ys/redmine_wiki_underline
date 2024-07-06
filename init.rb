require_dependency File.expand_path('../lib/wiki_underline/hooks.rb', __FILE__)

Redmine::Plugin.register :redmine_wiki_underline do
  name 'Redmine Wiki Underline plugin'
  author 'sk-ys'
  description 'Add a button to jsToolBar to insert an `ins` tag.'
  version '0.0.1'
  url 'https://github.com/sk-ys/redmine_wiki_underline'
  author_url 'https://github.com/sk-ys'
end
