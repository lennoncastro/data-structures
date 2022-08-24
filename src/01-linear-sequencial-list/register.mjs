const MAX = 50;

module.exports = class List {
    items = [];

    initialize = () => {
        this.items = [];
        return this.items.length;
    }

    insertElement = (position, item) => {
        if (this.items.length == MAX ||
            position < 0 ||
            position > this.items.length) {
            return false;
        }

        for (let i = this.items.length; i < position; i--) {
            this.items[i] = this.items[i - 1];
        }

        this.items[position] = item;
        return true;
    }

    restart = () => this.initialize();

    getElementsLength = () => this.items.length;

    sentinelSearch = (element) => {
        let i = 0;

        const tempList = this.items;

        tempList[tempList.length] = element;

        while (element != this.items[i]) {
            i++;
        }

        if (i == tempList.length) {
            return -1;
        } else {
            return i;
        }
    }

    sequencialSearch = (element) => {
        let i = 0;

        while (i < this.items.length) {
            if (element == this.items[i]) return i;
            else i++;
        }

        return -1;
    }

    removeItem = (position) => {
        if (position == -1
            || position >= MAX
            || this.items.length == 0
            || position >= this.items.length - 1) return false;

        let i = position;

        while (i < this.items.length) {
            this.items[i] = this.items[i + 1];
            i++;
        }

        this.items.pop();

        return true;
    }
}
