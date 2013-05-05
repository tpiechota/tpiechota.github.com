$(document).ready(function () {
    var $active,
    togglerSelector = '.item',
    toggledSelector = '.item-overlay',
    $items = $(togglerSelector),
    animationDuration = 300,
    activeClassName = 'active',
    activeStyle = {height: 158},
    notActiveStyle = {height: 0},

hideActive = function() {
    $active && $active
        .stop()
        .animate(notActiveStyle, function() {
            $(this).removeClass(activeClassName).hide();
        });
$active = void 0;
},

showActive = function($element) {
    $element && ($active = $element)
        .stop()
        .show()
        .animate(activeStyle)
        .addClass(activeClassName)
    };

$items.on('click', function(event) {
    var $this = $(this),
    $overlay = $this.children(toggledSelector),
    theSame = $overlay.is($active);
    hideActive();
    theSame || showActive($overlay);
    });
$(this).on('click', function(event) {
    var $target = $(event.target),
    isOutClick = !$target.closest(togglerSelector).length;
    isOutClick && hideActive();
    });
});
