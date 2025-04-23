import AsyncStorage from '@react-native-async-storage/async-storage';

// Save token and user info
export const saveUser = async (token, user) => {
  try {
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('user', JSON.stringify(user));
    console.log('User saved!');
  } catch (e) {
    console.error('Error saving user', e);
  }
};

// Get token and user info
export const getUser = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const user = await AsyncStorage.getItem('user');
    if(!token || !user) return null;
    return { token, user: JSON.parse(user) };
  } catch (e) {
    console.error('Error getting user', e);
    return null;
  }
};

// Remove user info (logout)
export const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    console.log('User logged out!');
  } catch (e) {
    console.error('Error removing user', e);
  }
};
