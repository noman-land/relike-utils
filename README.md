# ReLikeUtils

[![Join the chat at https://gitter.im/relike-utils/Lobby](https://badges.gitter.im/relike-utils/Lobby.svg)](https://gitter.im/relike-utils/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Javascript library for interfacing with ReLike, the decentralized public liking service, powered by Ethereum.

### Documentation

Everything in ReLike centers around the concept of an `entityId`. This is just a string of text but it represents anything that can be liked. Some examples of `entityId`s include:

    "cat"
    "dog"
    "Terminator 3"
    "🍕"
    "QmW84daiALvufneDcjDeoTFKR1bGQuHFUFv1fcSSRpmuCN"
    "https://www.theguardian.com/sport/2017/jun/10/nba-finals-cleveland-cavaliers-golden-state-warriors-game-4"

You can like or dislike any `entityId` you can think of. The sky is the limit. In its alpha stage it's very permissive so something is bound to break.

## How to use

1. Install the package

    ```
    npm i --save relike-utils
    ```
    
2. Import the package into your project

    ```js
    import ReLikeUtils from 'relike-utils';
    ```
    
3. Instantiate a `ReLikeUtils` object. This has all the methods you need to interact with the `ReLike` liking service on Ethereum.

    ```js
    const reLikeUtils = new ReLikeUtils();
    ```
    
    Upon instantiation, `ReLikeUtils` will automatically connect to whatever `currentProvider` it sees. An override is possible inside the config object. Please see below. 
    
    It will also start listening for [`LikeEvent`](https://github.com/noman-land/relike-utils/blob/master/contracts/ReLike.sol#L28)s. Every time someone likes or dislikes something on ReLike an event is fired. A callback can be provided to receive these events. Please see below.
     
    It will also start listening for any time the user changes accounts. A callback can be provided to receive the address of the new account. Please see below
    
    The constructor can optionally be given a config object with one or more of the following 
    
    ```js
    const reLikeUtils = new ReLikeUtils({
      // This function will be called every time ReLike notices the primary account changing
      onAccountChange: function(newAccount) {},
      
      // This function will be called every time ReLike gets an event notification of a new like
      onLikeEvent: function({ dislikes, entityId, likes, myRating, user }) {},
      
      // This function will be fired when ReLike is initializing and should return a web3 object that ReLike will use instead of the one it finds
      // It receives the current web3 object if one was found
      web3Override: function(currentWeb3Object) {},
    });
    ```

### Using `relike-utils` as Redux middleware

As of version 0.2.0, `relike-utils` comes with a pre-baked Redux middleware which can be instantiated as follows:


```js
import { ReLikeMiddleware } from 'relike-utils';

this.store = createStore(
  rootReducer,
  applyMiddleware(ReLikeMiddleware),
);

```

The middleware will dispatch actions that are prefixed with `@@RELIKE/`.

You can import ReLike actions from `relike-utils` to dispatch from your app. You can pass them to components via a connected container, in idiomatic Redux style:

```js
// MyContainer.js
import { connect } from 'react-redux';
import { ReLikeActions } from 'relike-utils';

import MyComponent from '../components/MyComponent';

const mapDispatchToProps = {
  dislike: ReLikeActions.dislike,
  getLikeData: ReLikeActions.getLikeData,
  like: ReLikeActions.like,
  unDislike: ReLikeActions.unDislike,
  unLike: ReLikeActions.unLike,
};

export default connect(null, mapDispatchToProps)(MyComponent);

```

For a full list of actions please see [`ReLikeActions.js`](https://github.com/noman-land/relike-utils/blob/master/js/redux/actions/ReLikeActions.js).

To handle the actions in your reducers, `relike-utils` exports a `ReLikeActionTypes` object:

```js
import { ReLikeActionTypes } from 'relike-utils';

export default function pendingLikes(state = Map(), action) {
  switch (action.type) {
    case ReLikeActionTypes.DISLIKE_START:
      return state.setIn([action.payload.entityId, 'dislike'], true);
  }
}
```

For a full list of action types please see [`ReLikeActionTypes.js`](https://github.com/noman-land/relike-utils/blob/master/js/redux/actions/ReLikeActionTypes.js).

#### List of methods and what they do

Most methods return promises.

```js
reLikeUtils.like(entityId)
```

Takes any string and likes it.

```js
reLikeUtils.unlike(entityId)
```

Takes any previously liked string and unlikes it. Will throw an error if the user hasn't liked this entity yet.

```js
reLikeUtils.dislike(entityId)
```

takes any string and dislikes it.

```js
reLikeUtils.unDislike(entityId)
```

Takes any previously disliked string and undislikes it. Will throw an error if the user hasn't disliked this entity yet.

```js
reLikeUtils.getActiveAccount()
```

Returns the user address currently active in web3.

```js
reLikeUtils.getMyRating(entityId)
```

Returns the user's current rating for a given string. The values are

    0 = unrated
    1 = like
    2 = dislike
    
```js
reLikeUtils.getLikeCount(entityId)
```

This returns an object that contains the aggregated like counts for any entity. The object is of the shape:

```js
{
  dislikes: 2,
  likes: 4
}
```
