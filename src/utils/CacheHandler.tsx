class CacheHandler {
    
    private isLocalStorageEnabled = () => {
        try {
          const key = `__storage__test`;
          window.localStorage.setItem(key, '');
          window.localStorage.removeItem(key);
          return true;
        } catch (e) {
          return false;
        }
      };

    setCache(key: string, value: string) {
        if(this.isLocalStorageEnabled()) {
            localStorage.setItem(key, value);
        }
    }

    readCache(key: string) {
        if(this.isLocalStorageEnabled()) {
            const item = localStorage.getItem(key);
        return item;
        }
    }

    deleteCache(key: string) {
        if(this.isLocalStorageEnabled()) {
            localStorage.removeItem(key);
        }
    }
}

export default CacheHandler;