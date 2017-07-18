import contract from 'truffle-contract';
import Q from 'q';
import Web3 from 'web3';

import relikeArtifacts from '../build/contracts/ReLike.json';

import { log, logError, logInfo, logWarning } from './utils/loggingUtils';

import { DEFAULT_GAS } from './constants';

export default class ReLikeUtils {
  constructor(config) {
    const {
      onAccountChange,
      onLikeEvent,
      web3Override,
    } = typeof config === 'object' ? config : {};

    this.initWeb3(web3Override);

    this.ReLikeContract = contract(relikeArtifacts);
    this.ReLikeContract.setProvider(this.web3.currentProvider);

    this.updateOnAccountChange(onAccountChange);
    this.updateOnLikeEvents(onLikeEvent);
  }

  dislike(entityId) {
    log('Disliking:')(entityId);
    return this.ReLikeContract.deployed().then(instance => {
      return this.getActiveAccount().then(activeAccount => {
        return instance.dislike(entityId, { from: activeAccount, gas: DEFAULT_GAS })
        .catch(error => {
          logError('Failed to dislike')(error);
          throw error;
        });
      });
    });
  }

  getActiveAccount() {
    const deferred = Q.defer();

    this.web3.eth.getAccounts((error, accounts) => {
      if (error) {
        logError('Failed to get activeAccount')(error);
        deferred.reject(error);
        return false;
      }
      deferred.resolve(accounts[0]);
      return true;
    });

    return deferred.promise;
  }

  getLikeCount(entityId) {
    return this.ReLikeContract.deployed().then(instance => {
      return instance.getEntity.call(entityId).then(([likes, dislikes]) => ({
        dislikes: dislikes.toNumber(),
        likes: likes.toNumber(),
      })).catch(error => {
        logError('Failed to get likeCount')(error);
        throw error;
      });
    });
  }

  getMyRating(entityId) {
    return this.ReLikeContract.deployed().then(instance => {
      return this.getActiveAccount().then(activeAccount => {
        return instance.getLikeById
        .call(entityId, { from: activeAccount })
        .then(([rating]) => rating.toNumber())
        .catch(error => {
          logError('Failed to get myRating')(error);
          throw error;
        });
      });
    });
  }

  initWeb3(fallback) {
    if (typeof web3 !== 'undefined') {
      logWarning('Using web3 detected from external source')();
      this.web3 = new Web3(web3.currentProvider);
    } else if (typeof fallback === 'function') {
      logWarning('Using web3 provided by the fallback function')();
      this.web3 = fallback();
    }
  }

  like(entityId) {
    logInfo('Liking:')(entityId);
    return this.ReLikeContract.deployed().then(instance => {
      return this.getActiveAccount().then(activeAccount => {
        return instance.like(entityId, { from: activeAccount, gas: DEFAULT_GAS })
        .catch(error => {
          logError('Failed to like')(error);
          throw error;
        });
      });
    });
  }

  unDislike(entityId) {
    logInfo('Undisliking:')(entityId);
    return this.ReLikeContract.deployed().then(instance => {
      return this.getActiveAccount().then(activeAccount => {
        return instance.unDislike(entityId, { from: activeAccount, gas: DEFAULT_GAS })
        .catch(error => {
          logError('Failed to undislike')(error);
          throw error;
        });
      });
    });
  }

  unLike(entityId) {
    logInfo('Unliking:')(entityId);
    return this.ReLikeContract.deployed().then(instance => {
      return this.getActiveAccount().then(activeAccount => {
        return instance.unLike(entityId, { from: activeAccount, gas: DEFAULT_GAS })
        .catch(error => {
          logError('Failed to unlike')(error);
          throw error;
        });
      });
    });
  }

  updateOnAccountChange(callback) {
    let oldAccount = null;
    setInterval(() => this.getActiveAccount().then(newAccount => {
      if (oldAccount === newAccount) {
        return false;
      }
      logInfo('Account switched to')(newAccount);
      oldAccount = newAccount;

      if (typeof callback === 'function') {
        callback(newAccount);
      }
    }), 500);
  }

  updateOnLikeEvents(callback) {
    this.ReLikeContract.deployed().then(instance => instance.ItemLiked((error, result) => {
      const { args: { dislikes, entityId, likes, rating, user } } = result;
      const likeData = {
        dislikes: dislikes.toNumber(),
        entityId,
        likes: likes.toNumber(),
        rating: rating.toNumber(),
        user,
      };
      logInfo('New like event detected')(likeData);
      if (typeof callback === 'function') {
        callback(likeData);
      }
    }));
  }
}
