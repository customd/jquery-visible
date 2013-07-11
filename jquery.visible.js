(function($){

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       only accounts for vertical position, not horizontal.
     */
    $.fn.visible = function(partial,hidden,direction){

        var $t              = $(this).eq(0),
            t               = $t.get(0),
            $w              = $(window),
            viewTop         = $w.scrollTop(),
            viewBottom      = viewTop + $w.height(),
            viewLeft        = $w.scrollLeft(),
            viewRight       = viewLeft + $w.width(),
            _top            = $t.offset().top,
            _bottom         = _top + $t.height(),
            _left           = $t.offset().left,
            _right          = _left + $t.width(),
            compareTop      = partial === true ? _bottom : _top,
            compareBottom   = partial === true ? _top : _bottom,
            compareLeft     = partial === true ? _right : _left,
            compareRight    = partial === true ? _left : _right,
            clientSize      = hidden === true ? t.offsetWidth * t.offsetHeight : true,
            direction       = (direction) ? direction : 'both';

        if(direction === 'both')
            return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        else if(direction === 'vertical')
            return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
        else if(direction === 'horizontal')
            return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
    };

})(jQuery);