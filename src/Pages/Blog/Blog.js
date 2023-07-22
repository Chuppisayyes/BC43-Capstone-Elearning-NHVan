import React from "react";
import "./Blog.css";
export default function Blog() {
  return (
    <>
      <section className="blogCourse">
        <div className="titleCourse">
          <h3>Blog</h3>
          <p>Thời đại công nghệ số 4.0</p>
          <p>Thông Tin</p>
        </div>
        <div className="blogCourseContainer">
          <h6>
            <a href="">
              <i class="fas fa-bullhorn"></i>PHÙ HỢP VỚI BẠN
            </a>
          </h6>
          <div className="row">
            <div className="col-md-8">
              <div className="blogItemLeft">
                <div className="row">
                  <div className="col-xl-6 mb-4">
                    <div className="cardBlog">
                      <div className="cardBlogContent">
                        <div className="imgCardBlog">
                          <img
                            src="https://fullstack.edu.vn/blog/nganh-gi-dang-hot-hien-nay-top-nganh-nghe-du-bao-tro-thanh-xu-the.html"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://fullstack.edu.vn/blog/nganh-gi-dang-hot-hien-nay-top-nganh-nghe-du-bao-tro-thanh-xu-the.html";
                            }}
                            alt=""
                          />
                        </div>
                        <h6>Thời gian và động lực</h6>
                        <div className="timeBlogCourse">
                          <div className="reviewBlog">
                            <span>
                              <i className="far fa-thumbs-up"></i> 334
                            </span>
                            <span>
                              <i className="far fa-comment"></i> 576
                            </span>
                            <span>
                              <i className="fas fa-eye"></i> 231
                            </span>
                          </div>
                          <p>
                            Đăng bởi<span> Chuppi Tèo</span>
                          </p>
                        </div>
                        <p className="colorCardTitle">
                        Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể tham khảo bài viết này để biết ngành gì đang hot hiện nay và top các ngành nghề được dự đoán sẽ trở thành xu thế nhé! 
                        </p>
                        <button className="btnGlobal btnCardBlog">
                          <a href="">Xem thêm</a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 mb-4">
                    <div className="cardBlog">
                      <div className="cardBlogContent">
                        <div className="imgCardBlog">
                          <img
                            src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1653/61b46a3d757cc.png"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1653/61b46a3d757cc.png";
                            }}
                            alt=""
                          />
                        </div>
                        <h6>Một số "cẩm nang" hay khi làm việc với HTML/CSS </h6>
                        <div className="timeBlogCourse">
                          <div className="reviewBlog">
                            <span>
                              <i className="far fa-thumbs-up"></i> 334
                            </span>
                            <span>
                              <i className="far fa-comment"></i> 521
                            </span>
                            <span>
                              <i className="fas fa-eye"></i> 134
                            </span>
                          </div>
                          <p>
                            Đăng bởi<span>NHVann</span>
                          </p>
                        </div>
                        <p className="colorCardTitle">
                        Bài viết này đơn giản là nơi để mình lưu lại những kinh nghiệm mình đã làm việc với HTML/CSS cũng như chia sẻ phần nào cho bạn nào chưa biết. Mình cùng bắt đầu bài viết thôi, yooolo🚀
                        </p>
                        <button className="btnGlobal btnCardBlog">
                          <a href="">Xem thêm</a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 mb-4">
                    <div className="cardBlog">
                      <div className="cardBlogContent">
                        <div className="imgCardBlog">
                          <img
                            src="https://files.fullstack.edu.vn/f8-prod/blog_posts/7923/64a245a429422.png"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://files.fullstack.edu.vn/f8-prod/blog_posts/7923/64a245a429422.png";
                            }}
                            alt=""
                          />
                        </div>
                        <h6>"Kết nối trước" với preconnect, prefetch để làm gì?</h6>
                        <div className="timeBlogCourse">
                          <div className="reviewBlog">
                            <span>
                              <i className="far fa-thumbs-up"></i> 334
                            </span>
                            <span>
                              <i className="far fa-comment"></i> 521
                            </span>
                            <span>
                              <i className="fas fa-eye"></i> 134
                            </span>
                          </div>
                          <p>
                            Đăng bởi<span>Trương Tấn Khải</span>
                          </p>
                        </div>
                        <p className="colorCardTitle">
                        Ở đây chắc hẳn ai cũng từng dùng google fonts để nhúng fonts vào html rồi nhễ.
                        Có bạn nào thắc mắc thẻ rel="preconnect" trong trường hợp này dùng để làm gì không?
                        </p>
                        <button className="btnGlobal btnCardBlog">
                          <a href="">Xem thêm</a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 mb-4">
                    <div className="cardBlog">
                      <div className="cardBlogContent">
                        <div className="imgCardBlog">
                          <img
                            src="https://files.fullstack.edu.vn/f8-prod/blog_posts/6781/6412fc6e5188b.jpg"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://files.fullstack.edu.vn/f8-prod/blog_posts/6781/6412fc6e5188b.jpg";
                            }}
                            alt=""
                          />
                        </div>
                        <h6>Tìm hiểu về Serif và Sans-serif</h6>
                        <div className="timeBlogCourse">
                          <div className="reviewBlog">
                            <span>
                              <i className="far fa-thumbs-up"></i> 334
                            </span>
                            <span>
                              <i className="far fa-comment"></i> 531
                            </span>
                            <span>
                              <i className="fas fa-eye"></i> 134
                            </span>
                          </div>
                          <p>
                            Đăng bởi<span> Nguyễn Thanh Tùng</span>
                          </p>
                        </div>
                        <p className="colorCardTitle">
                          Serif nghĩa là một đường thẳng hoặc một nét nhỏ ở trên thành phần của chữ, thường là những đường định hướng và ổn định cấu tạo chữ. Serif thường được biết đến với tên gọi “chữ có chân”.
                        </p>
                        <button className="btnGlobal btnCardBlog">
                          <a href="">Xem thêm</a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 mb-4">
                    <div className="cardBlog">
                      <div className="cardBlogContent">
                        <div className="imgCardBlog">
                          <img
                            src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1385/6197a09e60b56.png"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1385/6197a09e60b56.png";
                            }}
                            alt=""
                          />
                        </div>
                        <h6>
                          Tạo một component dễ dàng nhanh chóng
                        </h6>
                        <div className="timeBlogCourse">
                          <div className="reviewBlog">
                            <span>
                              <i className="far fa-thumbs-up"></i> 334
                            </span>
                            <span>
                              <i className="far fa-comment"></i> 521
                            </span>
                            <span>
                              <i className="fas fa-eye"></i> 134
                            </span>
                          </div>
                          <p>
                            Đăng bởi<span> Nguyễn Thanh Tùng</span>
                          </p>
                        </div>
                        <p className="colorCardTitle">
                          Tạo một component nhiều lúc cũng khá mất nhiều thời
                          gian nên mình xin giới thiệu extention này cho mọi
                          người nhé...
                        </p>
                        <button className="btnGlobal btnCardBlog">
                          <a href="">Xem thêm</a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 mb-4">
                    <div className="cardBlog">
                      <div className="cardBlogContent">
                        <div className="imgCardBlog">
                          <img
                            src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1355/619482df77279.jpg"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1355/619482df77279.jpg";
                            }}
                            alt=""
                          />
                        </div>
                        <h6>Làm sao Để Master FE</h6>
                        <div className="timeBlogCourse">
                          <div className="reviewBlog">
                            <span>
                              <i className="far fa-thumbs-up"></i> 334
                            </span>
                            <span>
                              <i className="far fa-comment"></i> 521
                            </span>
                            <span>
                              <i className="fas fa-eye"></i> 134
                            </span>
                          </div>
                          <p>
                            Đăng bởi<span> Nguyễn Thanh Tùng</span>
                          </p>
                        </div>
                        <p className="colorCardTitle">
                            Hãy Siêng Năng Chăm Chỉ hoọc Code từ VCyber
                        </p>
                        <button className="btnGlobal btnCardBlog">
                          <a href="">Xem thêm</a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 mb-4">
                    <div className="cardBlog">
                      <div className="cardBlogContent">
                        <div className="imgCardBlog">
                          <img
                            src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1069/617946ecf0f63.jpg"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1069/617946ecf0f63.jpg";
                            }}
                            alt=""
                          />
                        </div>
                        <h6>Xử lý bất đồng bộ trong Javascript (phần 2)</h6>
                        <div className="timeBlogCourse">
                          <div className="reviewBlog">
                            <span>
                              <i className="far fa-thumbs-up"></i> 334
                            </span>
                            <span>
                              <i className="far fa-comment"></i> 521
                            </span>
                            <span>
                              <i className="fas fa-eye"></i> 134
                            </span>
                          </div>
                          <p>
                            Đăng bởi<span> Nguyễn Thanh Tùng</span>
                          </p>
                        </div>
                        <p className="colorCardTitle">
                          Async/await là cơ chế giúp bạn thực thi các thao tác
                          bất đồng bộ một cách tuần tự hơn , giúp đoạn code nhìn
                          qua tưởng như đồng...
                        </p>
                        <button className="btnGlobal btnCardBlog">
                          <a href="">Xem thêm</a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 mb-4">
                    <div className="cardBlog">
                      <div className="cardBlogContent">
                        <img
                          src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1073/6179eca8efb18.jpg"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1073/6179eca8efb18.jpg";
                          }}
                          alt=""
                        />
                        <h6>TyperScrip là gì, Vì sao nên dùng TyperScript</h6>
                        <div className="timeBlogCourse">
                          <div className="reviewBlog">
                            <span>
                              <i className="far fa-thumbs-up"></i> 334
                            </span>
                            <span>
                              <i className="far fa-comment"></i> 521
                            </span>
                            <span>
                              <i className="fas fa-eye"></i> 134
                            </span>
                          </div>
                          <p>
                            Đăng bởi<span> Nguyễn Thanh Tùng</span>
                          </p>
                        </div>
                        <p className="colorCardTitle">
                          Link khóa học cho anh em nào tò mò ( Đừng lo vì tất cả
                          đều miễn......
                        </p>
                        <button className="btnGlobal btnCardBlog">
                          <a href="">Xem thêm</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blogItemRight">
                <div className="blogRightBox">
                  <h6>Các chủ đề được đề xuất</h6>
                  <ul>
                    <li>
                      <a href="">Front-end / Mobile apps</a>
                    </li>
                    <li>
                      <a href="">UI / UX / Design</a>
                    </li>
                    <li>
                      <a href="">BACK-END</a>
                    </li>
                    <li>
                      <a href="">Thư viện</a>
                    </li>
                    <li>
                      <a href="">Chia sẻ người trong nghề</a>
                    </li>
                    <li>
                      <a href="">Châm ngôn IT</a>
                    </li>
                    <li>
                      <a href="">Chủ đề khác</a>
                    </li>
                  </ul>
                </div>

                <div className="blogRightBox">
                  <h6>Bài đăng được đề xuất</h6>
                  <div className="postBlog">
                    <img
                      src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1027/6174b331c4b4f.png"
                      alt=""
                    />
                    <h6>Làm sao để không nản khi học code</h6>
                    <p className="colorCardTitle">
                      Chúng ta sẽ cùng nhau tìm hiểu cách học code sao chuẩn chỉ ...
                    </p>
                    <div className="imgPost">
                      <img
                        src={
                          require("../../Assets/Img/imgInstrutors/instrutor8.jpg")
                            .default
                        }
                        alt=""
                      />
                      <span className="colorCardTitle"> NHVân</span>
                    </div>
                  </div>
                  <div className="postBlog">
                    <img
                      src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1021/6173be68944ad.jpg"
                      alt=""
                    />
                    <h6>Lập trình có dễ dàng không</h6>
                    <p className="colorCardTitle">
                      Chúng ta sẽ cùng nhau tìm hiểu cách lập trình từ cơ bản tới nâng cao
                    </p>
                    <div className="imgPost">
                      <img
                        src={
                          require("../../Assets/Img/imgInstrutors/instrutor9.jpg")
                            .default
                        }
                        alt=""
                      />
                      <span className="colorCardTitle">Tấn Khải</span>
                    </div>
                  </div>
                  <div className="postBlog">
                    <img
                      src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/1017/6172259ab8b80.png"
                      alt=""
                    />
                    <h6>Làm sao để có việc nhanh chóng sau khi học lập trình</h6>
                    <p className="colorCardTitle">
                      Chắc chắn đây là câu hỏi được khá nhiều bạn trẻ quan tâm sau khi hoàn thành xong các khóa học lập trình. Tuy Nhiên ...
                    </p>
                    <div className="imgPost">
                      <img
                        src={
                          require("../../Assets/Img/imgInstrutors/instrutor10.jpg")
                            .default
                        }
                        alt=""
                      />
                      <span className="colorCardTitle"> Nguyễn Thanh Tùng</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
