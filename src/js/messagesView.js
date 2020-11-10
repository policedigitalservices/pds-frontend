/**
 *  USAGE: To use this control you must add the following attribute to the button that should be doing the show all.
 *
 *  data-showall-table-id="<<id of table to be effected>>"
 *
 *  OPTIONAL: Use the following attrtibutes to adjust the behavior
 *
 *  data-showall-item-limit="20" - sets the number of items to show initially.  Default is 10
 *
 */

if(document.body.contains(document.querySelector(".dark-mode"))){
window.scrollTo(0,document.querySelector(".dark-mode").scrollHeight);
};
