 $(function() {
  if($('body.controller-issues.action-show').length) {

    var text_field_focused = function(e) {
      tag = e.target.tagName.toLowerCase();
      return jQuery.inArray(tag, ['input', 'textarea']) != -1
    }

    var edit_issue = function(e) {
      if(!text_field_focused(e) && !$('#update').is(':visible')) {
        e.preventDefault();
        $('a[accesskey="e"]').trigger('click');
        return false;
      }
    }

    var trigger_save = function(e) {
      if($('#update').is(':visible')) {
        window.onbeforeunload = null;
        $('#issue-form').submit();
        e.preventDefault();
        return false;
      }
    }

    KeyboardJS.on('e', edit_issue);
    KeyboardJS.on('super+s', trigger_save);
    KeyboardJS.on('ctrl+s', trigger_save);
    KeyboardJS.on('super+enter', trigger_save);
    KeyboardJS.on('ctrl+enter', trigger_save);
  }
});
