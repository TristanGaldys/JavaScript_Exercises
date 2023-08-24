/*
    This Scripts goal is to solve the problem

    Create a data structure that implements the requirements of a Least Recently Used (LRU) cache with O(1) average time complexity.

    Initialize an object with a maxium capacity of elements.
    getItem Return the value of the key. Update cache with the most recently used key.
    putItem Create or update a key value pair in the cache. Evict the least recently used key if the size of keys exceeds the max capacity.

*/

export class LRU{
    constructor(capacity){
        this.capacity
        this.cache = new Map();
    }

    getItem(key){
        const item = this.cache.get(key)

        if (item){
            this.cache.delete(key)
            this.cache.set(key, item)
        }

        return item
    }

    putItem(key, value){
        if (this.cache.has(key)){
            this.cache.delete(key);
        }else if (this.cache.size == this.capacity){
            this.cache.delete(this.oldestItem)
        }

        this.cache.set(key, value)
    }

    get oldestItem(){
        return this.cache.keys().next().value;
    }
}

const cache = new LRU(5)
cache.putItem('a',1);
cache.putItem('b',2);
cache.putItem('c',3);
cache.putItem('d',4);
cache.putItem('e',5);
cache.getItem('a');
cache.putItem('f', 6);