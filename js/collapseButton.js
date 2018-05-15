function hide() {
    var group = $("#otherSkills");
    var button = $("#collapseButton1");

    group.collapse("toggle");

    if (button.is(":visible")) {
        button.hide();
    } else {
        button.show();
    }

}