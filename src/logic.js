//Created by Judds Wells 6/10/26

export class Logic {
    setCheck = (x0, i0, depth) => {
        let x = x0;
        let i = i0;
        let range = 0

        for (range; range < depth; range++) {
            if (Math.sqrt(x * x + i * i) > 2) {
                return range;
            }
            let tempx = x0 + x * x - i * i;
            let tempi = i0 + 2 * (x * i);
            x = tempx;
            i = tempi;
        }
        return range;
    }
}