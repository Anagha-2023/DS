class TrieNode{
  constructor(){
    this.children = {};
    this.end = false;
  }
}
class Trie{
  constructor(){
    this.root = new TrieNode();
  }

  Insert(word){
    let current = this.root;
    for(let i=0;i<word.length;i++){
      let letter = word[i];
      if(!current.children[letter]){
        current.children[letter] = new TrieNode();
      }
      current = current.children[letter];
    }
    current.end = true;
  }

  search(word){
    let current = this.root;
    for(let i=0;i<word.length;i++){
      if(!current.children[word[i]]){
        return false;
      }
      current = current.children[word[i]];
    }
    return current.end;
  }
}

const trie = new Trie();
trie.Insert('Apple');
trie.Insert('App');
trie.Insert('Apricot');


console.log(trie.search('App'));
console.log(trie.search('Banana'));