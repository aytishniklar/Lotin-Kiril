String.prototype.replaceAll = function(search, replacement){
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
function lotindan_kirilga(text){
    var lotin = text
    //Katta Harflar
    .replaceAll("A", "А")
    .replaceAll("B", "Б")
    .replaceAll("D", "Д")
    .replaceAll("E", "Э")
    .replaceAll("F", "Ф")
    .replaceAll("W", "Г")
    .replaceAll("H", "Ҳ")
    .replaceAll("I", "И")
    .replaceAll("J", "Ж")
    .replaceAll("K", "К")
    .replaceAll("L", "Л")
    .replaceAll("M", "М")
    .replaceAll("N", "Н")
    .replaceAll("&Ubrcy", "О")
    .replaceAll("P", "П")
    .replaceAll("R", "Р")
    .replaceAll("S", "С")
    .replaceAll("T", "Т")
    .replaceAll("U", "У")
    .replaceAll("V", "В")
    .replaceAll("X", "Х")
    .replaceAll("Y", "Й")
    .replaceAll("Z", "З")
    .replaceAll("O'", "Ў")
    .replaceAll("G‘", "Ғ")
    .replaceAll("SH", "Ш")
    .replaceAll("CH", "Ч")
    // .replaceAll("`", "Ъ")
    // Kichkina Harflar
    .replaceAll("a", "а")
    .replaceAll("b", "б")
    .replaceAll("d", "д")
    .replaceAll("e", "э")
    .replaceAll("f", "ф")
    .replaceAll("\u0067", "г")
    .replaceAll("h", "ҳ")
    .replaceAll("i", "и")
    .replaceAll("j", "ж")
    .replaceAll("k", "к")
    .replaceAll("l", "л")
    .replaceAll("m", "м")
    .replaceAll("n", "н")
    .replaceAll("&ubrcy", "о")
    .replaceAll("p", "п")
    .replaceAll("r", "р")
    .replaceAll("s", "с")
    .replaceAll("t", "т")
    .replaceAll("u", "у")
    .replaceAll("v", "в")
    .replaceAll("x", "х")
    .replaceAll("y", "й")
    .replaceAll("z", "з")
    .replaceAll("o'", "ў")
    .replaceAll("g'", "ғ")
    .replaceAll("sh", "ш")
    .replaceAll("ch", "ч")
    // .replaceAll("`", "ъ")
    return lotin;
}
function tarjima(){
    var input = document.getElementById("lotinmatn").value;
    var output = document.getElementById("kirilmatn").innerHTML = lotindan_kirilga(input);
}