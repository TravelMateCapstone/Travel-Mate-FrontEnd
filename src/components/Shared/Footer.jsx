import React, { memo } from 'react';
import '../../assets/css/Shared/Footer.css';

const Footer = () => {
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                <h3 className="f-title f_600 t_color f_size_18">Liên hệ</h3>
                <p>Đừng bỏ lỡ bất kỳ bản cập nhật nào về mẫu và tiện ích mở rộng mới của chúng tôi!</p>
                <form action="#" className="f_subscribe_two mailchimp d-flex" method="post" _lpchecked={1}>
                  <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                  <button className="btn btn_get btn_get_two" type="submit">Gửi mail</button>
                  <p className="mchimp-errmessage" style={{ display: 'none' }} />
                  <p className="mchimp-sucmessage" style={{ display: 'none' }} />
                </form>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
              <div className="row">
                <div className="f_widget col-6 col-md-4 col-sm-6 about-widget wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                  <h3 className="f-title f_600 t_color f_size_18">Cài đặt</h3>
                  <ul className="list-unstyled f_list">
                    <li><a href="#">Ứng dụng Android</a></li>
                    <li><a href="#">Tài liệu</a></li>
                  </ul>
                </div> 
                <div className="f_widget col-6 col-md-4 col-sm-6 about-widget wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                  <h3 className="f-title f_600 t_color f_size_18">Hỗ trợ</h3>
                  <ul className="list-unstyled f_list">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Điều khoản & Điều kiện</a></li>
                    <li><a href="#">Ủng hộ</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">chính sách bảo mật</a></li>
                  </ul>
                </div>
                <div className="f_widget col-12 col-md-4 social-widget wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                  <h3 className="f-title f_600 t_color f_size_18">Liên hệ với chúng tôi</h3>
                  <div className="f_social_icon d-flex">
                    <a href="#" className="bi bi-facebook" />
                    <a href="#" className="bi bi-twitter" />
                    <a href="#" className="bi bi-linkedin" />
                    <a href="#" className="bi bi-pinterest" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one" />
          <div className="footer_bg_two" />
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
