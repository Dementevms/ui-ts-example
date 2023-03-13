import React from 'react';

var Typography = function (_a) {
    var color = _a.color, children = _a.children;
    return React.createElement("div", { style: { color: color } }, children);
};

var Button = function (_a) {
    var size = _a.size;
    return React.createElement("div", { className: size },
        React.createElement(Typography, { color: "green" }, "Hello World"));
};

export { Button };
//# sourceMappingURL=index.js.map
