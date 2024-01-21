import React, { useEffect } from 'react';

const Typewriter = ({ phrases, period }) => {
  useEffect(() => {
    const TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      const that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    };

    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      const toRotate = JSON.parse(elements[i].getAttribute('data-type'));
      const periodAttr = elements[i].getAttribute('data-period');
      const periodValue = periodAttr ? parseInt(periodAttr, 10) : period;

      if (toRotate) {
        new TxtType(elements[i], toRotate, periodValue);
      }
    }

    // INJECT CSS
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
    document.body.appendChild(css);

    // Clean up on component unmount
    return () => {
      document.body.removeChild(css);
    };
  }, [period, phrases]);

  return (
    <a href="" className="typewrite" data-period={period} data-type={JSON.stringify(phrases)}>
      Hi, I'm Si.
    </a>
  );
};

export default Typewriter;
