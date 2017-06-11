# ReLikeUtils

Javascript library for interfacing with ReLike, the decentralized public liking service, powered by Ethereum.

## How to use

1. Install the package

    `npm i --save relike-utils`
    
2. Import the package into your project

    `import ReLikeUtils from 'relike-utils';`
    
3. Instantiate a `ReLikeUtils` object. This has all the methods you need to interact with the `ReLike` liking service on Ethereum.

    ```
    const reLikeUtils = new ReLikeUtils();
    ```
    
    Upon instantiation, `ReLikeUtils` will automatically connect to whatever `currentProvider` it sees. An override is possible inside the config object. Please see below. 
    
    It will also start listening for [`LikeEvent`](https://github.com/noman-land/relike-utils/blob/master/contracts/ReLike.sol#L28)s. Every time someone likes or dislikes something on ReLike an event is fired. A callback can be provided to receive these events. Please see below.
     
    It will also start listening for any time the user switches accounts. A callback can be provided to receive the address of the new account. Please see below
    
    The constructor can optionally be given a config object with one or more of the following 
    
    ```js
    const reLikeUtils = new ReLikeUtils({
      // This function will be called every time ReLike notices the primary account switching
      onAccountSwitch: function(newAccount) {}
      
      // This function will be called every time ReLike gets an event notification of a new like
      // In the future this function will receive the rating and the address that liked it as well
      onLikeEvent: function(entityId) {}
      
      // This function will be fired when ReLike is initializing and should return a web3 object that ReLike will use instead of the one it finds
      // It receives the current web3 object if one was found
      web3Override: function(currentWeb3Object) {}
    });
    ```

### Documentation

Everything in ReLike centers around the concept of an `entityId`. This is just a string of text but it represents anything that can be liked. Some examples of `entityId`s include:

    "cat"
    "dog"
    "Terminator 3"
    "🍕"
    "QmW84daiALvufneDcjDeoTFKR1bGQuHFUFv1fcSSRpmuCN"
    "https://www.theguardian.com/sport/2017/jun/10/nba-finals-cleveland-cavaliers-golden-state-warriors-game-4"
    
You can like or dislike any `entityId` you can think of. The sky is the limit. In its alpha stage it's very permissive so something is bound to break.

#### List of methods and what they do

`reLikeUtils.like(entityId)`

Takes any string and likes it.

`reLikeUtils.unlike(entityId)`

Takes any previously liked string and unlikes it. Will throw an error if the user hasn't liked this entity yet.

`reLikeUtils.dislike(entityId)`

takes any string and dislikes it.

`reLikeUtils.unDislike(entityId)`

Takes any previously disliked string and undislikes it. Will throw an error if the user hasn't disliked this entity yet.

`reLikeUtils().getActiveAccount()`

Returns the user address currently active in web3.

`reLikeUtils.getMyRating(entityId)`

Returns the user's current rating for a given string. The values are

    0 = unrated
    1 = like
    2 = dislike
    
`reLikeUtils.getLikeCount(entityId)`

This returns an object that contains the aggregated like counts for any entity. The object is of the shape:

    {
      dislikes: 2,
      likes: 4
    }

