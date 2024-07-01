
import Api from './Api';

const api = new Api();

export const getProducts = async (endpoint) => {
  try {
    const jsonData = await api.get(`${endpoint}.json`);
    if (jsonData === null) {
      return [];
    } else {
      return Object.keys(jsonData).map((key) => ({ mainid: key, ...jsonData[key] }));
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const updateWishlist = async (endpoint, mainid, updateData) => {
  try {
    console.log('this is end point --->',endpoint);
    const response = await api.put(`${endpoint}/${mainid}.json`, updateData);
    // console.log("Full PUT response ---->", response);
    const jsonData = response.data;
    console.log("Wishlist updated successfully ---->", jsonData);

    return jsonData;
  } catch (error) {
    console.error('Error updating wishlist:', error);
    return null;
  }
};

export const addToWishlist = async (itemData) => {
  try {
    const response = await api.post(`wishlist.json`, itemData);
    // console.log("Full POST response ---->", response);
    const jsonData = response.data;
    console.log("Item added to wishlist successfully ---->", jsonData);

    return jsonData;
  } catch (error) {
    console.error('Error adding item to wishlist:', error);
    return null;
  }
};

export const getwishlistProducts = async () => {
  try {
    const jsonData = await api.get(`wishlist.json`);
    // console.log('this is data of wishilist---->',jsonData)
    if (jsonData === null) {
      return [];
    } else {
      return Object.keys(jsonData).map((key) => ({ ...jsonData[key], wishid: key }));
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const deleteWishlist = async (wishid) => {
  try {
    const response = await api.delete(`wishlist/${wishid}.json`);
    // console.log("Item deleted from wishlist successfully ---->", response.data);

    return response.data;
  } catch (error) {
    console.error('Error deleting item from wishlist:', error);
    return null;
  }
};
export const addTobagproduct = async (itemData) => {
  try {
    const response = await api.post(`addtobag.json`, itemData);
    // console.log("Full POST response ---->", response);
    const jsonData = response.data;
    // console.log("Item added in bag successfully ---->", jsonData);

    return jsonData;
  } catch (error) {
    console.error('Error adding item to add  to bag:', error);
    return null;
  }
};

export const getAddtobagproducts= async () => {
  try {
    const jsonData = await api.get(`addtobag.json`);
    if (jsonData === null) {
      return [];
    } else {
      return Object.keys(jsonData).map((key) => ({ ...jsonData[key], Bagid: key }));
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const deleteAddtobagproduct = async (Bagid) => {
  try {
    const response = await api.delete(`addtobag/${Bagid}.json`);
    console.log("Item deleted from bag successfully ---->", response.data);

    return response.data;
  } catch (error) {
    console.error('Error deleting item from bag:', error);
    return null;
  }
};

export const updateBagWishlist = async ( Bagid, updateData) => {
  try {
    const response = await api.put(`addtobag/${Bagid}.json`, updateData);
    console.log("Full PUT response ---->", response);
    const jsonData = response.data;
    console.log("Wishlist updated successfully ---->", jsonData);

    return jsonData;
  } catch (error) {
    console.error('Error updating wishlist:', error);
    return null;
  }
};



export const updateBag = async (endpoint, mainid, updateData) => {
  try {
    console.log('this is end point --->',endpoint);
    const response = await api.put(`${endpoint}/${mainid}.json`, updateData);
    // console.log("Full PUT response ---->", response);
    const jsonData = response.data;
    console.log("Bag updated successfully ---->", jsonData);

    return jsonData;
  } catch (error) {
    console.error('Error updating wishlist:', error);
    return null;
  }
};