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

function CheckComplete() {
    i=1;
    while (i < 9) {
        if (document.all['b'+ i].value == (' ' + i + ' ')) i = i + 1;
        else return;
    }
    alert('축하합니다.');
    complete = true;
}
function Move(pos, value) {
    if (complete == ture) return;
    if ( (pos % 3) == 2 || (pos % 3) == 0) {
        newpos = parselnt(pos) - 1;
        if (document.all['b' + newpos].value == ' x') {
            tempvalue = document.all['b'+newpos].value;
            document.all['b'+newpos].value = value;
            document.all['b'+pos].value = tempvalue;
            CheckComplete();
            return;
        }
    }
    if ( (pos % 3) == 1 || (pos % 3) == 2) {
        newpos = parselnt(pos) + 1;
        if (document.all['b' + newpos].value == ' x') {
            tempvalue = document.all['b'+newpos].value;
            document.all['b'+newpos].value = value;
            document.all['b'+pos].value = tempvalue;
            CheckComplete();
            return;
        }
    }
    if (parseInt(pos) > 3) {
        newpos = parselnt(pos) - 3;
        if (document.all['b' + newpos].value == ' x') {
            tempvalue = document.all['b'+newpos].value;
            document.all['b'+newpos].value = value;
            document.all['b'+pos].value = tempvalue;
            CheckComplete();
            return;
        }
    }
    if (parseInt(pos) < 7) {
        newpos = parselnt(pos) + 3;
        if (document.all['b' + newpos].value == ' x') {
            tempvalue = document.all['b'+newpos].value;
            document.all['b'+newpos].value = value;
            document.all['b'+pos].value = tempvalue;
            CheckComplete();
            return;
        }
    }
}