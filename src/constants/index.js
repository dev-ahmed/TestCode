module.exports = {
  // magento
  MAGENTO_API_URL: 'http://staging.teeela.com/rest',
  MAGENTO_API_TOKEN: 'vnuosxi020q021uf7ln277v10gjgm7rt',
  PRODUCT_THUMB_BASE_URL: 'https://res.cloudinary.com/teeela2/image/upload/q_auto,w_0.35,dpr_auto,c_scale/v1/media/catalog/product',
  PRODUCT_BASE_IMAGE_URL: 'https://res.cloudinary.com/teeela2/image/upload/q_auto,w_0.6,dpr_auto,c_scale/media/catalog/product',
  CATEGORY_BASE_IMAGE_URL: 'https://res.cloudinary.com/teeela2/image/upload/q_auto,w_0.9,dpr_auto,c_scale/media/catalog/category',
  CDN_BASE: 'https://res.cloudinary.com/teeela2/image/upload',

  // tap payment
  TAP_API_URL: 'https://api.tap.company/v1',
  TAP_PUBLIC_KEY: 'pk_test_kGH1adzn3qpeKDxTCcwQyEts',
  TAP_ENCRYPTION_KEY:
    '-----BEGIN PUBLIC KEY-----\nMIIBIDANBgkqhkiG9w0BAQEFAAOCAQ0AMIIBCAKCAQEAozZwyRMEXuVaoZZZropb\noKOyVpMZHpkBedRwkSvVJQ5Q/Twvfub1pAAcCEUaic5IfyS2hbJPGNufkvCzuHFq\nu4Q/4l/CB+gPLcE9wcZ3yqECpQnDB+OD5IUuDb8nhAsqPB1USZ1siteth7fAWWSI\nepBmGhM1Ax4gsiUc+KSnaUVr8WuXPK3FUQL6fstldEl+TxnZa7wIpzPAZGnCHn+H\nUwzx1wB92MGNozLALIrR7pUUTxzGTm/qaxT0DHfbA42IR9z2th+GvqHHFVqTnBSG\nAWY+9LbjgRj4RuYV0xIFRPBG9WzR6XuZVnDECngNnQi/zduPGuro2leD0EmAZGC6\nhwIBEQ==\n-----END PUBLIC KEY-----\n',
  TAP_RETURN_URL: 'teeela://mob/thankyou', // using deep linking.
};
