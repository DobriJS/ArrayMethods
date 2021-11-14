// isAllUpper
function isAllUpper(text: string): boolean {
    return text.toUpperCase() ==  text && text.replace(/[^a-zA-Z]/g, '').length > 0;
 }
// isAllUpper('ALL UPPER') == true
// isAllUpper('all lower') == false