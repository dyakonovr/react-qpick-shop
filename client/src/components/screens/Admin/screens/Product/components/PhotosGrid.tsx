import classes from "./styles.module.scss";
import { FormLabel } from "@/components/ui/shadcn/form";

function AdminProductFormPhotosGrid({ images }: { images: string[] }) {
  return (
    images && (
      <div>
        <FormLabel>Все фотографии:</FormLabel>
        <div className="grid grid-cols-3 gap-2">
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} />
              <span title={image} className={classes.image_value}>
                ({index + 1}) {image}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default AdminProductFormPhotosGrid;
