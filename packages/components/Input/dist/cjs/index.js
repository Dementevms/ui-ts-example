'use strict';

var React = require('react');

var Input = function (_a) {
    var className = _a.className, externalValue = _a.value, onChange = _a.onChange;
    var _b = React.useState(), value = _b[0], setValue = _b[1];
    React.useEffect(function () {
        if (externalValue !== undefined && String(externalValue) !== value) {
            setValue(externalValue);
        }
    }, [externalValue]);
    React.useEffect(function () {
        if (value !== undefined && onChange) {
            onChange(String(value));
        }
    }, [value]);
    function handleChange(event) {
        setValue(event.target.value);
    }
    return React.createElement("input", { className: className, value: value, onChange: handleChange });
};

exports.Input = Input;
//# sourceMappingURL=index.js.map
