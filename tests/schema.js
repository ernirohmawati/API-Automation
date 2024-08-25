// Definisi Schema
const userSchema = {
  type: 'object',  // Tipe objek utama adalah 'object'
  required: ['data', 'support'],  // Properti yang diperlukan adalah 'data' dan 'support'

  // Properti dalam objek utama 'userSchema'
  properties: {
    // Properti 'data' harus berupa objek dan memiliki properti yang diperlukan: 'id', 'email', 'first_name', 'last_name', 'avatar'
    data: {
      type: 'object',
      required: ['id', 'email', 'first_name', 'last_name', 'avatar'],
      properties: {
        id: { type: 'integer' },  // Properti 'id' harus bertipe 'integer'
        email: { type: 'string' },  // Properti 'email' harus bertipe 'string'
        first_name: { type: 'string' },  // Properti 'first_name' harus bertipe 'string'
        last_name: { type: 'string' },  // Properti 'last_name' harus bertipe 'string'
        avatar: { type: 'string' },  // Properti 'avatar' harus bertipe 'string'
      },
    },

    // Properti 'support' harus berupa objek dan memiliki properti yang diperlukan: 'url', 'text'
    support: {
      type: 'object',
      required: ['url', 'text'],
      properties: {
        url: { type: 'string' },  // Properti 'url' harus bertipe 'string'
        text: { type: 'string' },  // Properti 'text' harus bertipe 'string'
      },
    },
  },
};

module.exports = userSchema;  // Ekspor 'userSchema' untuk digunakan di file lain
