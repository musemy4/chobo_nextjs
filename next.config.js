/** @type {import('next').NextConfig} */

const API_KEY= process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/form',
        // 브라우저나 검색엔진이 이 정보를 기억할지에 대한 여부
        permanent: false
      }
    ];
  },
  // redirect + 유저가 URL 변화를 볼 수 없다.
  async rewrites() {
    return [{
      source: '/api/movies',
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    }]
  }
}

module.exports = nextConfig
