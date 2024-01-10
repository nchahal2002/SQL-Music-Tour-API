'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
    name: 'John Doe',
    genre: 'Rock',
    available_start_time: "11:00:00+00:00",
    end_time: '11:03:00+00:00'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bands', null, {}); 
  }
};
