import React, { useState, useEffect } from 'react';

var Input = function (_a) {
    var className = _a.className, externalValue = _a.value, onChange = _a.onChange;
    var _b = useState(), value = _b[0], setValue = _b[1];
    useEffect(function () {
        if (externalValue !== undefined && String(externalValue) !== value) {
            setValue(externalValue);
        }
    }, [externalValue]);
    useEffect(function () {
        if (value !== undefined && onChange) {
            onChange(String(value));
        }
    }, [value]);
    function handleChange(event) {
        setValue(event.target.value);
    }
    return React.createElement("input", { className: className, value: value, onChange: handleChange });
};

export { Input };
//# sourceMappingURL=index.js.map
