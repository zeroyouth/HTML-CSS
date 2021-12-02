function reverse(text) {
    text += ''
    if(text.length <= 1) {
        return text
    }
    return reverse(text.slice(1))+text[0] //1부터 끝까지 잘라라
}

console.log(reverse('hello'));
// reverse('hello') == reverse('ello') + 'h' == 'olle' + 'h'
// reverse('ello') == reverse('llo') + 'e' == 'oll' + 'e'
// reverse('llo') == reverse('lo') + 'l' == 'ol' + 'l'
// reverse('lo') == reverse('o') + 'l' == 'o' + 'l'
// reverse('o') == 'o'