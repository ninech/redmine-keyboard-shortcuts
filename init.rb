require 'redmine'

class Hooks < Redmine::Hook::ViewListener
  render_on :view_issues_show_details_bottom,
    :partial => 'keyboard_shortcuts/assets',
    :layout => false
end

Redmine::Plugin.register :keyboard_shortcuts do
  name 'Keyboard Shourtcuts'
  author 'nine.ch'
  description 'Simple plugin that adds keyboard shortcuts to edit and save issues'
  version '1.0.0'
  url 'http://github.com/ninech/redmine_keyboard_shortcuts'
  author_url 'http://nine.ch'
end
