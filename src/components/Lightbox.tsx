import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export type LightboxImage = { src: string; alt?: string };

export function ImageLightbox({
  open,
  index,
  slides,
  onClose,
}: {
  open: boolean;
  index: number;
  slides: LightboxImage[];
  onClose: () => void;
}) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Zoom, Counter, Thumbnails]}
      zoom={{ maxZoomPixelRatio: 4, scrollToZoom: true, doubleTapDelay: 250 }}
      counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      controller={{ closeOnBackdropClick: true }}
      carousel={{ finite: false }}
      styles={{ container: { backgroundColor: "rgba(20, 14, 10, 0.95)" } }}
    />
  );
}
