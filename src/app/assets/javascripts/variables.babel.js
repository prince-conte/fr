// Media queries (for example: xs, sm, md, lg, xl)
// Integer: mq.sm.int
// String:  Modernizr.mq(mq.sm.str);
createMq([
    ['xs',  767],
    ['sm',  768],
    ['md', 1420]
]);

const TRANSITION_DURATION_BASE = 200;

const $siteHeader = $('.js-site-header');
