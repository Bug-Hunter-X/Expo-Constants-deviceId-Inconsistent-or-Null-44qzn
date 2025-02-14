A more robust approach involves generating a UUID and storing it persistently in AsyncStorage. This ensures a unique and consistent identifier across sessions, even if `Constants.deviceId` is unreliable.

```javascript
import * as Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getDeviceId() {
  try {
    const storedId = await AsyncStorage.getItem('deviceId');
    if (storedId) {
      return storedId;
    } else {
      const newId = uuidv4();
      await AsyncStorage.setItem('deviceId', newId);
      return newId;
    }
  } catch (error) {
    console.error('Error getting/setting device ID:', error);
    return null; // Or handle the error appropriately
  }
}

getDeviceId().then(id => console.log('Reliable Device ID:', id));
```