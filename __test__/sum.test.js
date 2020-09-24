const { ExpansionPanelActions } = require("@material-ui/core");

function sum(a,b) {
    return a+b;
}

test('should add two numbers', () => {
    expect(sum(1,3)).toBe(4);
})
