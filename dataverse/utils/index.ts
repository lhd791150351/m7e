/* eslint-disable import/prefer-default-export */
export function isMobile() {
  return navigator.userAgent.match(
    /(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|windows phone)/i,
  );
}
