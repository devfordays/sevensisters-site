import TopNavigation from '../../TopNavigation';
import MainHead from '../../MainHead';
import Footer from '../../Footer';

const MainLayout = props =>{
  return(
    <div className="main-layout">
      <MainHead />
      <TopNavigation />
      <div className="main-content">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout;
