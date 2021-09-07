/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.recentlyUsedCache = [];
  this.cache = {};
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if(key in this.cache) {
      for(let i = 0; i < this.recentlyUsedCache.length; i++) {
          if(this.recentlyUsedCache[i] === key) {
              this.recentlyUsedCache.push(this.recentlyUsedCache[i]);
              this.recentlyUsedCache.splice(i, 1);
              break;
          }
      }
      return this.cache[key];
  } else {
      return -1;
  }

};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  let cacheSize = Object.keys(this.cache).length;
  if(cacheSize >= this.capacity) {
      console.log(this.recentlyUsedCache)
      delete this.cache[this.recentlyUsedCache[0]];
      this.recentlyUsedCache.shift();
      this.cache[key] = value;
  } else {
      this.cache[key] = value;
      this.recentlyUsedCache.push(key);
  }
};

/*
2=6
1=5

[2,1];
*/
/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

/*
test cases:
["LRUCache","put","put","put","put","get","get","get","get","put","get","get","get","get","get"]
[    [3],   [1,1],[2,2],[3,3],[4,4],[4],  [3],   [2], [1],  [5,5],[1],  [2],   [3], [4],  [5]]
cache: {1,1} , {2,2}, {3, 3}
recent: 1, 2, 3
/*

null, null, null, null, null, 4, 3, 2, -1,