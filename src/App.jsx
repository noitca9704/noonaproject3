import './App.css'
import { Routes, Route } from 'react-router'
import ProductAll from './page/ProductAll'
import Login from './page/Login'
import ProductDetail from './page/ProductDetail'
import Navbar from './component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import SearchPage from './component/SearchPage'

// 1. 전체 상품페이지, 로그인, 상품 상세페이지
// 1-1. 네비게이션 바 만들기기
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
// 4. 상품 디테일을 눌렀으나, 로그인이 안되어 있을 경우 로그인 페이지가 먼저 나온다
// 5. 로그인이 되어 있을 경우 상품 디테일 페이지를 볼 수 있다
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없고 다시 로그인 페이지로 이동한다
// 8. 로그인을 하면 로그아웃으로 버튼이 바뀌고 로그아웃을 하면 로그인으로 바뀐다
// 9. 상품을 검색할 수 있다
function App() {

  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearchClick = () => {
    setIsSearchClicked(prev => !prev);
  };

  return (
    <div className='wrap'>
      <SearchPage isOpen={isSearchClicked} onClose={() => setIsSearchClicked(false)}/>
      <Navbar onSearchClick={handleSearchClick} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
