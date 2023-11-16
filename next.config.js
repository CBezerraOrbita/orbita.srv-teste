/* eslint-disable prettier/prettier */
/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

const config = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['media.graphassets.com'],
  },
};

module.exports = withVideos(config);
