function popUpImage() {
  $(
    '.trx_addons_hover_icon.modal-show, .modal-show.click-mobile'
  ).magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below

    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('a')
          ? openerElement
          : openerElement.find('img');
      }
    },

    image: {
      cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

      titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
      // Or the function that should return the title. For example:
      // titleSrc: function(item) {
      //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      // }

      verticalFit: true, // Fits image in area vertically

      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    }
  });
}
