module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2f746f39a460adaae14656516fc41e2e'),
  },
});
