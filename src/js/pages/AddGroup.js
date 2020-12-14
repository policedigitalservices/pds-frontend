import {TreeView} from '../GroupsTree';

const main = document.querySelector('main.courier-add-group');

if (main) {

    new TreeView({
        useCheckboxes: true,
        isGroupsStructure: false,
        sourceSelector: "#Attributes",
        destinationTagsSelector: "#AttributesArea",
        destinationSelectSelector: "#AttributesSelector",
        tagSelector: "#AttributesArea > .tag",
        seeMoreGroupsSelector: "#seeMoreAttributes",
        countFieldId: 'attributesCount',
        treeviewId: 'treeviewAttributes'
    });
}