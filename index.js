var rewrite = require('knockout-arrows');

module.exports = function (str) {
	if (this.cacheable) {
		this.cacheable();
	}
	
	var template = rewrite(str);
	var out = [str];

	// re-assign module.exports

	out.push('module.exports = ' + template + ';');

	return out.join('\n');
};

