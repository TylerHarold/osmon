const jQuery = require('jquery');

module.exports = {
    toggleDisplay: (element) => {
        return $(element).css('display') === "none" ? $(element).css('display', 'block') : $(element).css('display', 'none');
    }
}