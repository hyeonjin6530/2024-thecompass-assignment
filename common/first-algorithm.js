const network = {
    Alice: ["Bob", "Charlie"],
    Bob: ["Alice", "David"],
    Charlie: ["Alice", "Eve"],
    David: ["Bob"],
    Eve: ["Charlie"]
};

function friendRecommendations(network, user) {
    const directedFriends = new Set(...network[user]);
    directedFriends.add(user);

    const recommendedFriends = new Set();

    const queue = [...network[user]];

    while(queue.length){
        const friend = queue.shift();

        for(const friendOfFriend of network[friend]){
            if(!directedFriends.has(friendOfFriend)){recommendedFriends.add(friendOfFriend)};
        }
    }
    return Array.from(recommendedFriends);
}

console.log(friendRecommendations(network, "Alice"));
// 출력: ["David", "Eve"]