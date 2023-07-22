import React from "react";
import "./Feel.scss";
export default function Feel() {
  return (
    <section className="feel">
      <h3 className="title">Nhận Định Mới *3</h3>
      <div className="main-content">
        <div id="feel-user" className="carousel slide" data-ride="carousel">
          <div className="carousel-indicators">
            <div
              className="img-info active"
              data-target="#feel-user"
              data-slide-to={0}
            >
              <div className="overflow"></div>
              <img src="./Img/ImgLogo/feel-1.jpg" alt="" />
            </div>
            <div
              className="img-info"
              data-target="#feel-user"
              data-slide-to={1}
            >
              <div className="overflow"></div>
              <img src="./Img/ImgLogo/feel-2.jpg" alt="" />
            </div>
            <div
              className="img-info"
              data-target="#feel-user"
              data-slide-to={2}
            >
              <div className="overflow"></div>
              <img src="./Img/ImgLogo/feel-3.jpg" alt="" />
            </div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="content">
                “ JavaScript là ngôn ngữ lập trình được nhà phát triển sử dụng để tạo trang web tương tác. Từ làm mới bảng tin trên trang mạng xã hội đến hiển thị hình ảnh động và bản đồ tương tác, các chức năng của JavaScript có thể cải thiện trải nghiệm người dùng của trang web. Là ngôn ngữ kịch bản phía máy khách, JavaScript là một trong những công nghệ cốt lõi của World Wide Web. Ví dụ: khi duyệt internet, bất cứ khi nào bạn thấy quảng cáo quay vòng dạng hình ảnh, menu thả xuống nhấp để hiển thị hoặc màu sắc phần tử thay đổi động trên trang web cũng chính là lúc bạn thấy các hiệu ứng của JavaScript”
              </div>
              <div className="info">
                <p>
                  Vân, <span>CEO</span>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="content">
                “ React là một thư viện JavaScript front-end mã nguồn mở và miễn phí để xây dựng giao diện người dùng dựa trên các thành phần UI riêng lẻ. Nó được phát triển và duy trì bởi Meta và cộng đồng các nhà phát triển và công ty cá nhân.
                ”
              </div>
              <div className="info">
                <p>
                  Trương Tấn Khải, <span>CEO</span>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="content">
                “ Khóa học chất lượng, chỉ phải bỏ ra khoảng 1tr mà có được kinh
                nghiệm , cũng như kiến thức đi làm thực tế suốt 4 năm của a
                Tiến, giúp mình tiết kiệm thời gian tự học lên rất nhiều. đã mua
                tới 4 khóa học của a hi hi ”
              </div>
              <div className="info">
                <p>
                  Nguyễn Thanh Tùng, <span>Leader</span>
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#feel-user"
            role="button"
            data-slide="prev"
          >
            <span>{"<"}</span>
          </a>
          <a
            className="carousel-control-next"
            href="#feel-user"
            role="button"
            data-slide="next"
          >
            <span>{">"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
