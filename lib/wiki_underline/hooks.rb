class WikiUnderline::Hooks < Redmine::Hook::ViewListener
  render_on :view_layouts_base_html_head, :partial => "wiki_underline/base"
end