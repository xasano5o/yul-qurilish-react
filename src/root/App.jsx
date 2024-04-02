import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiginCom from '../components/Login';
import HomeCom from '../components/home';
import Navbar from '../components/Navbar';
import HomeClient from '../components/client/home';
import SettingCom from '../components/setting/Table';
import CertifcateCom from '../components/Certifcate/Table';
import Layout from '../components/Layout';
import PersonalCertifcate from '../components/Certifcate/PersonalCertifcate';
import VeiwCertifcateUser from '../components/Certifcate/veiw';

function App() {
  let token = sessionStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<HomeClient />} />
        <Route path="/login" element={<SiginCom />} />
        <Route path="/certifcate/veiw/:id" element={<VeiwCertifcateUser />} />
        {token && (
          <Route element={<Layout />}>
            <Route path="/admin/home" element={<HomeCom />} />
            <Route path="/admin/certifcate" element={<CertifcateCom />} />
            <Route path="/admin/setting" element={<SettingCom />} />
            <Route path="/admin/personal/:id" element={<PersonalCertifcate />} />            
          </Route>
        )}
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
