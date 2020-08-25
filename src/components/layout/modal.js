import React from "react";

function Modal() {
  const closeModal = () => {
    document.querySelector(".modal").classList.remove("active");
  };
  return (
    <section className="modal">
      <div className="modal__inner">
        <div className="modal__close" onClick={closeModal}>
          <i className="fas fa-times"></i>
        </div>
        <div className="modal__content">
          <img src="assets/images/popup/pic.png" alt="modal" />
          <div className="modal__content--wrapper">
            <div className="modal__content--text">
              <h1>Gửi Email</h1>
              <p>
                Đăng ký Email ngay hôm nay để nhận đươc thông tin về các sự
                kiện, các chương trình giảm giá của chúng tôi sớm nhất!
              </p>
              <form action="#" method="post">
                <input
                  type="email"
                  name="email"
                  placeholder="Email của bạn..."
                />
                <button className="btn" type="submit">
                  GỬI EMAIL
                </button>
                <div>
                  <input id="modal-check" type="checkbox" name="get-noti" />
                  <label htmlFor="modal-check">
                    Không hiển thị lại thông báo này
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
