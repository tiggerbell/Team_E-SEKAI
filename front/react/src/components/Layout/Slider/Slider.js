import React, { Component } from "react";
import Slider from "react-slick";
// 커스터마이징 파일 css Style을 바꾸려면 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick-theme.css';
import './slick.css';
import classes from './Slider.module.css';
import Button from "../../UI/Button";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      // carousel 밑에 지정 콘텐츠로 바로 이동할 수 있는 버튼을 뜻한다. flase 할시 사라진다.
      dots: true,
      // 콘텐츠 끝까지 갔을 때 다음 콘텐츠를 처음 콘텐츠로 가져와 반복한다.
      infinite: true,
      // 콘텐츠를 넘어갈 때 속도이다. 단위 (ms)이다. 1000ms = 1s
      speed: 500,
      // 한 화면에 보이는 콘텐츠 개수를 말한다.
      slidesToShow: 1,
      // 한 번에 넘어가는 콘텐츠 수이다. 2로 정하면 2개씩 넘어간다.
      slidesToScroll: 1
    };

    return (
      <div className={classes['slider-box']}>
        <Slider {...settings}>
          <div className={classes['slider-range']}>
            <h3>1번째 slide</h3>
            <Button>click</Button>
          </div>
          <div className={classes['slider-range']}>
            <h3>2번째 slide</h3>
          </div>
          <div className={classes['slider-range']}>
            <h3>3번째 slide</h3>
          </div>
          <div className={classes['slider-range']}>
            <h3>4번째 slide</h3>
          </div>
        </Slider>
      </div>
    );
  }
}