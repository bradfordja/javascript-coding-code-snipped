class AnagramGrouper {
  static groupAnagrams(strs) {
    if (!strs || strs.length === 0) {
      return [];
    }

    const map = new Map();

    for (const str of strs) {
      // Sort characters to create grouping key
      const key = str
        .split('')
        .sort()
        .join('');

      // Create new group if key doesn't exist
      if (!map.has(key)) {
        map.set(key, []);
      }

      // Add original string to group
      map.get(key).push(str);
    }

    // Return all grouped anagrams
    return Array.from(map.values());
  }

  static main() {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

    const groupedAnagrams =
      AnagramGrouper.groupAnagrams(strs);

    console.log("Grouped Anagrams:");
    console.log(groupedAnagrams);
  }
}

// Run application
AnagramGrouper.main();