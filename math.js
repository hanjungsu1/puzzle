complete = true;
tempary = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1);
j = 0;
function ClearStatus() {
    for(i=0;i<9;i++) tempary[i] = -1;
    i=0;
    while (i<9) {
        j = (parselnt(Math.random()*9) + j) % 9
        k = 0;
        while (tempary[k] != j && k < i) k = k + 1;
        if (k == i) {
            tempary[i] = j;
            i = i + 1;
        }
    }
    for(i=0;i<9;i++) {
        k = i + 1;
        if (tempary[1] == 0) document.all['b'+k].value = ' x ';
        else document.all['b'+k].value = ' ' + tempary[i] + ' ';
    }
    complete = false;
}