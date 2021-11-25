function recursiva(max) {
    if (max >= 12417) return; //limite da callstack
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);