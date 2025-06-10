// getTitle.js is a custom Handlebars helper that extracts the corresponding title field value based on the field key. 
// It is usually used to dynamically generate titles in components.

// name.replace(/\D/g, ""):   remove all non-numeric characters in the field name, such as "field_01" → "01"
// obj['title_' + index]:     concatenate into the field name "title_01", find this field from data
// then return its .value
module.exports = function (obj,name) {
    var index = name.replace(/\D/g, "");
    return obj['title_' + index].value;
};
